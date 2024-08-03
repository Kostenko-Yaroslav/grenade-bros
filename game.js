class mainScene {
  preload() {
    this.load.image("player1", "./assets/player.png");
    this.load.image("player2", "./assets/player.png");
    this.load.image("ball", "./assets/ball.png");
    this.load.image("wall", "./assets/wall.png");

    this.arrow = this.input.keyboard.createCursorKeys();
  }
  create() {
    this.player1 = this.physics.add.sprite(100, 500, "player1");
    this.player2 = this.physics.add.sprite(560, 500, "player2");
    this.ball = this.physics.add.sprite(335, 200, "ball");

    this.score1 = 0;
    this.score2 = 0;

    this.scoreText1 = this.add.text(16, 16, "0/7", {
      fontSize: "32px",
      fill: "#D1D1D1",
    });
    this.scoreText2 = this.add.text(590, 16, "0/7", {
      fontSize: "32px",
      fill: "#D1D1D1",
    });

    this.wall = this.physics.add.staticGroup();
    this.wall.create(335, 490, "wall");

    this.ball.setVelocity(150, 150);

    this.ball.body.collideWorldBounds = true;
    this.ball.body.bounce.set(1);

    this.player1.body.collideWorldBounds = true;
    this.player2.body.collideWorldBounds = true;

    this.physics.add.collider(this.ball, this.player1);
    this.physics.add.collider(this.ball, this.player2);
    this.physics.add.collider(this.ball, this.wall);
    this.physics.add.collider(this.player1, this.wall);
    this.physics.add.collider(this.player2, this.wall);
  }
  update() {
    if (this.arrow.right.isDown) {
      this.player1.setVelocityX(160);
    } else if (this.arrow.left.isDown) {
      this.player1.setVelocityX(-160);
    } else {
      this.player1.setVelocityX(0);
    }

    if (this.input.activePointer.isDown) {
      let pointerX = this.input.activePointer.x;

      if (pointerX > this.player2.x) {
        this.player2.setVelocityX(160);
      } else if (pointerX < this.player2.x) {
        this.player2.setVelocityX(-160);
      } else {
        this.player2.setVelocityX(0);
      }
    } else {
      this.player2.setVelocityX(0);
    }
    if (this.ball.y >= 535) {
      if (this.ball.x <= 335) {
        this.score2 += 1;
        this.scoreText2.setText(this.score2 + "/7");
        this.ball.setVelocity(150, 150);
      } else if (this.ball.x > 335) {
        this.score1 += 1;
        this.scoreText1.setText(this.score1 + "/7");
        this.ball.setVelocity(-150, 150);
      }

      this.ball.setPosition(335, 200);
    }
    if (this.score2 >= 7) {
      alert("Player 2 wins the game, congratulations!");
      location.reload();
    } else if (this.score1 >= 7) {
      alert("Player 1 wins the game, congratulations!");
      location.reload();
    }
  }
}

new Phaser.Game({
  width: 670,
  height: 580,
  backgroundColor: "#000",
  scene: mainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
  parent: "game",
});
