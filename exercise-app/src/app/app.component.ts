import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatButtonModule, MatSlideToggleModule, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(TimerComponent)
  child!: TimerComponent;

  title = 'exercise-app';
  isStarted = false;
  hardPace = 20;
  slowPace = 10;
  isHardPace = true;

  startClicked(){
    this.isStarted = true;
    this.child.start();
  }

  stopClicked(){
    this.isStarted = false;
    this.child.stop();
  }
}
