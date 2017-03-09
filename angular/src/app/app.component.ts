import {Component, OnInit} from '@angular/core';
declare var particlesJS;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor () {
  }

  ngOnInit () {
    particlesJS.load('particles-js', 'assets/particles.json');
  }
}
