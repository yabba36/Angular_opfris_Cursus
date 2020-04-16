import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInutComponent } from './persons/person-input.component';

// Routes is een array
// in de array komen de router paden.
// het eerste pad is de main pad dus leeg
const routes : Routes = [
    { path: '', component: PersonsComponent},
    { path: 'input' , component: PersonInutComponent}
];

//Decorator that marks a class as an NgModule and supplies configuration metadata.
// bij invoeren krijg je automatish import
// In de Module gaan we de routing aanmaken.
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// om deze module te kunnen gebruiken moeten we een export van de class doen.
export class AppRoutingModule{}
