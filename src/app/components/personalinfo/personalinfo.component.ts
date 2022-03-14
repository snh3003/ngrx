import { Component, OnInit } from '@angular/core';
import { RandomnameService } from 'src/app/services/randomname.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css'],
})
export class PersonalinfoComponent implements OnInit {
  age: number;
  Name: string;
  d: Date;
  imguri: string;

  constructor(private randomService: RandomnameService) {
    setInterval(() => {
      this.newData();
    }, 5000);
  }

  ngOnInit(): void {}

  newData() {
    this.Name = this.randomService.generateName();
    this.age = 30;
    this.d = new Date();
    this.imguri = this.randomService.newImg();
  }

  onSubmit(f: any) {
    console.log(f.value);
  }
}
