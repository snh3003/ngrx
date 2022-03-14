import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() n: any;

  constructor() {}

  ngOnInit(): void {}

  handleReset() {
    this.n = 0;
  }

  handleAdd() {
    this.n++;
  }

  handleSubtract() {
    this.n--;
  }
}
