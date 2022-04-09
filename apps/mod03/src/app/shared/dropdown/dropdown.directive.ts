import { Directive, OnInit, NgModule, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[nxAppsDropdown]',
})
export class DropdownDirective implements OnInit {
    private _closed: boolean = true;

    //  alternative
    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen(event: Event){
        console.info('clicked');

        // if (this._closed) {
        //     this._renderer.addClass(this._elementRef.nativeElement, 'open');
        // } else {
        //     this._renderer.removeClass(this._elementRef.nativeElement, 'open');
        // }
        // this._closed = !this._closed;
        this.isOpen = !this.isOpen;
    };

    constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [DropdownDirective],
    exports: [DropdownDirective],
})
export class DropdownDirectiveModule {}
