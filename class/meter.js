define(function(){
	return function Meter(game, element, vital){
		var self = this,
		    g = game,
		    e = element;
	
		self.lose = function(number){
			var p = e.find('.percentage'), v = p.data('value')*1;
			self.show();
			v = v-number;
			if(v<0)
				v = 0;
			if(v===0 && vital)
				window.dungeongine.die('You are dead. It\'s over.');
			p.data('value', v);
			p.text(v + '%');
		}

		self.gain = function(number) {
			var p = e.find('.percentage'), v = p.data('value')*1;
			self.show();
			v = v+number;
			if(v<100)
				v = 100;
			p.data('value', v);
			p.text(v + '%');
		}

		self.show = function(){
			if(!e.hasClass('shown'))
				e.addClass('shown').animate({'opacity':'1'});
		}

	}
});
