import { OnInit, NgModule, Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[nxAppsBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor = 'transparent';
    @Input() highlightColor = 'blue';

    constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

    ngOnInit(): void {
        // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter(event: Event) {
        // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
     }

    @HostListener('mouseleave') mouseLeave(event: Event) {
        // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
     }

    @HostBinding('style.backgroundColor') backgroundColor!: string;
}

@NgModule({
    imports: [CommonModule],
    declarations: [BetterHighlightDirective],
    exports: [BetterHighlightDirective],
})
export class BetterHighlightDirectiveModule {}
