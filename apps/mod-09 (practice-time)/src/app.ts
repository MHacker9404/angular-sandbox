//  project state management
class ProjectState {
    private _listeners: Function[] = [];
    private _projects: any[] = [];
    private static _instance: ProjectState;

    public static get instance(): ProjectState {
        if (!this._instance) {
            this._instance = new ProjectState();
        }
        return this._instance;
    }

    private constructor() {}

    public addListener = (listerFn: Function) => {
        this._listeners.push(listerFn);
    };

    public addProject = (
        title: string,
        description: string,
        people: number
    ) => {
        const project = {
            id: Math.random().toString(),
            title,
            description,
            people,
        };
        this._projects.push(project);

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

class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    private _assignedProjects: any[] = [];

    constructor(private _type: 'active' | 'finished') {
        this.templateElement = document.getElementById(
            'project-list'
        ) as HTMLTemplateElement;
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = `${this._type}-projects`;

        projectState.addListener((projects: any[]) => {
            this._assignedProjects = projects;
            this._renderProjects();
        });

        this._attach();
        this._renderContent();
    }

    private _renderProjects = () => {
        const listEl = document.getElementById(`${this._type}-projects-list`);
        for (const project of this._assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = project.title;
            listEl?.appendChild(listItem);
        }
    };

    private _renderContent = () => {
        const listId = `${this._type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector(
            'h2'
        )!.textContent = `${this._type.toUpperCase()} PROJECTS`;
    };

    private _attach = () =>
        this.hostElement.insertAdjacentElement('beforeend', this.element);
}

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput: HTMLInputElement;

    button: HTMLButtonElement;

    constructor() {
        this.templateElement = document.getElementById(
            'project-input'
        ) as HTMLTemplateElement;
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInput = this.element.querySelector(
            '#title'
        ) as HTMLInputElement;
        this.descriptionInput = this.element.querySelector(
            '#description'
        ) as HTMLInputElement;
        this.peopleInput = this.element.querySelector(
            '#people'
        ) as HTMLInputElement;

        this.button = this.element.querySelector('button') as HTMLButtonElement;

        this._configure();
        this._attach();
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

    private _configure = () =>
        this.element.addEventListener('submit', this._submitHandler);

    private _attach = () =>
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
}

const pInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
