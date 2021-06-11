import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public nButtonsClicked: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  nRow: number = 5;
  @Input()
  nCol: number = 5;

  row(n: number): Array<number> {
    return Array(n)
  }

  column(n: number): Array<number> {
    return Array(n)
  }

  buttonChanged(event: number): void {
    this.nButtonsClicked = this.nButtonsClicked + event;
  }
  rowChangedHandler(nRow: number) {
    this.nRow = nRow;
    console.log(" row incoming in Grid" +  nRow)
  }

  colChangeHandler(nCol: number) {
    this.nCol = nCol;
    console.log(" col incoming in Grid" +  nCol)
  }
}


