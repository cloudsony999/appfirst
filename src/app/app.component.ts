import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  abc = 'students and trainer all of ';
  name="pallabi";

  demo()
  {
    alert('I AM AN ALERT!!!!')
  }
}
