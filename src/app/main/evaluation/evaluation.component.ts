import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css','../main.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EvaluationComponent {
  public complaint!:string;
  ngAfterViewInit(){
    console.log(this.complaint)
  }
  section8(event:any){
    this.complaint=event.target.value;
    console.log(event)
  }
  RatingQuestions:Array<{
    section:string,
    ques:string
  }>=[
    {
      section:"section2",
      ques:"ماهي درجة رضاك عن الخدمة بشكل عام ؟"
    },
    {
      section:"section3",
      ques:"ماهي درجة رضاك عن  أداء تنفيذ الموظف الفني للخدمة المقدمة لك بشكل عام ؟"
    },
    {
      section:"section4",
      ques:"ماهي درجة رضاك عن وقت  تنفيذ الخدمة المقدمة لك ؟"
    },
    {
      section:"section5",
      ques:"ماهي درجة رضاك عن أداء موظف خدمة العملاء بمركز الاعمال الذي قام  بتقديم الخدمة لك ؟"
    },
    {
      section:"section6",
      ques:"ماهي درجة رضاك عن المدة الزمنية المستغرقة للرد على طلب الخدمة من مركز الاعمال (تقديم طلب الحصول على الخدمة) ؟"
    },
    {
      section:"section7",
      ques:"ماهي درجة رضاك عن الرسوم المخصصة للخدمة ( في حال كانت الخدمة مجانية اختر الرقم 6 خدمة مجانية) ؟ "
    },
    {
      section:"section9",
      ques:"ماهي درجة رضاك عن خدمات الهيئة بشكل عام ؟ "
    },

  ]

  radioEasyHardOptions=[
    {
      value:"1",
      title:"غير سهل على الإطلاق"
    },
    {
      value:"2",
      title:"غير سهل"
    },
    {
      value:"3",
      title:"محايد"
    },
    {
      value:"4",
      title:"سهل "
    },
    {
      value:"5",
      title:"سهل جدًا"
    },
    {
      value:"6",
      title:"لا ينطبق"
    },
  ]

  radioSatOptions=[
    {
      value:"1",
      title:"غير راضي على الإطلاق"
    },
    {
      value:"2",
      title:"غير راضي"
    },
    {
      value:"3",
      title:"محايد"
    },
    {
      value:"4",
      title:"راضي"
    },
    {
      value:"5",
      title:"راضي جدا"
    },
    {
      value:"6",
      title:"لا ينطبق"
    },
  ]

  radioYesNoOptions=[
    {
      id:'Yes',
      value:true,
      title:"نعم"
    },
    {
      id:'No',
      value:false,
      title:"لا"
    },
  ]

  onChange = (value: any) => {
    console.log(value);
  };
}
