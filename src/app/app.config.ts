import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRouteReuseStrategy } from './shared/classes/route-reuse-stategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: RouteReuseStrategy,
      useClass: AppRouteReuseStrategy,
    },
  ],
};
