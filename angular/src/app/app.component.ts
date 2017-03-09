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
    particlesJS.load('particles-js', 'assets/test.json', function() {
      console.log('callback - particles-js config loaded');
    });
    window.addEventListener('resize', () => {
      this.canvasResize();
    }, true);
    this.canvasResize();
  }

  protected canvasResize() {
    let canvas = document.getElementById('particles-js').getElementsByTagName('canvas')[0];
    if (canvas) {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }
  }
}
