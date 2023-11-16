import Phaser from "phaser";
import "/style.css";
import { io } from "socket.io-client";

class Example extends Phaser.Scene {
  preload() {
    this.load.image("crab", "./crab.svg");
    this.load.image("ball", "./ball.svg");
  }

  create() {
    this.socket = io("http://localhost:4000");
    this.socket.on("connect", () => {
      console.log(`Hello`);
    });
    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, true, true);

    this.crab = this.matter.add.image(400, 100, "crab");

    this.ball = this.matter.add.image(200, 200, "ball").setCircle(121 / 2);
    this.crab.setScale(0.5);
    this.ball.setBounce(1);
    // crab.setVelocity(100, 200);
    this.crab.setBounce(1);
    // this.crab.setImmovable(true);
    this.velocity = 3;
    //this.ball.setMaxVelocity(500, 500);
    //this.ball.setVelocityX(100);

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    // this.physics.world.setFPS(120);
  }

  update() {
    let newVel = { x: 0, y: 0 };
    if (this.keyW.isDown) {
      newVel.y -= this.velocity;
    }
    if (this.keyA.isDown) {
      newVel.x -= this.velocity;
    }
    if (this.keyS.isDown) {
      newVel.y += this.velocity;
    }
    if (this.keyD.isDown) {
      newVel.x += this.velocity;
    }
    this.crab.setVelocity(newVel.x, newVel.y);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "app",
  backgroundColor: "#6495ED",
  scene: Example,
  physics: {
    default: "matter",
    matter: {
      debug: true,
      gravity: {
        y: 0,
      },
    },
  },
};

const game = new Phaser.Game(config);
