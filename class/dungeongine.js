define(function(require){

	var Inventory, Meter, instance, bu = document.getElementsByTagName('html')[0].dataset.baseurl;
	
	Inventory = require('./inventory');
	Meter = require('./meter');
	Stages = require('stages');

	return function Dungeongine($){
		var self = this,	
		    st = {},
		    g = $('#game'), 
	        mem = {}, 
	        inv = {}, 
	        s = {},
			j = '',
	        ci = $('#controls .inventory')
	        ch = $('#controls .health'),
	        cm = $('#controls .mana'),
	        cl = $('#controls .log')
	        d = $('#dialog');

		if (!instance)
			instance = self;
		else
			throw new Error('Dungeongine cannot be instantiated twice');

		function init(){
			d.find('.close').on('click', function(e){
				e.preventDefault();
				d.hide();
			});
			ci.on('click', function(e){
				var item, i;
				e.preventDefault();
				d.find('h2').text('Inventory');
				d.find('.content').html('');
				for(i in self.inventory.inv){
					item = self.inventory.inv[i];
					if(!item)
						continue;
					d.find('.content').append('<p>'+i+(item>1?' x'+item:'')+'</p>');
				}
				d.show();
			});
			cl.on('click', function(e){
				e.preventDefault();
				d.find('h2').text('Journal');
				d.find('.content').html(j);
				d.show();
				return;
				g.find('.prompt').each(function(){
					d.find('.content').append('<p>'+$(this).find('.question').text()+'</p><p> &raquo; '+$(this).find('.chosen').text()+'</p><p>&nbsp;</p>');
				});
				d.show();
			});	
		}
	
		self.getInstance = function(){
			return instance;
		}

		self.registerStages = function(stages){
			st = stages;
		}

		self.stage = function(stage){
			return st[stage]();
		}

		self.begin = function(){
			var stages;
			stages = new Stages(self);
			self.registerStages(stages.getStages());
			init();
			return st['begin']();
		}

		self.health = new Meter(g, ch, true);

		self.mana = new Meter(g, cm);

		self.mem = {};

		self.inventory = new Inventory(ci);

		self.die = function(message){
			g.append('<div class="message die">'+message+'</div><div class="message answers"><a href="#" class="restart answer">Start over</div>');
			$('.restart').on('click',function(e){
				window.location.href = window.location.href;
			});
		}

		self.prompt = function(question, answers, callback) {
			var p, st, op;
			st = g.find('.prompt:last');
			if(st.length)
				j = j + st.find('.question').text() + '<br> &raquo; ' + st.find('.chosen').text() + '<br><br>';
			st.css('opacity','.7');
			for(op=6;op>-1;op--){
				st = st.prev();
				if(op===0){
					if(st.length && !cl.hasClass('shown'))
						cl.addClass('shown').animate({'opacity':'1'});
					st.remove();
				}
				st.css('opacity','.'+op);
			}
			g.append('<div class="prompt"></div>');
			p = $('.prompt:last').append('<div class="question">'+question+'</div><div class="answers"></div>');
			a = p.find('.answers').data('callback',callback);
			$.each(answers, function(){
				a.append('<a href="#" class="answer" data-value="'+this+'">'+this+'</a>');
			});
			a.find('.answer').on('click',function(e){
				e.preventDefault();
				$(this).addClass('chosen');
				$(this).parent().data('callback')($(this).data('value'));
				$(this).parent().find('.answer').off('click').on('click',function(e){e.preventDefault();}).not('.chosen').css({'text-decoration':'none','color':'#ccc'});
			});
		}

	}

});
