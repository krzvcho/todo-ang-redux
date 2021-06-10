import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';

const routes: Routes = [
  {
    path: '',
    component: TodoContainerComponent,
    data: { title: 'ToDoApp with Redux Pattern' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
