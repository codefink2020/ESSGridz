import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input()
  public nButtonsClicked: number = 0;


  breedte: number = 0;
  hoogte: number = 0;
  @Output() emitHoogte: EventEmitter<any> = new EventEmitter<any>()
  @Output()  emitBreedte: EventEmitter<number> = new EventEmitter<number>()
  // @Output()
  // nRow: number = 10
  // @Output()
  // nCol: number = 5

  ngOnInit(): void {
  }

  @Output()
  setButtonClicked(nRow: string, nCol: string) {
    this.breedte = parseInt(nCol);
    this.hoogte = parseInt(nRow);
    this.emitHoogte.emit(this.hoogte);
    this.emitBreedte.emit(this.breedte);
    console.log(" Data from header: "+ nRow + " " + nCol)
  }

}
