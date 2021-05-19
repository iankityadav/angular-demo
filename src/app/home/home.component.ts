import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() msg = ""
  @Output() onCall = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  fnc(){
    this.onCall.emit(this.msg)
  }
}
