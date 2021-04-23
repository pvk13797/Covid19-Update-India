import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title = "Corona Counts"
  counts = [];
  list: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {

    this.dataservice.sendGetRequest().subscribe(data => {
      // console.log(data);

      /* this.counts = data;
      this.counts = Array.of(this.counts);
      console.log(this.counts);
      JSON.stringify(this.counts); */

      for(let key in data)
        if(key === 'statewise')
          this.counts = data[key];
          this.list = this.counts.slice(1, this.counts.length -1 );
          // console.log(this.list);
    });
  }

}
