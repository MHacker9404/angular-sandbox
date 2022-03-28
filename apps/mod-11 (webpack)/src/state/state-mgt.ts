import { Project, ProjectStatus } from "../models/proj-model";

type ListenerFn<T> = (items: T[]) => void;

//  project state management
abstract class StateBase<T> {
    protected _listeners: ListenerFn<T>[] = [];

    public addListener = (listerFn: ListenerFn<T>) => {
        this._listeners.push(listerFn);
    };
}

export class ProjectState extends StateBase<Project> {
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

export const projectState = ProjectState.instance;
