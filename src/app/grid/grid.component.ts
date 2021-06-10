import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    }

    nRow:number = 10;
    nCol:number = 5
    row(n: number):Array<number> {
    return Array(n)
    }
    column(n:number):Array<number> {
    return Array(n)
    }
}


