import { Component } from '@angular/core';
import {NgRedux, NgReduxModule, select} from '@angular-redux/store';
import {Store} from './store';
import {StoreActions} from './action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reduxSimpleII';
  @select() counter;

  constructor(private ngRedux: NgRedux<Store>) {  }

  increment(){
    this.ngRedux.dispatch({type: StoreActions.INC});
  }
}
