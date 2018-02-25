module scenes {
    export class StartScene extends objects.Scene {
        //Private Instance Variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _howToPlayButton: objects.Button;
        private _optionsButton: objects.Button;

        //Public Properties

        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        //Private Methods
        private _startButtonClick(): void {
            objects.Game.currentScene = config.Scene.PLAY;
        }

        private _howToPlayButtonClick(): void {
            //To be filled
        }

        private _optionsButtonClick(): void {
            //To be filled
        }

        //Public Methods

        public Start(): void {
            this._welcomeLabel = new objects.Label("Welcome", "60px", "Consolas", "#000000", 320, 140, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 240);
            this._howToPlayButton = new objects.Button(this.assetManager, "howToPlayButton", 320, 320);
            this._optionsButton = new objects.Button(this.assetManager, "optionsButton", 320, 400);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._howToPlayButton);
            this.addChild(this._optionsButton);

            this._startButton.on("click", this._startButtonClick);
            //onclick event for howtoplay
            //onclick event for options
        }

    }
}