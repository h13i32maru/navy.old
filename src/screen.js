Navy.Screen = Navy.Class.instance({
  CLASSNAME: 'Navy.Screen',

  _screenElm: null,

  initialize: function(){
    var style = '* {margin:0; padding:0;} html {width:100%; height:100%} body {background-color:#000;}';
    var styleElm = document.createElement('style');
    styleElm.textContent = style;
    document.head.appendChild(styleElm);

    var width = Navy.Config.app.size.width;
    var height = Navy.Config.app.size.height;

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var scaleWidth = screenWidth / width;
    var scaleHeight = screenHeight / height;
    var scale = Math.min(scaleWidth, scaleHeight);
    var left = (screenWidth - scale * width) / 2;
    var top = (screenHeight - scale * height) / 2;
    document.body.style.position = 'absolute';
    document.body.style.zoom = scale;
    document.body.style.width = width + 'px';
    document.body.style.height = height + 'px';
    document.body.style.left = left + 'px';
    document.body.style.top = top + 'px';

    this._screenElm = document.body;

    Navy.Root.initialize(this._screenElm);
  }
});
