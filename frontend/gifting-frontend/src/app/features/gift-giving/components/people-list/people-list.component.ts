import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people$: Observable<PersonListItem[]>;
  constructor(private service:PersonDataService){
    this.people$ = service.getPeople()
  }

}
