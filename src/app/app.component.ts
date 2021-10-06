import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  foods = of([
    { name: 'Apple' },
    { name: 'Orange' },
    { name: 'Lemon' },
    { name: 'Tomato' },
  ]);
}
