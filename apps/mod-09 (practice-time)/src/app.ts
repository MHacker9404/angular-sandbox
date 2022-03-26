enum ProjectStatus {
    ACTIVE,
    FINISHED,
}

class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) {}
}

type ListenerFn<T> = (items: T[]) => void;

//  project state management
abstract class StateBase<T> {
    protected _listeners: ListenerFn<T>[] = [];

    public addListener = (listerFn: ListenerFn<T>) => {
        this._listeners.push(listerFn);
    };
}
class ProjectState extends StateBase<Project> {
    private _projects: Project[] = [];
    private static _instance: ProjectState;

    public static get instance(): ProjectState {
        if (!this._instance) {
            this._instance = new ProjectState();
        }
        return this._instance;
    }

    private constructor() {
        super();
    }

    public addProject = (
        title: string,
        description: string,
        people: number
    ) => {
        const project = new Project(
            Math.random().toString(),
            title,
            description,
            people,
            ProjectStatus.ACTIVE
        );
        this._projects.push(project);

        this._updateListeners();
    };

    public moveProj = (id: string, status: ProjectStatus): void => {
        console.info('moveProj', id, status);

        const project = this._projects.find((p) => p.id === id);
        if (project && project.status !== status) {
            project.status = status;

            this._updateListeners();
        }
    };

    private _updateListeners = (): void => {
        for (const listener of this._listeners) {
            listener(this._projects.slice());
        }
    };
}

const projectState = ProjectState.instance;

//  validation
interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(obj: Validatable): boolean {
    let isValid = true;
    if (obj.required) {
        isValid = isValid && obj.value.toString().trim().length !== 0;
    }
    if (obj.minLength != null && typeof obj.value === 'string') {
        isValid = isValid && obj.value.trim().length > obj.minLength;
    }
    if (obj.maxLength != null && typeof obj.value === 'string') {
        isValid = isValid && obj.value.trim().length < obj.maxLength;
    }
    if (obj.min != null && typeof obj.value === 'number') {
        isValid = isValid && obj.value > obj.min;
    }
    if (obj.max != null && typeof obj.value === 'number') {
        isValid = isValid && obj.value < obj.max;
    }
    return isValid;
}

//  autobind decorator
function autobind(_: any, __: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    const newDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = method.bind(this);
            return boundFn;
        },
    };
}

abstract class ComponentBaseClass<
    T extends HTMLElement,
    U extends HTMLElement
> {
    protected _templateElement: HTMLTemplateElement;
    protected _hostElement: U;
    protected _element: T;

    constructor(
        templateId: string,
        hostElementId: string,
        insertAtStart: boolean,
        newElementId?: string
    ) {
        this._templateElement = document.getElementById(
            templateId
        ) as HTMLTemplateElement;
        this._hostElement = <U>document.getElementById(hostElementId)!;

        const importedNode = document.importNode(
            this._templateElement.content,
            true
        );
        this._element = <T>importedNode.firstElementChild;
        if (newElementId) {
            this._element.id = newElementId;
        }

        this._attach(insertAtStart);
    }

    protected abstract _configure(): void;
    protected abstract _renderContent(): void;

    private _attach = (insertAtStart: boolean) =>
        this._hostElement.insertAdjacentElement(
            insertAtStart ? 'afterbegin' : 'beforeend',
            this._element
        );
}

//  drag and drop interfaces
interface Draggable {
    dragStartHandler: (event: DragEvent) => void;
    dragEndHandler: (event: DragEvent) => void;
}

interface DropTarget {
    //  permit drop
    dragOverHandler: (event: DragEvent) => void;
    //  handle drop
    dropHandler: (event: DragEvent) => void;
    //  visual feedback
    dragLeaveHandler: (event: DragEvent) => void;
}

class ProjectItem
    extends ComponentBaseClass<HTMLLIElement, HTMLUListElement>
    implements Draggable
{
    constructor(hostId: string, private _project: Project) {
        super('single-project', hostId, false, _project.id);

        this._configure();
        this._renderContent();
    }

    get people(): string {
        if (this._project.people === 1) {
            return '1 person';
        } else return `${this._project.people} people`;
    }

    protected override _configure = () => {
        this._element.setAttribute('draggable', 'true');

        this._element.addEventListener('dragstart', this.dragStartHandler);
        this._element.addEventListener('dragend', this.dragEndHandler);
    };

    protected override _renderContent = () => {
        this._element.querySelector('h2')!.textContent = this._project.title;
        this._element.querySelector('h3')!.textContent = this.people;
        this._element.querySelector('p')!.textContent =
            this._project.description;
    };

    dragStartHandler = (event: DragEvent) => {
        event.dataTransfer?.setData('text/plain', this._project.id);
        // event.dataTransfer?.setData('text/json', JSON.stringify(this._project));
        event.dataTransfer!.effectAllowed = 'move';
    };

    dragEndHandler = (_: DragEvent) => {
        console.info(`drag end`);
    };
}

class ProjectList
    extends ComponentBaseClass<HTMLElement, HTMLDivElement>
    implements DropTarget
{
    private _assignedProjects: Project[] = [];

    constructor(private _type: 'active' | 'finished') {
        super('project-list', 'app', false, `${_type}-projects`);

        this._configure();
        this._renderContent();
    }

    private _renderProjects = () => {
        const listEl = document.getElementById(
            `${this._type}-projects-list`
        ) as HTMLUListElement;
        listEl.innerHTML = '';
        for (const project of this._assignedProjects) {
            new ProjectItem(this._element.querySelector('ul')!.id, project);
        }
    };

    protected override _renderContent = () => {
        const listId = `${this._type}-projects-list`;
        this._element.querySelector('ul')!.id = listId;
        this._element.querySelector(
            'h2'
        )!.textContent = `${this._type.toUpperCase()} PROJECTS`;
    };

    protected override _configure = () => {
        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter((proj) => {
                if (this._type === 'active') {
                    return proj.status === ProjectStatus.ACTIVE;
                } else {
                    return proj.status === ProjectStatus.FINISHED;
                }
            });
            this._assignedProjects = relevantProjects;
            this._renderProjects();
        });

        this._element.addEventListener('dragover', this.dragOverHandler);
        this._element.addEventListener('dragleave', this.dragLeaveHandler);
        this._element.addEventListener('drop', this.dropHandler);
    };

    dragOverHandler = (event: DragEvent): void => {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault(); //  default is to prevent dropping

            const el = this._element.querySelector('ul');
            el?.classList.add('droppable');
        }
    };

    dropHandler = (event: DragEvent): void => {
        const projId = event.dataTransfer!.getData('text/plain');
        ProjectState.instance.moveProj(
            projId,
            this._type === 'active'
                ? ProjectStatus.ACTIVE
                : ProjectStatus.FINISHED
        );
    };

    dragLeaveHandler = (event: DragEvent): void => {
        const el = this._element.querySelector('ul');
        el?.classList.remove('droppable');
    };
}

class ProjectInput extends ComponentBaseClass<HTMLFormElement, HTMLDivElement> {
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput: HTMLInputElement;

    button: HTMLButtonElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInput = this._element.querySelector(
            '#title'
        ) as HTMLInputElement;
        this.descriptionInput = this._element.querySelector(
            '#description'
        ) as HTMLInputElement;
        this.peopleInput = this._element.querySelector(
            '#people'
        ) as HTMLInputElement;

        this.button = this._element.querySelector(
            'button'
        ) as HTMLButtonElement;

        this._configure();
        this._renderContent();
    }

    private _gatherUserInput = (): [string, string, number] | void => {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const people = this.peopleInput.value;
        const titleValidate: Validatable = { value: title, required: true };
        const descValidate: Validatable = {
            value: description,
            required: true,
            minLength: 5,
        };
        const peopleValidate: Validatable = {
            value: +people,
            required: true,
            min: 1,
            max: 5,
        };
        if (
            !validate(titleValidate) ||
            !validate(descValidate) ||
            !validate(peopleValidate)
        ) {
            alert('Invalid input - please try again');
            return;
        } else {
            return [title, description, +people];
        }
    };

    private _clearInputs = () => {
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.peopleInput.value = '';
    };

    private _submitHandler = (event: Event) => {
        event.preventDefault();
        const userInput = this._gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);

            this._clearInputs();
        }
    };

    protected override _configure = () => {
        this._element.addEventListener('submit', this._submitHandler);
    };

    protected override _renderContent = () => {};
}

const pInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
