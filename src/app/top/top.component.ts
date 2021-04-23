import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  display = [];

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.sendGetRequest().subscribe(data => {
      console.log(data);

      /* this.counts = data;
      this.counts = Array.of(this.counts);
      console.log(this.counts);
      JSON.stringify(this.counts); */

      for(let key in data)
        if(key === 'statewise')
          this.display.push(data[key]);
          console.log(this.display);
    });
  }

}
