import  { Injectable } from '@angular/core';
import  { AngularFireDatabase } from 'angularfire2/database/database';
import  { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()

export class LugaresService  {

	API_ENDPOINT = 'https://platzisquare-1515026963209.firebaseio.com';
	
	lugares:any = [

	  	{id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Floreria la gardenia'},
	  	{id: 2, plan: 'gratuito', cercania: 1, distancia: 1.9, active: true, nombre: 'Pasteleria el gordo'},
	  	{id: 3, plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Estetica jerry'},
	  	{id: 4, plan: 'gratuito', cercania: 3, distancia: 17, active: true, nombre: 'Hotel el piojito'},
	  	{id: 5, plan: 'gratuito', cercania: 3, distancia: 19, active: true, nombre: 'Taller el chicarcas'},
	  	{id: 6, plan: 'gratuito', cercania: 3, distancia: 30, active: false, nombre: 'Tienda super mas'}
	];

	constructor(private afDB:AngularFireDatabase, private http: Http){}

	public getLugares(){

		// return this.afDB.list('lugares/');

		return this.http.get(this.API_ENDPOINT + '/.json').map((result) =>{

			const data = result.json().lugares;

			return data;

		});
	}

	public buscarLugar(id){

		return this.lugares.filter((lugar) =>{ return lugar.id == id })[0] || null;
	}

	public guardarLugar(lugar){


		// this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

		const headers = new Headers({"Content-Type": "application/json"});

		return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers});

	}

	public editarLugar(lugar){


		this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

	}

	public getGeoData(direccion){
		// https://maps.googleapis.com/maps/api/geocode/json?address=56789

		return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + direccion);
	}

	public getLugar(id){

		return this.afDB.object('lugares/' + id);
	}
}
