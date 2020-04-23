import string from "./showCss.js";
//let i = 1;
//let styin = document.querySelector(".styin");
//let text = document.querySelector("#text");

//let time = 1;
//let id;
//let flg = true;
// function run() {
//   text.innerText = string.substr(0, i);
//   text.scrollTop = text.scrollHeight;
//   styin.innerHTML = string.substr(0, i);
//   i++;
//   if (i > string.length) {
//     window.clearInterval(id);
//     return;
//   }
// }
// function play() {
//   return setInterval(run, time);
// }
// function pause() {
//   clearInterval(id);
// }
// function slow() {
//   pause();
//   time = 500;
//   id = play();
// }
// function normal() {
//   pause();
//   time = 200;
//   id = play();
// }
// function fast() {
//   pause();
//   time = 0; //这里即使是0，也依然是异步函数
//   id = play();
// }

let player = {
  i: 1,
  time: 1,
  id: undefined,
  flg: true,
  ui: {
    styin: document.querySelector(".styin"),
    text: document.querySelector("#text")
  },
  init: () => {
    player.bindEvents();
    player.play();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: () => {
    const hashData = {
      "#btnPause": player.pause,
      "#btnPlay": player.play,
      "#btnSlow": player.slow,
      "#btnNormal": player.normal,
      "#btnFast": player.fast
    };
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //检查每一个是不是自身的属性
        let value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
    // btnPause.onclick = player.pause;
    // btnPlay.onclick = () => {
    //   player.pause();
    //   player.play();
    // };
    // btnSlow.onclick = player.slow;
    // btnNormal.onclick = player.normal;
    // btnFast.onclick = player.fast;
  },
  run: () => {
    player.ui.text.innerText = string.substr(0, player.i);
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
    player.ui.styin.innerHTML = string.substr(0, player.i);
    player.i++;
    if (player.i > string.length) {
      window.clearInterval(player.id);
      return;
    }
  },
  play: () => {
    //return setInterval(player.run, time);
    if (player.flg) {
      player.id = setInterval(player.run, player.time);
      player.flg = false;
    }
  },
  pause: () => {
    clearInterval(player.id);
    player.flg = true;
  },
  slow: () => {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 80;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0; //这里即使是0，也依然是异步函数
    player.play();
  }
};
/////////////////////////////////////
// player.play();

// btnPause.onclick = player.pause;
// btnPlay.onclick = () => {
//   player.pause();
//   player.play();
// };
// btnSlow.onclick = player.slow;
// btnNormal.onclick = player.normal;
// btnFast.onclick = player.fast;
////////////////////////////////////
//将上面的变为一句话，即player对象的初始化方法
////////////////////////////////////
player.init();
