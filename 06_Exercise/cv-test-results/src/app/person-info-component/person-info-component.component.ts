import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-person-info-component',
  templateUrl: './person-info-component.component.html',
  styleUrls: ['./person-info-component.component.scss']
})
export class PersonInfoComponentComponent implements OnInit {

  person!: Person;
  message = "";
  years!: Array<number>;
  year = 18;
  persons!: Array<Person>;

  constructor() { 
    this.years = [];
    this.persons = [];

    for (let i = 18; i < 50; i++) {
      this.years.push(i);
    }

  }

  ngOnInit(): void {
  }

  enterInfo(personForm:any) {
    this.person = personForm.value;
    this.person.skills = [];

    for (let i = 0; i < 3; i++) {
      this.person.skills.push({"name":personForm.value["skills[" + i + "].name"], "knowledge":personForm.value["skills[" + i + "].knowledge"]})
    }

    // console.log(this.person);

    if (personForm.invalid) {
      this.message = "Please correct all errors and try again";
    } else {
      this.person.year = this.year;
      this.message = "";

      let p = Object.assign({}, this.person)
      console.log(p);
      
      this.persons.push(p);
    }
  }

  setYears(value:number) {
    this.year = value;
  }

}
