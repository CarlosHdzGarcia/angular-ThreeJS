import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewSceneComponent } from './view-scene/view-scene.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ViewSceneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-three-angular';
}
