import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Hel';
  genero: string = 'Femenino';
  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Miguel', 'Pedro', 'Hernando', 'Fernando', 'Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.genero == 'Femenino'){
      this.genero = 'Masculino';
      this.nombre = 'Miguel Jared';
    }
    else{
      this.genero = 'Femenino';
      this.nombre = 'Helena';
    }
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  //Key Value Pipe
  persona = {
    nombre: 'Miguel',
    edad: 20,
    direccion: 'Huejutla Hgo'
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve ('Tememos data de promesa');
    }, 3500);
  });
}
