import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css','../main.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UserInfoComponent {

}
