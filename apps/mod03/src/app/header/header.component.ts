import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nx-apps-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Output() featureSelected: EventEmitter<'recipe'|'shopping'> = new EventEmitter<'recipe' | 'shopping'>();

    constructor() {}

    ngOnInit(): void {}

    onSelect(feature: 'recipe' | 'shopping') {
        this.featureSelected.emit(feature);
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
})
export class HeaderComponentModule {}
