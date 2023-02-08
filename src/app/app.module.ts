import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*componentes*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { BuscarComponent } from './content/buscar/buscar.component';
import { ListaComponent } from './content/lista/lista.component';
import { CategoriaComponent } from './content/categoria/categoria.component';
import { RegresarComponent } from './content/regresar/regresar.component';
/*componente para rutas*/
import { RouterModule, Routes } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';


//declarar rutas
const appRoutes: Routes =[
  {path:'inicio',component:InicioComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'lista',component:ListaComponent },
  {path:'categoría',component:CategoriaComponent},
  {path:'regresar',component:RegresarComponent},
  {path:'sesion',component:SesionComponent},
  {path:'registro',component:RegistroComponent},
  {path:'',component:InicioComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    BuscarComponent,
    ListaComponent,
    CategoriaComponent,
    RegresarComponent,
    SesionComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



