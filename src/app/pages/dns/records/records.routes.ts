import {Routes} from "@angular/router";
import {RecordsComponent} from "./records.component";
import {AComponent} from "./a/a.component";
import {AaaaComponent} from "./aaaa/aaaa.component";
import {CnameComponent} from "./cname/cname.component";
import {MxComponent} from "./mx/mx.component";
import {TxtComponent} from "./txt/txt.component";

export const routes: Routes = [{
  path: '',
  component: RecordsComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'a'},
    {path: 'a', component: AComponent},
    {path: 'aaaa', component: AaaaComponent},
    {path: 'cname', component: CnameComponent},
    {path: 'mx', component: MxComponent},
    {path: 'txt', component: TxtComponent}
  ]
}];
