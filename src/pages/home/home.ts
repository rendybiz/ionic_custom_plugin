import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      if(typeof(cordova) != 'undefined'){
        var success = function(result) {
            alert(JSON.stringify(result, undefined, 2));
          }
          var failure = function(result) {
            alert(JSON.stringify(result, undefined, 2));
          }
          cordova.plugins.HelloWorld.coolMethod({
            _sMessage: "Hello Text"
          }, success, failure);
    }
  }

}
