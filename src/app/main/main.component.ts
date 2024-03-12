import { Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  error=true;
  @ViewChild('f') dataForm?: NgForm;
  constructor(
    private http: HttpClient,
  ) {}


  public opened = false;

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.dataForm?.reset();
    this.opened = false;
  }

  onSubmit(value: any) {
    console.log(this.dataForm?.value);
    window.scrollTo(0, 0)
    if(this.dataForm?.valid === true){
      this.error=true;

      this.http.post('https://prod-05.westeurope.logic.azure.com:443/workflows/3b6f66558f734afaaa2555bad2c10bcd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=J6jGmJLZ7suKYmH8dbkrwAZjHjd7mQVg6t_Tl1vDtkU',this.dataForm?.value)
      .subscribe((res)=>{
        console.log(res)
      })

      this.opened = true;
    }else{
      this.error =false;
    }


  }
  complaint='لا';
  result!:string;

}
