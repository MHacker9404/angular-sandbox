"use strict";
class ProjectState {
    constructor() {
        this._listeners = [];
        this._projects = [];
        this.addListener = (listerFn) => {
            this._listeners.push(listerFn);
        };
        this.addProject = (title, description, people) => {
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
    static get instance() {
        if (!this._instance) {
            this._instance = new ProjectState();
        }
        return this._instance;
    }
}
const projectState = ProjectState.instance;
function validate(obj) {
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
function autobind(_, __, descriptor) {
    const method = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            const boundFn = method.bind(this);
            return boundFn;
        },
    };
}
class ProjectList {
    constructor(_type) {
        this._type = _type;
        this._assignedProjects = [];
        this._renderProjects = () => {
            const listEl = document.getElementById(`${this._type}-projects-list`);
            for (const project of this._assignedProjects) {
                const listItem = document.createElement('li');
                listItem.textContent = project.title;
                listEl === null || listEl === void 0 ? void 0 : listEl.appendChild(listItem);
            }
        };
        this._renderContent = () => {
            const listId = `${this._type}-projects-list`;
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent = `${this._type.toUpperCase()} PROJECTS`;
        };
        this._attach = () => this.hostElement.insertAdjacentElement('beforeend', this.element);
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this._type}-projects`;
        projectState.addListener((projects) => {
            this._assignedProjects = projects;
            this._renderProjects();
        });
        this._attach();
        this._renderContent();
    }
}
class ProjectInput {
    constructor() {
        this._gatherUserInput = () => {
            const title = this.titleInput.value;
            const description = this.descriptionInput.value;
            const people = this.peopleInput.value;
            const titleValidate = { value: title, required: true };
            const descValidate = {
                value: description,
                required: true,
                minLength: 5,
            };
            const peopleValidate = {
                value: +people,
                required: true,
                min: 1,
                max: 5,
            };
            if (!validate(titleValidate) ||
                !validate(descValidate) ||
                !validate(peopleValidate)) {
                alert('Invalid input - please try again');
                return;
            }
            else {
                return [title, description, +people];
            }
        };
        this._clearInputs = () => {
            this.titleInput.value = '';
            this.descriptionInput.value = '';
            this.peopleInput.value = '';
        };
        this._submitHandler = (event) => {
            event.preventDefault();
            const userInput = this._gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, description, people] = userInput;
                projectState.addProject(title, description, people);
                this._clearInputs();
            }
        };
        this._configure = () => this.element.addEventListener('submit', this._submitHandler);
        this._attach = () => this.hostElement.insertAdjacentElement('afterbegin', this.element);
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInput = this.element.querySelector('#title');
        this.descriptionInput = this.element.querySelector('#description');
        this.peopleInput = this.element.querySelector('#people');
        this.button = this.element.querySelector('button');
        this._configure();
        this._attach();
    }
}
const pInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
//# sourceMappingURL=app.js.map