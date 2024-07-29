class mainScene {
  preload() {
    this.load.image("player1", "./assets/player.png");
    this.load.image("player2", "./assets/player.png");
    this.load.image("ball", "./assets/ball.png");
  }
  create() {
    this.player1 = this.add.sprite(100, 100, "player1");
    this.player2 = this.add.sprite(100, 300, "player2");
    this.ball = this.add.sprite(200, 100, "ball");
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
