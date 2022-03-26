export abstract class ComponentBaseClass<
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
