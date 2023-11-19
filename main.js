import Phaser from "phaser";
import "/style.css";
import { io } from "socket.io-client";

// let score = { team1: 0, team2: 0 };

// class Example extends Phaser.Scene {
//   preload() {
//     this.load.image("crab", "./crab.svg");
//     this.load.image("ball", "./ball.svg");
//     this.load.svg("bg", "./field.svg", { width: 1210, height: 910 });
//     this.load.svg("goal", "./goal.svg", { width: 100, height: 330 });
//   }

//   create() {
//     this.socket = io("http://localhost:4000");
//     this.socket.on("connect", () => {
//       console.log(`Hello`);
//     });

//     this.add.text(516, -100, `${score.team1} : ${score.team2}`, {
//       fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
//       fontSize: 100,
//     });

//     this.cameras.main.setBounds(-1210 / 2, -910 / 2, 1210 * 2, 910 * 2);
//     this.matter.world.setBounds(0, 0, 1210, 910, 32, false, false, true, true);
//     this.bg = this.add.image(1210 / 2, 910 / 2, "bg");
//     this.bg.setScale(910 / this.bg.height);

//     this.crab = this.matter.add.image(400, 100, "crab");

//     this.ball = this.matter.add
//       .image(1210 / 2, 910 / 2, "ball")
//       .setCircle(121 / 2);
//     this.ball.setScale(0.5);
//     let ellipseVerticesArray = [];

//     let ellipseFlatness = 0.7;
//     let ellipseVertices = 50;
//     let ellipseSize = 200;

//     for (let i = 0; i < ellipseVertices; i++) {
//       let x = ellipseSize * Math.cos(i);
//       let y = ellipseFlatness * ellipseSize * Math.sin(i);
//       ellipseVerticesArray.push({ x: x, y: y });
//     }

//     let ellipse = this.matter.bodies.fromVertices(
//       200,
//       200,
//       ellipseVerticesArray,
//       5
//     );
//     this.matter.body.setVertices(this.crab.body, ellipseVerticesArray);
//     this.crab.setScale(0.25);
//     this.crab.setFixedRotation(0);
//     this.ball.body.restitution = 1;
//     this.ball.setBounce(0.8);
//     // crab.setVelocity(100, 200);
//     // this.crab.setBounce(1);
//     // this.crab.setImmovable(true);
//     this.velocity = 8;
//     //this.ball.setMaxVelocity(500, 500);
//     //this.ball.setVelocityX(100);
//     this.goal1_texture = this.add.image(-50, 455, "goal");
//     this.goal1_texture.setScale(910 / this.bg.height);
//     this.goal2_texture = this.add.image(1260, 460, "goal");

//     this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
//     this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
//     this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
//     this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

//     this.goal1 = this.matter.add.rectangle(-5, 455, 10, 310, {
//       isSensor: true,
//     });

//     this.goal2 = this.matter.add.rectangle(1215, 455, 10, 310, {
//       isSensor: true,
//     });

//     //left goal
//     this.matter.add.rectangle(-15, 150, 30, 300, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(-15, 760, 30, 300, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(-80, 285, 100, 30, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(-80, 625, 100, 30, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(-115, 455, 30, 310, {
//       isStatic: true,
//     });

//     //right goal
//     this.matter.add.rectangle(1225, 150, 30, 300, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(1225, 760, 30, 300, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(1290, 285, 100, 30, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(1290, 625, 100, 30, {
//       isStatic: true,
//     });

//     this.matter.add.rectangle(1325, 455, 30, 310, {
//       isStatic: true,
//     });
//     // this.physics.world.setFPS(120);
//     this.scoreState = false;
//     this.cameras.main.startFollow(this.crab, true, 0.05, 0.05);
//   }

//   update() {
//     let newVel = { x: 0, y: 0 };
//     if (this.keyW.isDown) {
//       newVel.y -= this.velocity;
//     }
//     if (this.keyA.isDown) {
//       newVel.x -= this.velocity;
//     }
//     if (this.keyS.isDown) {
//       newVel.y += this.velocity;
//     }
//     if (this.keyD.isDown) {
//       newVel.x += this.velocity;
//     }
//     this.crab.setVelocity(newVel.x, newVel.y);
//     if (this.matter.collision.collides(this.crab.body, this.ball.body)) {
//       this.matter.body.setSpeed(this.ball.body, this.ball.body.speed * 1.2);
//     }

//     if (
//       this.matter.collision.collides(this.goal1, this.ball.body) &&
//       !this.scoreState
//     ) {
//       this.scoreState = true;
//       score.team1 += 1;
//       handleReset(this, 1);
//     }

//     if (
//       this.matter.collision.collides(this.goal2, this.ball.body) &&
//       !this.scoreState
//     ) {
//       this.scoreState = true;
//       score.team2 += 1;
//       handleReset(this, 2);
//     }
//   }
// }

// const handleReset = (scene, team) => {
//   setTimeout(() => {
//     scene.scene.restart();
//   }, 1000);
// };

// const config = {
//   type: Phaser.AUTO,
//   width: 1210,
//   height: 910,
//   parent: "app",
//   backgroundColor: "#6495ED",
//   scene: Example,
//   physics: {
//     default: "matter",
//     matter: {
//       debug: true,
//       gravity: {
//         y: 0,
//       },
//     },
//   },
// };

// const game = new Phaser.Game(config);

var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1210,
  height: 910,
  parent: "app",
  backgroundColor: "#6495ED",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

function preload() {
  this.load.svg("crab", "./crab.svg", { width: 350 / 4, height: 198 / 2 });
  this.load.svg("bad_crab", "./crab_blue.svg", {
    width: 350 / 4,
    height: 198 / 2,
  });
  this.load.svg("bg", "./field.svg", { width: 1210, height: 910 });
  this.load.svg("goal", "./goal.svg", { width: 100, height: 330 });
  this.load.image("ball", "./ball.svg");
}

function create() {
  var self = this;
  this.socket = io("http://localhost:4000");

  this.scoreText = this.add.text(310, -130, `Red 0 : 0 Blue `, {
    fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
    fontSize: 100,
  });

  this.players = this.add.group();

  this.background = this.add.layer();
  this.ground = this.add.layer();
  this.aboveground = this.add.layer();

  this.bg = this.add.image(1210 / 2, 910 / 2, "bg");

  this.background.add(this.bg);

  this.ball = this.add.image(1210 / 2, 910 / 2, "ball");
  this.ball.setScale(0.5);

  this.ground.add(this.ball);

  this.socket.on("currentPlayers", function (players) {
    Object.keys(players).forEach(function (id) {
      if (players[id].team == "red") {
        displayPlayers(self, players[id], "crab");
      } else {
        displayPlayers(self, players[id], "bad_crab");
      }
    });
  });

  this.socket.on("newPlayer", function (playerInfo) {
    if (playerInfo.team == "red") {
      displayPlayers(self, playerInfo, "crab");
    } else {
      displayPlayers(self, playerInfo, "bad_crab");
    }
  });

  this.socket.on("removePlayer", function (playerId) {
    self.players.getChildren().forEach(function (player) {
      if (playerId === player.playerId) {
        player.destroy();
      }
    });
  });

  this.socket.on("gameUpdates", function ({ players, ball, score }) {
    Object.keys(players).forEach(function (id) {
      self.players.getChildren().forEach(function (player) {
        if (players[id].playerId === player.playerId) {
          player.setPosition(players[id].x, players[id].y);
        }
      });
    });
    self.ball.setPosition(ball.x, ball.y);
    self.ball.setRotation(ball.rotation);
    self.scoreText.text = `Red ${score.red} : ${score.blue} Blue`;
  });

  this.goal1_texture = this.add.image(-50, 455, "goal");
  this.goal2_texture = this.add.image(1260, 455, "goal");

  this.aboveground.add([this.goal1_texture, this.goal2_texture]);

  this.cursors = this.input.keyboard.addKeys("W,A,S,D");
  this.wKeyPressed = false;
  this.aKeyPressed = false;
  this.sKeyPressed = false;
  this.dKeyPressed = false;
}

function update() {
  const up = this.wKeyPressed;
  const left = this.aKeyPressed;
  const down = this.sKeyPressed;
  const right = this.dKeyPressed;

  this.wKeyPressed = this.cursors.W.isDown;
  this.aKeyPressed = this.cursors.A.isDown;
  this.sKeyPressed = this.cursors.S.isDown;
  this.dKeyPressed = this.cursors.D.isDown;

  if (
    up !== this.wKeyPressed ||
    left !== this.aKeyPressed ||
    down !== this.sKeyPressed ||
    right !== this.dKeyPressed
  ) {
    this.socket.emit("playerInput", {
      up: this.wKeyPressed,
      left: this.aKeyPressed,
      down: this.sKeyPressed,
      right: this.dKeyPressed,
    });
  }
}

function displayPlayers(self, playerInfo, sprite) {
  const player = self.add.sprite(playerInfo.x, playerInfo.y, sprite);

  player.playerId = playerInfo.playerId;
  self.players.add(player);
  self.ground.add(player);

  if (player.playerId === self.socket.id) {
    self.cameras.main.setBounds(-1210 / 2, -910 / 2, 1210 * 2, 910 * 2);
    self.cameras.main.startFollow(player, true, 0.05, 0.05);
  }
}

const game = new Phaser.Game(config);
