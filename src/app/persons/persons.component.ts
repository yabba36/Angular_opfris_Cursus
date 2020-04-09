import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'

})
export class PersonsComponent {

  @Input() personsList : string[];

/* Om een lijst met personen te kunnen vullen vanuit de aanroepende component
   voeg Input bij in bovenste regel...import { Component, Input } from '@angular/core';
   en dan de @Input voor de personslist om de lijst te kunnen aanspreken
   */
}
