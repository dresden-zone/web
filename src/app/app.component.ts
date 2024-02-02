import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NotificationListComponent} from "@feel/notification";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NotificationListComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
