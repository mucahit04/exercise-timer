import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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
export class AppComponent implements OnInit{
  @ViewChild(TimerComponent)
  child!: TimerComponent;

ngOnInit(): void {
  if(this.child){
    this.child.sub.subscribe(s=> {
      this.isStarted = s;
    })
  }
}

  title = 'exercise-app';
  isStarted = false;
  hardPace = 20;
  slowPace = 10;
  isHardPace = true;

  timeMenuOpened = false;

  startClicked(){
    this.isStarted = true;
    this.child.start();
  }

  stopClicked(){
    this.isStarted = false;
    this.child.stop();
  }

  toggleTimeMenu(){
    this.timeMenuOpened = !this.timeMenuOpened;
    this.child.timeMenuOpened = !this.child.timeMenuOpened;
    console.log("menu opened");
  }
}
