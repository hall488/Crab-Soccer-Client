var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1200,
  height: 900,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};
var game = new Phaser.Game(config);
function preload() {}
function create() {}
function update() {}
