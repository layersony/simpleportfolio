import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ContactComponent } from './contact/contact.component';
import { FilterdatePipe } from './filterdate.pipe';
import { ChangetoredDirective } from './changetored.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    ProjectdetailsComponent,
    ContactComponent,
    FilterdatePipe,
    ChangetoredDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
