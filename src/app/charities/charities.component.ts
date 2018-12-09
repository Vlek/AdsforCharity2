import { Component } from '@angular/core';

export interface Charity {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})

export class CharitiesComponent {
  charities: Charity[] = [
    {value: 0, viewValue: 'Random'},
    {value: 1, viewValue: 'Habitat for Humanity'},
    {value: 2, viewValue: 'The Foodbank'},
    {value: 3, viewValue: 'WildAid'}
  ];
}
