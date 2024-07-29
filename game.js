class mainScene {
  preload() {
    this.load.image("player1", "./assets/player.png");
    this.load.image("player2", "./assets/player.png");
    this.load.image("ball", "./assets/ball.png");
  }
  create() {
    this.player1 = this.add.sprite(100, 500, "player1");
    this.player2 = this.add.sprite(560, 500, "player2");
    this.ball = this.physics.add.sprite(335, 200, "ball");

    this.ball.setVelocity(-150, 150);
    this.ball.body.collideWorldBounds = true;
    this.ball.body.bounce.set(1);
  }
  update() {}
}

new Phaser.Game({
  width: 670,
  height: 580,
  backgroundColor: "#000",
  scene: mainScene,
  physics: { default: "arcade" },
  parent: "game",
});
