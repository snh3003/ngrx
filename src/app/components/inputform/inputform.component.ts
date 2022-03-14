import { Component, OnInit } from '@angular/core';
import { RandomnameService } from 'src/app/services/randomname.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css'],
})
export class InputformComponent implements OnInit {
  n: number = 0;
  nArray: number[] = [];

  constructor(private randomService: RandomnameService) {
    setInterval(() => {
      this.nArray.length < 10 ? this.update() : (this.nArray = []);
    }, 1000);
  }

  update() {
    this.n++;
    this.nArray.push(this.n);
  }

  ngOnInit(): void {}
}
