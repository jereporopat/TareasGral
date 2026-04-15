import { HttpClient } from "@angular/common/http";
import {inject, Injectable, signal} from "@angular/core"

@Injectable({
    providedIn: 'root',
})
export class Api {
    http = inject(HttpClient);
    apiUrl = 'https://api.attackontitanapi.com/characters?name=';
    personaje = signal<any | null>(null);

    traerPorNombre(nombre: string){
        const peticion = this.http.get<any>(this.apiUrl + nombre);

        const suscripcion = peticion.subscribe((respuesta) => {
            if (respuesta.results && respuesta.results,length > 0){
                this.personaje.set(respuesta.results[0]);
            }
            suscripcion.unsubscribe();
        })
    }
}