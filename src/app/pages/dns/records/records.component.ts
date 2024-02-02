import {Component} from '@angular/core';
import {routingAnimation} from "../../../animation/routing.animation";
import {ButtonComponent} from "@feel/form";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dns',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  animations: [routingAnimation],
  standalone: true,
  imports: [
    ButtonComponent,
    RouterOutlet
  ]
})
export class RecordsComponent {

}
