import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scores/scores.component';
import { JogarComponent } from './jogar/jogar.component';
import { UsersComponent } from './users/users.component';
import { ContadorComponent } from './contador/contador.component';

const routes: Routes = [
  {path: "topo", component: TopoComponent },
  {path: "painel", component: PainelComponent },
  {path: "contador", component: ContadorComponent },
  {path: "home", component: HomeComponent },
  {path: "scores", component: ScoresComponent },
  {path: "jogar", component: JogarComponent },
  {path: "users", component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
