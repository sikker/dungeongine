Dungeongine, a dungeon engine
==============================
To use it, simply clone this repo into your js folder, copy stages.sample.js to stages.js and start editing it to make your story! When you are ready, create a skeleton html page, include jquery, and use the bundled requirejs to start the app. If you'd like, you can use the index.html found in example/ as a template:

```html
<!DOCTYPE html>
<html>
	<head>
			<meta charset="utf-8">
			<title>The sample dungeon</title>
			<link rel="stylesheet" href="assets/css/main.css">
	</head>
	<body>
		<div id="controls">
			<ul>
				<li class="health">Health <span class="percentage" data-value="100">100%</span></li>
				<li class="mana">Mana <span class="percentage" data-value="100">100%</span></li>
				<li class="log"><a href="#">Journal</a></li>
				<li class="inventory"><a href="#">Inventory</a></li>
			</ul>
			<div id="dialog">
				<h2>Title</h2>
				<a href="#" class="close">X</a>
				<div class="content">
				</div>
			</div>
		</div>
		<div id="game">

		</div>

		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/require.js" data-main="assets/js/dungeongine/main"></script>
	</body>
</html>
```

A working demo can be seen on http://dungeon.sikkersoft.com/

Licensing
---------
The license terms for this software can be found in the file LICENSE
