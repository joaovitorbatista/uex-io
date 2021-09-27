import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  myControl = new FormControl();
  options: string[] = ['Curitiba', 'Campo Largo', 'Pinhais'];
}