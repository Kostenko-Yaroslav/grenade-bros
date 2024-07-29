class mainScene {
  preload() {
    this.load.image("player1", "./assets/player.png");
    this.load.image("player2", "./assets/player.png");
    this.load.image("ball", "./assets/ball.png");

    this.arrow = this.input.keyboard.createCursorKeys();
  }
  create() {
    this.player1 = this.physics.add.sprite(100, 500, "player1");
    this.player2 = this.physics.add.sprite(560, 500, "player2");
    this.ball = this.physics.add.sprite(335, 200, "ball");

    this.ball.setVelocity(-150, 150);
    //this.ball.body.gravity.y = 100;

    this.ball.body.collideWorldBounds = true;
    this.ball.body.bounce.set(1);

    this.player1.body.immovable = true;
    this.player2.body.immovable = true;
  }
  update() {
    if (this.arrow.right.isDown) {
      this.player1.x += 3;
    } else if (this.arrow.left.isDown) {
      this.player1.x -= 3;
    }

    if (this.arrow.down.isDown) {
      this.player1.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player1.y -= 3;
    }
    this.player2.x =
      this.input.activePointer.x || this.sys.game.config.width * 0.5;
    this.physics.add.collider(this.ball, this.player1);
    this.physics.add.collider(this.ball, this.player2);
  }
}

new Phaser.Game({
  width: 670,
  height: 580,
  backgroundColor: "#000",
  scene: mainScene,
  physics: { default: "arcade" },
  parent: "game",
});
