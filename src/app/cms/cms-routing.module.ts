import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaksComponent} from './pages/taks/taks.component';
import {GridComponent} from './pages/grid/grid.component';
import {CategoryComponent} from './pages/category/category.component';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'grid',
        pathMatch: 'full'
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'task',
        component: TaksComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule {
}
