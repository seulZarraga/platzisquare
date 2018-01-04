import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  listo = false;
  nombre = '';
  nombre2 = '';
  lugares:any = [
  	{plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Floreria la gardenia'},
  	{plan: 'gratuito', cercania: 1, distancia: 1.9, active: true, nombre: 'Pasteleria el gordo'},
  	{plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Estetica jerry'},
  	{plan: 'gratuito', cercania: 3, distancia: 17, active: true, nombre: 'Hotel el piojito'},
  	{plan: 'gratuito', cercania: 3, distancia: 19, active: true, nombre: 'Taller el chicarcas'},
  	{plan: 'gratuito', cercania: 3, distancia: 30, active: false, nombre: 'Tienda super mas'}
  ];
  lat:number = 19.4830638;
  lng:number = -99.0311904;

  constructor(){
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000)
  }

  hacerAlgo(){
  	alert('hacer algo');
  }
}
