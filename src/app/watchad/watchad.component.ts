import { Component, OnInit, OnDestroy } from '@angular/core';

import * as $ from 'jquery';
import * as app from './app.js';

@Component({
  selector: 'app-watchad',
  templateUrl: './watchad.component.html',
  styleUrls: ['./watchad.component.css']
})

export class WatchadComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    $('#btn_showvideo').prop('disabled', true);
    // on mobile device, we must wait the 'deviceready' event fired by cordova
    if (/(ipad|iphone|ipod|android|windows phone)/i
      .test(navigator.userAgent)) {
      document.addEventListener('deviceready', app.onDeviceReady, false);
    } else {
      console.log('Browsers are not supported. :(');
    }
  }
  ngOnDestroy() {
    $(document).off('onAdDismiss onAdPresent onAdLoaded onAdFailLoad');
    $('#btn_showvideo').off('click');
  }
}
