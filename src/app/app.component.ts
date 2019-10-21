import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  onSearch(form_value: any) {
    if (!form_value.keywords) {
      alert('You must type in a keyword to search for!');
      return;
    }
    this.router.navigate(['search', form_value.keywords]);
  }

}
