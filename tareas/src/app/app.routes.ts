import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
    {
        path:'bienvenida',
        loadComponent: () => import('./bienvenida/bienvenida').then((a)=>a.Bienvenida)
    },
    {path:'error', loadComponent:() => import ('./error/error').then((a)=>a.Error)},
    {path:'login', loadComponent:()=> import ('./login/login').then((a)=>Login)},
    {path:'registro', loadComponent:()=> import ('./registro/registro').then((a)=>Registro)},
    {path:'sobre-mi', loadComponent:()=> import ('./sobre-mi/sobre-mi').then((a)=>SobreMi)},
    {path:'perfil', loadComponent:()=> import ('./perfil/perfil').then((a)=>Perfil)},
];
