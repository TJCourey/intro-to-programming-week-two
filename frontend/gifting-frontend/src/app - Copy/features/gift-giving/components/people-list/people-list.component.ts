import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonListItem } from '../../../../models/people';
import { PersonDataService } from 'src/app/services/people-data.service';



@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  people$: Observable<PersonListItem[]>;
  constructor(private service:PersonDataService) {
    // this is bad. More on that tomorrow.
    this.people$ = service.getPeople();
    // service.getPeople()
  }
}