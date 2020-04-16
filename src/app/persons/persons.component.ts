import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';
import { not } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'

})
export class PersonsComponent implements OnInit, OnDestroy {

  // door aanpassingen van de Dependencie injectie kunnen we de input weghalen
  //@Input() personsList : string[];
  personsList : string[];

  private personsListSubscription : Subscription;
  private PersonsLoaded : boolean = false;
  
  //private personService : PersonsService;

/* Om een lijst met personen te kunnen vullen vanuit de aanroepende component
   voeg Input bij in bovenste regel...import { Component, Input } from '@angular/core';
   en dan de @Input voor de personslist om de lijst te kunnen aanspreken
   */

   constructor(private personService: PersonsService) {
      //this.personsList = prsService.persons;
      //this.personService = prsService;
      console.log('initialize');
      this.PersonsLoaded = false;
   }
   ngOnDestroy(){
    // om geheigen lekkage tegen te gaan moet je wel unsubscribe doen op de subscription
    this.personsListSubscription.unsubscribe(); 
    }
  
   ngOnInit() {

      // set op een listener voor de personsListChaanged
      // Neem een subscription op deze lijst
      this.personsListSubscription = this.personService.personsListChanged.subscribe(persons => {
       this.personsList = persons;  
      })
    // Dit vult normaal gesproken de array met data vanuit component  
    //this.personsList = this.personService.persons
    // nu halen we de data op via een get call
    console.log(this.PersonsLoaded);
    if (this.PersonsLoaded){

    } else {
      this.personService.fetchPersons();
      this.PersonsLoaded=true;
    }
      
    
  }

  onRemovePerson(personName : string){
    this.personService.removePerson(personName);
  }
  
}
