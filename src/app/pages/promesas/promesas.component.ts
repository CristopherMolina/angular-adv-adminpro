import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios=> {
      console.log(usuarios);
    });
  }

  //PROMESAS
    // const promesa = new Promise((resolve, reject) => {
    //   if(false) {
    //     resolve("resuelto");
    //   }else{
    //     reject("ocurrio un error");
    //   }   
    // });
    
    // promesa
    // .then((mensaje)=> {
    //   console.log(mensaje);
    // })
    // .catch(error => console.log("error en la promesa",error));

    // console.log("fin");

  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });
  }

}
