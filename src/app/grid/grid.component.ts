import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  public nButtonsClicked: number = 0;

  default: boolean = true;

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
    this.default = false;
    console.log(" row incoming in Grid" +  nRow)
  }

  colChangeHandler(nCol: number) {

    this.nCol = nCol;
    this.default = false;
    console.log(" col incoming in Grid" +  nCol)
  }
}


