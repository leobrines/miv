var boot = {
	create: function (){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;

		game.stage.backgroundColor = '#212121';
		game.world.enableBody = true;

		// enable superposition
		game.canvas.style.position = "absolute";
		game.canvas.style.zIndex = "0";

		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');
	}
};
