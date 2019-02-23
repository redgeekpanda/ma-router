import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  {
    // TODO: check http://localhost:4200/lazy/data
    path: 'data',
    component: DataComponent,
    // will be available as Observable<{ fromRoutes, fromResolver }> in <ActivatedRoute>.data
    data: {fromRoutes: 'Static data from route'},
    resolve: {fromResolver: DataService},
  },
  {path: '**', redirectTo: 'data', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    DataComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class LazyAppPartModule {}
