/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function () {

  //Game variables
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;
  let helloLabel: objects.Label;
  let startButton: objects.Button;
  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];
  let currentScene: objects.Scene;
  let currentState: number;

  assetManifest = [
    { id: "toddlerTrouble", src: "./Assets/images/toddlerTrouble.png" },
    { id: "startButton", src: "./Assets/images/startButton.png" },
    { id: "howToPlayButton", src: "./Assets/images/howToPlayButton.png" },
    { id: "optionsButton", src: "./Assets/images/optionsButton.png" },
    { id: "nextButton", src: "./Assets/images/nextButton.png" },
    { id: "backButton", src: "./Assets/images/backButton.png" },
    { id: "restartButton", src: "./Assets/images/restartButton.png" }
  ];

  //preloads assets
  function Init(): void {
    console.log("Initialization started");
    assetManager = new createjs.LoadQueue(); //creates the asset manager object
    assetManager.installPlugin(createjs.Sound); //assest manager can also load sound
    assetManager.loadManifest(assetManifest);
    assetManager.on("complete", Start, this);

    Start();
  }

  function Start(): void {
    console.log("Starting Application")

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); //turn this on for buttons
    createjs.Ticker.framerate = 60; //60 FPS
    createjs.Ticker.on("tick", Update);

    objects.Game.currentScene = config.Scene.START;
    currentState = config.Scene.START;
    Main();
  }

  function Update(): void {
    if (currentState != objects.Game.currentScene) {
      Main();
    }

    if (currentScene != null) {
      currentScene.Update();
    }

    stage.update(); //redraws stage
  }

  function Main(): void {
    stage.removeAllChildren();


    switch (objects.Game.currentScene) {
      case config.Scene.START:
        currentScene = new scenes.StartScene(assetManager);

        break;
      case config.Scene.PLAY:
        currentScene = new scenes.PlayScene(assetManager);

        break;
      case config.Scene.OVER:
        currentScene = new scenes.OverScene(assetManager);

        break;
    }
    currentState = objects.Game.currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();