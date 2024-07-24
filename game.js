class mainScene {
  preload() {}
  create() {}
  update() {}
}

new Phaser.Game({
  width: 700,
  height: 500,
  backgroundColor: "#000",
  scene: mainScene,
  physics: { default: "arcade" },
  parent: "game",
});
