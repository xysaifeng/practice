// https://www.cnblogs.com/EnSnail/p/9762386.html

window.onload = function () {
    new lineCanvas({
      el: document.querySelector('#canvas'),
      clearEl: document.querySelector('#clearCanvas'),
      saveEl: document.querySelector('#saveCanvas'),
      // lineWidth: 1, // 线条粗细
      // color: 'black', // 线条颜色
      // background: '#fff'
    });
  }
  
  function lineCanvas(obj) {
    this.lineWidth = 5;
    this.color = '#000';
    this.background = '#fff';
    for (var i in obj) {
      this[i] = obj[i];
    };
  
    this.canvas = document.createElement('canvas');
    if (!(this.canvas.getContext && this.canvas.getContext('2d'))) {
      this.section = document.createElement('section');
      this.section.className = 'errorCanvas';
      this.section.innerHTML = '对不起，当前浏览器暂不支持此功能！'
      this.el.prepend(this.section);
      return
    }
    this.canvas.width = this.el.clientWidth;
    this.canvas.height = this.el.clientHeight;
    this.el.prepend(this.canvas);
  
    this.cxt = this.canvas.getContext('2d');
    this.cxt.fillStyle = this.background;
    this.cxt.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.cxt.strokeStyle = this.color;
    this.cxt.lineWidth = this.lineWidth;
    this.cxt.lineCap = 'round'; // 线条末端添加圆形线帽，减少线条的生硬感
    this.cxt.lineJoin = 'round'; // 线条交汇时为原型边角
    // 利用阴影，消除锯齿
    this.cxt.shadowBlur = 1;
    this.cxt.shadowColor = '#000';
  
    // 开始绘制
    this.canvas.addEventListener('touchstart', function (e) {
      this.cxt.beginPath();
      this.cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    }.bind(this), false);
  
    // 绘制中
    this.canvas.addEventListener('touchmove', function (e) {
      this.cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
      this.cxt.stroke();
    }.bind(this), false);
  
    // 结束绘制
    this.canvas.addEventListener('touchend', function (e) {
      this.cxt.closePath();
    }.bind(this), false);
  
    // 清除画布
    this.clearEl.addEventListener('click', function () {
      this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }.bind(this), false);
  
    // 保存图片
    this.saveEl.addEventListener('click', function () {
      var imgBase64 = this.canvas.toDataURL();
      var imgPng = this.canvas.toDataURL('image/png');
      var imgJpg = this.canvas.toDataURL('image/jpeg', 0.8);
      console.log(imgPng, imgJpg);
    }.bind(this), false);
  }