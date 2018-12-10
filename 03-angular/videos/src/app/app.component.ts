import { Component } from '@angular/core';

function DecoradorMetodo() {
  console.log('test');
}

@Component({ // Decorador
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videos';
  // @DecoradorMetodo()
  metodo():number {
	return 0;
  }
}
