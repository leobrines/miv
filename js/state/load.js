var load = {
	preload: function (){
		this.loading = game.add.text(
			game.world.centerX,
			game.world.centerY,
			'loading...',{
				font: '2rem Sans-serif',
				fill: '#fff'
			});
		this.loading.anchor.set(0.5, 0.5);

		game.load.image('player', 'img/square.svg');
		game.load.image('attack', 'img/attack.svg');
	},

	create: function (){
		this.loading.destroy();
		game.state.start('menu');
	}
};
