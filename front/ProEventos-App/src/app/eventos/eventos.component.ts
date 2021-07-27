import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any; // criacao do tipo eventos sem atribuir valor
  constructor(private http: HttpClient) { }


  public getEventos():void {



    // utiliza o metodo GET do protocolo http
    // dentro da url especificada e vai se inscrever
    // nesse observable

    this.http.get('https://localhost:5001/api/eventos').subscribe(
        response => this.eventos = response,
        error => console.log(error)

    );

  }
  //metodo chamado antes de interpretar o HTML
  ngOnInit(): void {

    this.getEventos();

  }

}
