import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input()
  public nButtonsClicked: number = 0;
  @Output()
  public breedte:number = 5;
  @Output()
  public hoogte:number = 5;
  ngOnInit(): void {
  }

  setButtonClicked() {
    console.log(this.breedte + " " + this.hoogte)
  }
}
