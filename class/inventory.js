define(function(){
	return function Inventory(element) {
		var self = this,
		    inv = {},
			e = element;

		self.inv = inv;

		self.check = function(item){
			return inv[item];
		}

		self.lose = function(item, quantity){
			if(!quantity)
				quantity=1;
			if(!inv[item])
				return;
			inv[item] = inv[item]-quantity;
			if(inv[item]<0)
				inv[item] = 0;
			if(self.empty())
				self.hide();
		}

		self.gain = function(item, quantity){
			if(!quantity)
				quantity=1;
			if(!inv[item])
				inv[item]=0;
			inv[item] = inv[item]+quantity;
			self.show();
		}

		self.empty = function(){
			var i;
			for(i in inv){
				if(inv[i])
					return false;
			}
			return true;
		}

		self.show = function(){
			if(!e.hasClass('shown'))
				e.addClass('shown').animate({'opacity':'1'});
		}

		self.hide = function(){
			if(e.hasClass('shown'))
				e.removeClass('shown').animate({'opacity':'0'});
		}

	}

});
