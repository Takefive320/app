import * as React from 'react';
import { WebView } from 'react-native-webview';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default class App extends React.Component {
	    adfuntion = async () => {
		// Display an interstitial
        await AdMobInterstitial.setAdUnitID('ca-app-pub-9995819753661441/5739493796'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
	}
	
		componetDidmount() {
			this.adfuntion
		}

        render() {
    return <WebView source={{ uri: 'https://sixtonesandme.netlify.app/' }} style={{ marginTop: 20 }} />;
  }
}