import { ComponentBaseClass } from "./base-component";
import { DropTarget } from "../models/drag-drop-interfaces";
import { ProjectItem } from "./project-item";
import { projectState } from "../state/state-mgt";
import { ProjectStatus } from "../models/proj-model";
import { ProjectState } from "../state/state-mgt";
import { Project } from "../models/proj-model";

export class ProjectList
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
        if (
            event.dataTransfer &&
            event.dataTransfer.types[0] === 'text/plain'
        ) {
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
