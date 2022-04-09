import { OnInit, NgModule, Directive, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[nxAppsBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
    constructor(private _elementRef: ElementRef) { }

    ngOnInit(): void {
        this._elementRef.nativeElement.style.backgroundColor = 'green';
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [BasicHighlightDirective],
    exports: [BasicHighlightDirective],
})
export class BasicHighlightDirectiveModule {}
