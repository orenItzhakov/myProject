import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { OnlyTemplateComponent } from './components/only-template/only-template.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list/:id', component: ListComponent },
    { path: 'onlyTemplate', component: OnlyTemplateComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { } 