import {Component, OnInit, OnDestroy} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-watchad',
  templateUrl: './watchad.component.html',
  styleUrls: ['./watchad.component.css']
})

export class WatchadComponent implements OnInit, OnDestroy {
  public adsWatched: number;

  constructor () {
    this.adsWatched = 0;
  }

  ngOnInit(): void {
    const that = this;
    let admobid = {};

    let appData = JSON.parse(window.localStorage.getItem('data'));

    if (appData === null) {
      appData = {
        numWatched: 0,
        charityChoice: 0
      };
    }

    const onDeviceReady = () => {
      // @ts-ignore
      if (!AdMob) {
        alert('admob plugin not ready');
        return;
      }

      initAd();
    };

    function prepareVideo() {
      // @ts-ignore
      AdMob.prepareRewardVideoAd({
        adId: admobid['rewardvideo'],
        autoShow: false,
      }, () => {

      }, (e) => {
        console.log('Failed to prepare reward video ad');
        console.log(e);
      });
    }

    function initAd() {
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-3940256099942544/6300978111',
          interstitial: 'ca-app-pub-3940256099942544/1033173712',
          rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
          banner: 'ca-app-pub-3940256099942544/4480807092',
          interstitial: 'ca-app-pub-3940256099942544/4411468910',
          rewardvideo: 'ca-app-pub-3940256099942544/1712485313'
        };
      } else {
        admobid = { // for Windows Phone
          banner: 'ca-app-pub-6869992474017983/8878394753',
          interstitial: 'ca-app-pub-6869992474017983/1355127956',
          rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
        };
      }
      // @ts-ignore
      AdMob.getAdSettings(function(info) {
        info.adTrackingEnabled = info.adTrackingEnabled || '?';

        console.log('adId: ' + info.adId + '\n' +
          'adTrackingEnabled: ' + info.adTrackingEnabled);
      }, function() {
        console.log('failed to get user ad settings');
      });

      // @ts-ignore
      AdMob.setOptions({
        isTesting: true,
        bgColor: 'black',
      });

      // new events, with variable to differentiate: adNetwork, adType, adEvent
      $(document).on('onAdFailLoad', function(e) {
        // when jquery is used, it will hijack the event,
        // so we have to get data from original event
        if (typeof e.originalEvent !== 'undefined') {
          // @ts-ignore
          e = e.originalEvent;
        }

        const data = e.detail || e.data || e;
        // @ts-ignore
        data.adNetwork = data.adNetwork || '';
        // @ts-ignore
        data.adType = data.adType || '';
        // @ts-ignore
        data.adEvent = data.adEvent || '';

        // @ts-ignore
        alert('error: ' + data.error +
          ', reason: ' + data['reason'] +
          ', adNetwork: ' + data['adNetwork'] +
          ', adType: ' + data['adType'] +
          ', adEvent: ' + data['adEvent']);
      });

      $(document).on('onAdLoaded', function(e) {
        if (typeof e.originalEvent !== 'undefined') {
          // @ts-ignore
          e = e.originalEvent;
        }
        const data = e.data || e;

        // @ts-ignore
        if (data.adType === 'rewardvideo') {
          $('#btn_showvideo').prop({
            'disabled': false,
            'textContent': 'Watch Ad!'
          });
        }
      });

      $(document).on('onAdPresent', function(e) {
        if (typeof e.originalEvent !== 'undefined') {
          // @ts-ignore
          e = e.originalEvent;
        }

        // @ts-ignore
        e.rewardAmount = e.rewardAmount || 0;

        // @ts-ignore
        if (e.rewardAmount > 0) {
          console.log('Congratulations, you were rewarded!');


          $.post('https://h1k8qwwvua.execute-api.us-east-1.amazonaws.com/default/AdsForCharity',
            JSON.stringify({'charity': 0}))
            .done(function() {
              that.adsWatched += 1;
            })
            .fail(function(err) {
              console.log('Failed to send data to server!');
              console.log(err);
            });
        }
      });

      $(document).on('onAdDismiss', function(e) {
        if (typeof e.originalEvent !== 'undefined') {
          // @ts-ignore
          e = e.originalEvent;
        }
        const data = e.data || e;

        // @ts-ignore
        if (data.adType === 'rewardvideo') {
          $('#btn_showvideo').prop({
            'disabled': true,
            'textContent': 'Preparing Ad'
          });

          prepareVideo();
        }
      });

      $('#btn_showvideo').on('click', function() {
        // @ts-ignore
        AdMob.showRewardVideoAd(() => {
          // This is just the success callback for Showing the ad,
          // it has nothing to do with whether or not they actually
          // watched the damn thing!
        }, (e) => {
          console.log('showRewardVideoAd Failure callback');
          console.log(e);
        });
      });

      prepareVideo();
    }
    $('#btn_showvideo').prop('disabled', true);
    // on mobile device, we must wait the 'deviceready' event fired by cordova
    if (/(ipad|iphone|ipod|android|windows phone)/i
      .test(navigator.userAgent)) {
      document.addEventListener('deviceready', onDeviceReady, false);
    } else {
      console.log('Browsers are not supported. :(');
    }
  }

  ngOnDestroy() {
    $(document).off('onAdDismiss onAdPresent onAdLoaded onAdFailLoad');
    $('#btn_showvideo').off('click');
  }
}
