import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature-1',
    loadComponent: () =>
      import('./features/feature-1/feature-1.component').then(
        (m) => m.Feature1Component
      ),
    data: { shouldReuse: true },
  },
  {
    path: 'feature-2',
    loadComponent: () =>
      import('./features/feature-2/feature-2.component').then(
        (m) => m.Feature2Component
      ),
    data: { shouldReuse: true },
  },
  {
    path: 'feature-3',
    loadComponent: () =>
      import('./features/feature-3/feature-3.component').then(
        (m) => m.Feature3Component
      ),
  },
];
