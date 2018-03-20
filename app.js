require('./index.scss');

// 获取屏幕宽度（viewport）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取html的dom
let htmlDom = document.getElementsByTagName('html')[0];

// 设置html的fontsize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

// 动态改变html的font-size
window.addEventlistener('resize', (e) => {
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});
