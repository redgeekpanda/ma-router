import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { DelayedGuard } from './shared/guards/delayed-guard.service';

const routes: Routes = [
  {
    // TODO: check http://localhost:4200/main
    // placed in root component <router-outlet></router-outlet>
    path: 'main',
    component: MainComponent, children: [
      {
        // TODO: check http://localhost:4200/main/child
        // placed in MainComponent <router-outlet></router-outlet> specified above
        path: 'child',
        component: MainComponent,
      },
    ],
  },
  {
    // TODO: check http://localhost:4200/child
    path: 'child',
    children: [
      {
        // TODO: check http://localhost:4200/child/child
        // placed in root component <router-outlet></router-outlet>
        path: 'child',
        component: MainComponent,
      },
    ],
  },
  {
    // TODO: check http://localhost:4200/lazy
    path: 'lazy',
    loadChildren: './modules/lazy-app-part/lazy-app-part.module#LazyAppPartModule', // lazy loading
    canLoad: [DelayedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // should be after all "RouterModule.forChild" and modules with it
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
