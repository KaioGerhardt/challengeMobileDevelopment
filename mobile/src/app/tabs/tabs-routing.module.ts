import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '/calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: '/new-event',
        loadChildren: () => import('../new-event/new-event.module').then(m => m.NewEventPageModule)
      },
      {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
