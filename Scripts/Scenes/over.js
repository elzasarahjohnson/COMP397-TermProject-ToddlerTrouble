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
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        //Public Properties
        //Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        OverScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        OverScene.prototype.restartButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        //Public Methods
        OverScene.prototype.Start = function () {
            this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 140, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 320, 240);
            this._restartButton = new objects.Button(this.assetManager, "restartButton", 320, 320);
            this.Main();
        };
        OverScene.prototype.Update = function () {
        };
        OverScene.prototype.Main = function () {
            this.addChild(this._overLabel);
            this.addChild(this._backButton);
            this.addChild(this._restartButton);
            this._backButton.on("click", this.backButtonClick);
            this._restartButton.on("click", this.restartButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map