import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = [ 'Lima', 'Surco', 'Miraflores' ];

  data1: number[] = [ 200, 150, 300 ];
}
