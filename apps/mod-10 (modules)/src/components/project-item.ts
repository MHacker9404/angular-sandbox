import { ComponentBaseClass } from "./base-component";
import { Draggable } from "../models/drag-drop-interfaces";
import { Project } from "../models/proj-model";

export class ProjectItem
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
