import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonsComponent} from './persons/persons.component';
import { PersonInutComponent } from './persons/person-input.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInutComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule , AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
