package com.facebookconnect2;

import android.os.Bundle;
//import android.app.Activity;
//import android.view.Menu;
import org.apache.cordova.*;



public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//setContentView(R.layout.activity_main);
		super.loadUrl("file:///android_asset/www/index.html");
	}

}
