import { Component, OnInit, NgModule, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Server from '../server.model';
import { FormsModule } from '@angular/forms';
import { ServerElementComponent } from '../server-element/server-element.component';

@Component({
    selector: 'nx-apps-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
    serverElements: Server[] = [];
    // newServerName = '';
    // newServerContent = '';

    @Output() serverCreated: EventEmitter<Server> = new EventEmitter<Server>();
    @Output('bpCreated') blueprintCreated: EventEmitter<Server> = new EventEmitter<Server>();

    @ViewChild('serverContent', { static: true }) serverContent!: ElementRef;

    constructor() {}

    ngOnInit(): void {}

    onAddServer = async (element: HTMLInputElement): Promise<void> => {
        const serverName = element.value;
        const serverContent = (this.serverContent.nativeElement as HTMLInputElement).value;
        this.serverCreated.emit(new Server(serverName, 'server', serverContent));
    }

    onAddBlueprint = async (element: HTMLInputElement): Promise<void> => {
        const serverName = element.value;
        const serverContent = (this.serverContent.nativeElement as HTMLInputElement).value;
        this.blueprintCreated.emit(new Server(serverName, 'blueprint', serverContent));
    }
}

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CockpitComponent],
    exports: [CockpitComponent],
})
export class CockpitComponentModule {}
