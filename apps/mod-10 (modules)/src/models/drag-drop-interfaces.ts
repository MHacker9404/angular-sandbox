//  drag and drop interfaces
export interface Draggable {
    dragStartHandler: (event: DragEvent) => void;
    dragEndHandler: (event: DragEvent) => void;
}

export interface DropTarget {
    //  permit drop
    dragOverHandler: (event: DragEvent) => void;
    //  handle drop
    dropHandler: (event: DragEvent) => void;
    //  visual feedback
    dragLeaveHandler: (event: DragEvent) => void;
}
