import { Component } from '@angular/core';

import  { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Platzisquare';
  listo = false;
  nombre = '';
  nombre2 = '';
  
  lat:number = 19.4830638;
  lng:number = -99.0311904;
  lugares = null;

  constructor(private lugaresService: LugaresService){

    lugaresService.getLugares().subscribe((lugares) =>{

      this.lugares = lugares;

      var myself = this;

      myself.lugares = Object.keys(myself.lugares).map(function (key) { return myself.lugares[key]; });

    });

  }


  hacerAlgo(){
  	alert('hacer algo');
  }
}
