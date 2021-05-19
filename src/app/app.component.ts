import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'demo';
  data:string = "abc"
  constructor(){
    console.log(`new data - ${this.data}`)
  }
  ngOnChanges(){
    console.log(`ngOnChanges - data is ${this.data}`)
  }
  ngOnInit(){
    console.log(`ngOnInit - data is ${this.data}`)
  }
  public fnc():void{
    this.data='jhgd'
  }
  display(msg:string):void{
    this.data = msg
  }
}
