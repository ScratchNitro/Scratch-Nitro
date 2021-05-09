/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CancelButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Button", "./CancelButton/costumes/Button.svg", {
        x: -215.05882323542914,
        y: -89.40587835446587
      })
    ];

    this.sounds = [new Sound("Meow", "./CancelButton/sounds/Meow.wav")];

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
    yield* this.glide(2, 0, 0);
    while (!(this.touching("mouse") && this.mouse.down)) {
      yield;
    }
    this.stage.vars.shown = "false";
    this.visible = false;
  }
}
