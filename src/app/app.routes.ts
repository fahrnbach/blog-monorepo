import { Routes } from '@angular/router';
import { BlogPostComponent } from './content/blog-post/blog-post.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio-site',
    pathMatch: 'full'
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./content/blog-post/blog-post.component').then(m => m.BlogPostComponent)
  },
  {
    path: '**',
    redirectTo: 'portfolio-site'
  }
];
