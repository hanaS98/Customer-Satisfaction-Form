import { Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  error=false;
  @ViewChild('f') dataForm?: NgForm;
  onSubmit(value: any) {
    console.log(this.dataForm?.value);

  }
  complaint='لا';
  result!:string;
  section8(event:any){
    // this.complaint=event.target.value;
    console.log(event.srcElement.name)
  }
}
