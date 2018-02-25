module scenes {
    export class OverScene extends objects.Scene {
        //Private Instance Variables
        private _overLabel: objects.Label;
        private _backButton: objects.Button;
        private _restartButton: objects.Button;

        //Public Properties

        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        //Private Methods


        private backButtonClick(): void {
            objects.Game.currentScene = config.Scene.PLAY;
        }

        private restartButtonClick(): void {
            objects.Game.currentScene = config.Scene.START;
        }

        //Public Methods

        public Start(): void {
            this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 140, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 320, 240);
            this._restartButton = new objects.Button(this.assetManager, "restartButton", 320, 320);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this._overLabel);
            this.addChild(this._backButton);
            this.addChild(this._restartButton);

            this._backButton.on("click", this.backButtonClick);
            this._restartButton.on("click", this.restartButtonClick);
        }

    }
}