import {Component} from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html', 
    styleUrls: ['./person-input.component.css']

})
export class PersonInutComponent{
    // import the putput class @output 
    // Decorator that marks a class field as an output property and supplies 
    // configuration metadata. The DOM property bound to the output property 
    // is automatically updated during change detection.

    // Import the emitter class.
    // Use in components with the @Output directive to emit custom events 
    // synchronously or asynchronously, and register handlers for those events by 
    // subscribing to an instance.
    //  new Emitter en dan <>.. tussen de <> bepaald welke data er heen en weer wordt gestuurd.

    //@Output() personCreate = new EventEmitter<string>();

    enteredPersonName ='';

    constructor(private personService: PersonsService) {
        
    }

    onCreatePerson(){
       console.log('Created an person ' + this.enteredPersonName);
       this.personService.addPerson(this.enteredPersonName);

       this.enteredPersonName ='';
       //PersonsComponent.personsList.push(personName)
       
    }
}