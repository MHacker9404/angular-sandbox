import { ComponentBaseClass } from "./base-component";
import { Validatable, validate } from "../utils/validation";
import { projectState } from "../state/state-mgt";

export class ProjectInput extends ComponentBaseClass<
    HTMLFormElement,
    HTMLDivElement
> {
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
        const titleValidate: Validatable = {
            value: title,
            required: true,
        };
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
