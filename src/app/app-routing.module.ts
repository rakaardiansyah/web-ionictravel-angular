import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'company-profile',
    loadChildren: () =>
      import('./pages/company-profile/company-profile.module').then((m) => m.CompanyProfilePageModule
      ),
  },
  {
    path: 'produk',
    loadChildren: () =>
      import('./pages/produk/produk.module').then((m) => m.ProdukPageModule),
  },
  {
    path: 'paket',
    loadChildren: () =>
      import('./pages/paket/paket.module').then((m) => m.PaketPageModule),
  },
  {
    path: 'daftar-kemitraan',
    loadChildren: () =>
      import('./pages/daftar-kemitraan/daftar-kemitraan.module').then((m) => m.DaftarKemitraanPageModule
      ),
  },
  {
    path: 'jasa',
    loadChildren: () =>
      import('./pages/jasa/jasa.module').then((m) => m.JasaPageModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/faq/faq.module').then((m) => m.FaqModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
