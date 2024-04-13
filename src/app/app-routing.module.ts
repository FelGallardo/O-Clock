import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
