import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// Dependency injection in Angular
// Dependency injection (DI), is an important application design pattern. 
// Angular has its own DI framework, which is typically used in the design of 
// Angular applications to increase their efficiency and modularity.

// Dependencies are services or objects that a class needs to perform its function. 
// DI is a coding pattern in which a class asks for dependencies from external 
// sources rather than creating them itself.

// In Angular, the DI framework provides declared dependencies to a class when that class 
// is instantiated. This guide explains how DI works in Angular, and how you use it to 
// make your apps flexible, efficient, and robust, as well as testable and maintainable.

@Injectable({providedIn: 'root'})

export class PersonsService {

    personsListChanged = new Subject<string[]>();

    //public persons: string[] = ['anna','polly','william','fabianne','nog een keer iets'];
    public persons: string[] = [];

    constructor(private http: HttpClient){

    }

    // let op.. In de originele anroep van de cursus zat een resuslt in de data die terug komt
    // hier hebben we dat NIET
    fetchPersons() {
        this.http
          .get<any>('https://private-anon-7ad9930646-starhub.apiary-mock.com/api/planets')
          // met pipe kun je allerlei berekeningen en bewerkingen operators ed uitvoeren
          .pipe(
           map(resData => {
             return resData.map(character => character.name);
            }
            )// end map
          )// end .pipe
          .subscribe(transformedData => {
        //    console.log(transformedData); 
            // deze regel doet een aanroep naar addperson om voor elk item een push te doen.
            transformedData.forEach(transformedData => {
                this.addPerson(transformedData);
            });
            // deze regel plempt gewoon de data in de array
          //  this.personsListChanged.next(transformedData);
          });
      }


    addPerson(name: string){
       // console.log('begin add person');
      //  console.log(name);
        if(name.length > 0){
            this.persons.push(name);
            this.personsListChanged.next(this.persons);
       //     console.log(this.persons);
       //     console.log('end add person');
          }
    }// end addperson
    
    removePerson(name: string){
        this.persons = this.persons.filter(person =>{
            return person !== name;  
        });
       // this.persons.pop(name);
       console.log(this.persons);
       this.personsListChanged.next(this.persons);
    }// end remoceperson
}