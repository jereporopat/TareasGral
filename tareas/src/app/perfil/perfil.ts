import { Component, inject } from '@angular/core';
import { Github } from '../services/github';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  gitHubServices = inject(Github);

  ngOnInit(){
    this.gitHubServices.obtenerUsuarioGithub();
  }

  traerUsuario(){
    console.log(this.gitHubServices.usuarioGithub());
  }
}
