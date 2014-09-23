define(['require', 'class/dungeongine'], function(require){

	"use strict";

	var s = {}, d;

	// STAGE CONFIGURATION BEGINS HERE
	// ---------------------------------------------------------
	// Edit s.begin to change the initial prompt, and add
	// more closures to the s object to represent rooms.
	// The Dungeongine api is in all its simplicity as follows:
	// 
	//  d.prompt([string]message, [array]choices, [closure]callback)
	//   - the callback takes one argument, which is the choice text
	//  d.die(message)
	//   - game over for the player with the chosen message
	//  d.mem
	//   - a basic javascript object you can store game variables in
	//
	//  d.health.lose([int]amount)
	//   - remove the specified amount of health and show the health
	//  d.health.gain([int]amount)
	//   - add the specified amount of health and show the health
	//  d.health.show()
	//   - display the health bar without changing it
	//  d.health.hide()
	//   - hide the health bar without changing it
	//
	//  d.mana.lose([int]amount)
	//   - remove the specified amount of mana and show the health
	//  d.mana.gain([int]amount)
	//   - add the specified amount of mana and show the health
	//  d.mana.show()
	//   - display the mana bar without changing it
	//  d.mana.hide()
	//   - hide the mana bar without changing it
	//
	//  d.inventory.gain([string]item, [int]amount)
	//   - puts one (default) or more items into the inventory
	//  d.inventory.lose([string]item, [int]amount)
	//   - removes one (default) or more items from the inventory
	//  d.inventory.check([string]item)
	//   - returns how many, if any, of the item the player has

	s.begin = function(){
		d.prompt('Welcome to your very own Dungeongine!', ['How do I change this message?', 'What is this?'], function(choice){
			if(choice === 'What is this?'){
				d.inventory.gain('Understanding', 4);
				d.die('This is a very minimalistic game engine for telling wonderful stories and thrilling adventures. To demonstrate, I\'ve put something in your inventory!');
			} else if (choice === 'How do I change this message?') {
				d.die('You go to the Dungeongine folder and edit stages.js!');
			}
		});
	}

	// ---------------------------------------------------------
	// STAGE CONFIGURATION ENDS HERE, NO EDITING PAST THIS POINT

	return function Stages(game) {
		d = game;

		this.getStages = function(){
			return s;
		}
	}

});
