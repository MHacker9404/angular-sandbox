import { Directive, OnInit, NgModule, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
    selector: '[nxAppsUnless]',
})
export class UnlessDirective implements OnInit {
    @Input() set nxAppsUnless(value:boolean) {
        if (!value) {
            this._vcRef.createEmbeddedView(this._templateRef);
        }
        else {
            this._vcRef.clear();
        }
    }

    constructor(private _templateRef: TemplateRef<any>, private _vcRef: ViewContainerRef) {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [UnlessDirective],
    exports: [UnlessDirective],
})
export class UnlessDirectiveModule {}
