import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = []; // criacao do tipo eventos sem atribuir valor
  public eventosFiltrados: any = []; // criacao do tipo eventos sem atribuir valor
  widthImg: number = 150;
  marginImg: number = 2;
  mostrarImagem : boolean = true;
  private _filtroLista: string = '';

  constructor(private http: HttpClient) { }


  public get filtroLista() : string {
    return this._filtroLista;
  }

  public set filtroLista(value: string)
  {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string) : any {
       filtrarPor = filtrarPor.toLocaleLowerCase();
       return this.eventos.filter(
         (         evento: { tema: string; local: string }) => evento.tema.toLocaleLowerCase()
         .indexOf(filtrarPor) !==  -1 || evento.local.toLocaleLowerCase().indexOf(filtrarPor) !==  -1

       )
  }

  alterarImagem () {
     this.mostrarImagem = !this.mostrarImagem;
  }

  public getEventos():void {
    // utiliza o metodo GET do protocolo http
    // dentro da url especificada e vai se inscrever
    // nesse observable
    this.http.get('https://localhost:5001/api/eventos').subscribe(
        response => {
          this.eventos = response
          this.eventosFiltrados = this.eventos;
        },
        error => console.log(error)

    );

  }
  //metodo chamado antes de interpretar o HTML
  ngOnInit(): void {
    this.getEventos();
 }
}
