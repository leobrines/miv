var play = {
	create: function (){
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.width = 40;
		this.player.height = 40;
		this.speed = 10;

		this.balls = game.add.group();
		this.balls.enableBody = true;
		this.balls.physicsBodyType = Phaser.Physics.ARCADE;
		this.balls.createMultiple(40, 'attack');

		this.keys = game.input.keyboard.addKeys({
			'up': Phaser.KeyCode.W,
			'down': Phaser.KeyCode.S,
			'right': Phaser.KeyCode.D,
			'left': Phaser.KeyCode.A
		});
	},

	update: function (){
		if (this.keys['up'].isDown){
			this.player.y -= this.speed;
		}
		if (this.keys['down'].isDown){
			this.player.y += this.speed;
		}
		if (this.keys['right'].isDown){
			this.player.x += this.speed;
		}
		if (this.keys['left'].isDown){
			this.player.x -= this.speed;
		}
	}
};
