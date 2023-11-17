import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {

  constructor(private router:Router) {}
studentlogin() {
  this.router.navigate(['/studentlogin']);
  console.log("hi")
}
adminlogin() {
  this.router.navigate(['/adminlogin']);
}

}
