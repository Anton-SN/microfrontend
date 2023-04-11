import "zone.js";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from "./environments/environment";
import { AppModule } from './app/app.module';

const mount = (el: HTMLElement) => {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
  el.innerHTML = '<auth-app></auth-app>'
}

if (!environment.production) {
  const devRoot = document.getElementById('dev-au-root') as HTMLDivElement;

  if (devRoot) {
    mount(devRoot)
  }
}

if (environment.production) {
  enableProdMode();
}

export { mount };
