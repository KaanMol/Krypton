import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {MockupsComponent} from "./mockups/mockups.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/mockups', pathMatch: 'full' },
  { path: 'mockups', component: MockupsComponent },
  { path: 'mockups/login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [];
