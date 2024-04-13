import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'disponibilidad-dia',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'disponibilidad-dia',
    loadChildren: () => import('./disponibilidad-dia/disponibilidad-dia.module').then( m => m.DisponibilidadDiaPageModule)
  },
  {
    path: 'disponibilidad-hora',
    loadChildren: () => import('./disponibilidad-hora/disponibilidad-hora.module').then( m => m.DisponibilidadHoraPageModule)
  },
  {
    path: 'agendar-cliente',
    loadChildren: () => import('./agendar/agendar-cliente/agendar-cliente.module').then( m => m.AgendarClientePageModule)
  },
  {
    path: 'agendar-dia',
    loadChildren: () => import('./agendar/agendar-dia/agendar-dia.module').then( m => m.AgendarDiaPageModule)
  },
  {
    path: 'agendar-hora',
    loadChildren: () => import('./agendar/agendar-hora/agendar-hora.module').then( m => m.AgendarHoraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
