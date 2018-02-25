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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        //Public Properties
        //Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        PlayScene.prototype.nextButtonClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        PlayScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        //Public Methods
        PlayScene.prototype.Start = function () {
            this._playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this._nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
            this._backButton = new objects.Button(this.assetManager, "backButton", 140, 340);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this._playLabel);
            this.addChild(this._nextButton);
            this.addChild(this._backButton);
            this._nextButton.on("click", this.nextButtonClick);
            this._backButton.on("click", this.backButtonClick);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map