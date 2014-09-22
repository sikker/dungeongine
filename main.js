(function($,window,undefined){

	"use strict";

	$(function(){
		require.onError = function(e){
			console.log(e);
			if(e.requireModules && e.requireModules[0] === 'stages')
				console.log('Please copy stages.sample.js to stages.js in the dungeongine folder to begin building stages for the dungeongine');
			else
				throw e;
		}
		require(['./class/dungeongine'], function(D) {
			var d = new D($);
			d.begin();
		});
	});

}(jQuery, window));
