import * as $ from 'jquery';

let appData = JSON.parse(window.localStorage.getItem("data"));

if (appData === null) {
  appData = {
    adsWatched: {},
    charities: [
      'Southern Environmental Law Center',
      "Children's Scholarship Fund Philadelphia",
      'Wildlife Conversation Network'
    ]
  };
}

let admobid = {};

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
    rewardvideo: ''
  };
}

export function onDeviceReady() {
  if (!AdMob) {
    alert('admob plugin not ready');
    return;
  }


  initAd();
}

function prepareVideo() {
  AdMob.prepareRewardVideoAd({
    adId:admobid.rewardvideo,
    autoShow: false,
  }, () => {

  }, (e) => {
    console.log("Failed to prepare reward video ad");
    console.log(e);
  });
}

export function initAd() {
  AdMob.getAdSettings(function(info){
    info.adTrackingEnabled = info.adTrackingEnabled || '?';

    console.log('adId: ' + info.adId + '\n' +
      'adTrackingEnabled: ' + info.adTrackingEnabled);
  }, function() {
    console.log('failed to get user ad settings');
  });

  AdMob.setOptions({
    isTesting: true,
    bgColor: 'black',
  });

  // new events, with variable to differentiate: adNetwork, adType, adEvent
  $(document).on('onAdFailLoad', function(e) {
    // when jquery is used, it will hijack the event,
    // so we have to get data from original event
    if (typeof e.originalEvent !== 'undefined') {
      e = e.originalEvent;
    }

    const data = e.detail || e.data || e;
    data.adNetwork = data.adNetwork || '';
    data.adType = data.adType || '';
    data.adEvent = data.adEvent || '';

    alert('error: ' + data.error +
      ', reason: ' + data.reason +
      ', adNetwork: ' + data.adNetwork +
      ', adType: ' + data.adType +
      ', adEvent: ' + data.adEvent);
  });

  $(document).on('onAdLoaded', function(e) {
    if (typeof e.originalEvent !== 'undefined') {
      e = e.originalEvent;
    }
    const data = e.data || e;

    if(data.adType === 'rewardvideo') {
      $('#btn_showvideo').prop({
        'disabled': false,
        'textContent': "Watch Ad!"
      });
    }
  });

  $(document).on('onAdPresent', function(e) {
    if (typeof e.originalEvent !== 'undefined') {
      e = e.originalEvent;
    }

    e.rewardAmount = e.rewardAmount || 0;

    if (e.rewardAmount > 0) {
      console.log("Congratulations, you were rewarded!");

      $.post('https://h1k8qwwvua.execute-api.us-east-1.amazonaws.com/default/AdsForCharity',
        JSON.stringify({'charity': 0}))
        .fail(function(e){
          console.log("Failed to send data to server!");
          console.log(e);
        });
    }
  });

  $(document).on('onAdDismiss', function(e) {
    if (typeof e.originalEvent !== 'undefined') {
      e = e.originalEvent;
    }
    const data = e.data || e;

    if (data.adType === 'rewardvideo') {
      $('#btn_showvideo').prop({
        'disabled': true,
        'textContent': "Preparing Ad"
      });

      prepareVideo();
    }
  });

  $('#btn_showvideo').on("click",function() {
    AdMob.showRewardVideoAd((e) => {
      // This is just the success callback for Showing the ad,
      // it has nothing to do with whether or not they actually
      // watched the damn thing!
    }, (e) => {
      console.log("showRewardVideoAd Failure callback");
      console.log(e);
    });
  });

  prepareVideo();
}
