import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  public buttonActivated: boolean= false;
  public buttonsClicked: number = 0;


  @Output() onButtonClicked: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
    console.log("Init state: nClicked: " + this.buttonsClicked)
  }


  changeState() {
    console.log("button checked")
    this.buttonActivated = !this.buttonActivated
    console.log(this.buttonActivated)

    if(this.buttonActivated) {
      this.onButtonClicked.emit(1);
    }
    else {
      this.onButtonClicked.emit(-1);
      }


  }
}
