var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);

game.state.add('boot', boot);

game.state.start('boot');
