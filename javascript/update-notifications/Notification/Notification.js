/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Notification extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Notification", "./Notification/costumes/Notification.svg", {
        x: 242.50000000000034,
        y: -23.17358567763688
      })
    ];

    this.sounds = [new Sound("Meow", "./Notification/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.shown = "false";
    this.goto(0, -141);
    this.visible = true;
    this.stage.vars.shown = "true";
    yield* this.glide(3, 0, 0);
    while (!!(this.stage.vars.shown == "true")) {
      yield;
    }
    this.visible = false;
  }
}
