import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RTL } from "@progress/kendo-angular-l10n";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { LabelModule } from "@progress/kendo-angular-label";

import { BrowserModule } from "@angular/platform-browser";
import { UploadsModule } from "@progress/kendo-angular-upload";

import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EvaluationComponent } from './main/evaluation/evaluation.component';
import { ServiceChannelComponent } from './main/service-channel/service-channel.component';
import { UserInfoComponent } from './main/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    EvaluationComponent,
    ServiceChannelComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DateInputsModule,
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    UploadsModule,
    ButtonsModule,
  ],
  providers: [{ provide: RTL, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
