import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'creategym',
    loadChildren: () => import('./pages/creategym/creategym.module').then( m => m.CreategymPageModule)
  },
  {
    path: 'gyms',
    loadChildren: () => import('./pages/gyms/gyms.module').then( m => m.GymsPageModule)
  },
  {
    path: 'gyms',
    loadChildren: () => import('./pages/gyms/gyms.module').then( m => m.GymsPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule)
  },
 
  {
    path: 'profilegym',
    loadChildren: () => import('./pages/profilegym/profilegym.module').then( m => m.ProfilegymPageModule)
  },
  {
    path: 'viewreview',
    loadChildren: () => import('./pages/viewreview/viewreview.module').then( m => m.ViewreviewPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./pages/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
