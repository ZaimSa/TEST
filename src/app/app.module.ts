import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './component/child.component';
import { TestService } from './service/test.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ChildComponent
  ],
  providers: [
    TestService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
