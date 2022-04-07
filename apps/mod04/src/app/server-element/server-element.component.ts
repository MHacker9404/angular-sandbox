import {
    Component,
    OnInit,
    NgModule,
    Input,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Server from '../server.model';

@Component({
    selector: 'nx-apps-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    @Input('serverElement') server!: Server;
    //  static:true required for access in ngOnInit
    @ViewChild('heading', { static: true }) heading!: ElementRef;
    //  static:true required for access in ngAfterContentInit
    @ContentChild('serverContent', { static: true }) serverContent!: ElementRef;

    constructor() {
        console.info('constructor');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.info('ngOnChanges', changes);
    }

    ngOnInit(): void {
        console.info('ngOnInit');
    }

    ngDoCheck(): void {
        console.info('ngDoCheck');
    }

    // ng-content projection
    ngAfterContentInit(): void {
        console.info('ngAfterContentInit');
    }

    // ng-content projection
    ngAfterContentChecked(): void {
        console.info('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.info('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.info('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.info('ngOnDestroy');
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [ServerElementComponent],
    exports: [ServerElementComponent],
})
export class ServerElementComponentModule {}
