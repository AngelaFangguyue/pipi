let cssstring = `/*这个小demo是展示一只皮卡丘的制作过程*/
/*首先皮卡丘是黄色的，准备一个黄色的背景*/
.skin {
    position:relative;
    height:50vh;
    background-color: rgba(255, 230, 0);
  }
/*开始画皮卡丘的小鼻子*/
/*先画一个三角形》变为扇形》调整位置*/
  .nose {
    border: 18px solid black;
    width: 0;
    height: 0;  /*这里设置的盒子模型，边框是算在宽高里面的*/
    border-bottom: none;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -18px;
    z-index: 5;
  }
/*以鼻子为基准，画一双萌萌的大眼睛*/
/*先画圆》调整位置*/
  .eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(46, 46, 46);
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -32px;
  }
/*这是左眼睛*/
  .left_eye {
    transform: translateX(-120px);
  }
/*这是右眼睛*/
  .right_eye {
    transform: translateX(120px);
  }
/*给两个眼睛加东西，让两个眼睛更有神，会说话*/
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: -2px;
    left: 6px;
  }
  .mouth {
    /* outline: 3px solid red; */
    width: 200px;
    height: 200px;
    position: absolute;
    top: 130px;
    left: 50%;
    margin-left: -100px;
  }
  .mouth_up {
    position: relative;
    top: -20px;
  }
/*俏皮的嘴巴,分为两片*/
  .lips {
    border: 3px solid black;
    width: 100px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -50px;
    border-top-color: transparent;
    z-index: 3;
    background-color: rgba(255, 230, 0);
  }
/*通过旋转移动圆角让左右边的小嘴唇翘起来，先设置左边的小嘴巴*/
  .left_lip {
    border-radius: 0 0 0 50%;
    transform: rotate(-15deg) translateX(-50px);
  }
/*接下来是右边的小嘴巴*/
  .right_lip {
    border-radius: 0 0 50% 0;
    transform: rotate(15deg) translateX(50px);
  }
  .lips::before {
    content: "";
    display: block;
    /* border: 1px solid rgb(24, 250, 3); */
    width: 5px;
    height: 20px;
    position: absolute;
    top: -6px;
    background-color: rgba(255, 230, 0);
  }
  .left_lip::before {
    right: -4px;
  }
  .right_lip::before {
    left: -4px;
  }
  .mouth_down {
    /* border: 3px solid blue; */
    width: 160px;
    height: 170px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    overflow: hidden;
  }
/*这样左右两边就各有一个翘起来的嘴巴啦*/
/*接着开始画舌头喽*/
  .yuan1 {
    border: 3px solid black;
    width: 186px;
    height: 810px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -93px;
    border-radius: 50%;
    background-color: #9b000a;
    overflow: hidden;
  }
/*下面的舌头颜色不一样哟，再设置一个div来画*/
  .yuan2 {
    /* border: 3px solid green; */
    width: 180px;
    height: 170px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -90px;
    border-radius: 50%/50%;
    background-color: #ff485f;
  }
/*可爱的脸蛋来啦*/
/*脸蛋的画法和眼睛的画法如出一辙，这里就不多加赘述了*/
  .face {
    border: 3px solid black;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    top: 145px;
    left: 50%;
    margin-left: -45px;
    background-color: rgba(255, 0, 0);
  }
  .left_face {
    transform: translateX(-180px);
  }
  .right_face {
    transform: translateX(180px);
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    33% {
      transform: rotate(5deg);
    }
  
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0);
    }
  }
/*鼠标放在鼻子上，鼻子会动哦*/
  .nose:hover {
    transform-origin: center;
    animation: wave 250ms infinite linear;
  }`;
export default cssstring;
