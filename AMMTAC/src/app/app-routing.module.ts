import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'eventos', loadChildren: './pages/eventos/eventos.module#EventosPageModule' },
  { path: 'notif', loadChildren: './tab1/tab1.module#Tab1PageModule'},
  { path: 'inicio', loadChildren: './tab2/tab2.module#Tab2PageModule'},
  { path: 'cuenta', loadChildren: './tab3/tab3.module#Tab3PageModule'},
  { path: 'acceso', loadChildren: './pages/acceso/acceso.module#AccesoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
