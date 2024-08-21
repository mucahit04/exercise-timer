import { Component, ElementRef } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule, FormsModule, CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 359, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 359, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class TimerComponent {

  hardPace 	= 20;
  slowPace = 10;
  isHardPace = true;
  isStarted = false;
  interval: string | number | NodeJS.Timeout | undefined;

  timeMenuOpened = false;

  selectedHardPaceDuration: number = 20;
  durationList: number[] = [10, 20, 30, 40, 50, 60];

  constructor(private _elementRef : ElementRef) { }

  time: number = 20;
  display :number = this.hardPace;

 start() {
  this.isStarted = true;
  this.timeMenuOpened = false;
    this.interval = setInterval(() => {
        if (this.display === 0) {
          if(this.isHardPace){
            this.display = this.slowPace;
            this.isHardPace = false;
          }else{
            this.display = this.hardPace;
            this.isHardPace = true;
          }
        } else {
          this.display = this.display -1
        }

      console.log(this.display);
    }, 1000);
  }
  stop() {
    this.isStarted = false;
    clearInterval(this.interval);
    this.display = this.time;
  }

  onHardDurationChange(event: any){
      this.time = event.value.duration;
      this.display = this.time;
      this.stop();
  }
    
  onSlowDurationChange(event: any){
    this.slowPace = event.value.duration;
    this.stop();
  }

  
}
