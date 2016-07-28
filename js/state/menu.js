var menu = {
	create: function (){
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.width = 50;
		this.player.height = 50;
		this.player.anchor.set(0.5);

		this.title = game.add.text(
			game.world.centerX,
			game.world.centerY - 100,
			'Miv', {
				font: '2.5rem Sans-serif',
				fill: '#fff'
			});
		this.title.anchor.set(0.5);

		// change visibility of form
		document.formName.style.visibility = 'visible';
	},

	update: function (){
		if (!this.player.name)
			return;

		// game.state.start('play');
	},

	updateName: function (){
		this.player.name = document.formName.elements[0].value;

		document.formName.style.visibility = 'hidden';
	}
};
