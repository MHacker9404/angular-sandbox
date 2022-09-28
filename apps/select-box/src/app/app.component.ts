import { Component } from '@angular/core';

@Component({
  selector: 'nx-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-box';

  bootOptions: any[] = [
    { id: 1, OSBootName: 'OS: Fresh if unit boot to Fresh OS' },
    { id: 2, OSBootName: 'OS: Customer if unit boot to customer OS' },
    { id: 3, OSBootName: 'OS: CSAT if unit has admin account with username match CSAT test account standard' },
    { id: 4, OSBootName: 'OS: Fail if unit does NOT boot to any of above' }
  ];
  osBootOption: number = -1;
}
