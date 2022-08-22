import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-user';
  showComponent=true;
  userData='kameswari';
  itemData='item1';
  onChangeData(){
    this.userData="user data changed";
  }
  onDestroyComponent(){
    this.showComponent=false;
  }
}
