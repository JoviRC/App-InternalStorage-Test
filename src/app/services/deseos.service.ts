import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {
  listas: Lista[] = []

  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(arreglo: Lista) {
    this.listas = this.listas.filter(Datos => {
     return  Datos.id !== arreglo.id});
    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find((listaData) => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = []
    }
  }


}
