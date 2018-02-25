var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        //Public Properties
        //Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        StartScene.prototype._howToPlayButtonClick = function () {
            //To be filled
        };
        StartScene.prototype._optionsButtonClick = function () {
            //To be filled
        };
        //Public Methods
        StartScene.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Welcome", "60px", "Consolas", "#000000", 320, 140, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 240);
            this._howToPlayButton = new objects.Button(this.assetManager, "howToPlayButton", 320, 320);
            this._optionsButton = new objects.Button(this.assetManager, "optionsButton", 320, 400);
            this.Main();
        };
        StartScene.prototype.Update = function () {
        };
        StartScene.prototype.Main = function () {
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._howToPlayButton);
            this.addChild(this._optionsButton);
            this._startButton.on("click", this._startButtonClick);
            //onclick event for howtoplay
            //onclick event for options
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map