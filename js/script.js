/*

=========================================================

予你 · 一封情书

script.js

=========================================================

负责：

页面初始化

滚动淡入

爱心点击效果

页面点击心形粒子

*/

/* ========================================================= 页面加载 ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

initScrollAnimation(); initHeartInteraction(); initClickEffect(); 

});

/* ========================================================= 滚动淡入 ========================================================= */

function initScrollAnimation() {

const elements = document.querySelectorAll( ".section, .letter" ); /* * 如果浏览器不支持 IntersectionObserver， * 就直接显示内容。 */ if (!("IntersectionObserver" in window)) { elements.forEach(function (element) { element.classList.add("visible"); }); return; } const observer = new IntersectionObserver( function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add( "visible" ); observer.unobserve( entry.target ); } }); }, { threshold: 0.15 } ); elements.forEach(function (element) { element.classList.add( "scroll-hidden" ); observer.observe(element); }); 

}

/* ========================================================= 主爱心点击 ========================================================= */

function initHeartInteraction() {

const heart = document.querySelector(".heart"); if (!heart) { return; } heart.addEventListener( "click", function () { createHeartParticle( heart ); } ); 

}

/* ========================================================= 页面点击心形效果 ========================================================= */

function initClickEffect() {

document.addEventListener( "click", function (event) { /* * 如果点击的是主爱心， * 不重复产生效果。 */ if ( event.target.closest(".heart") ) { return; } createFloatingHeart( event.clientX, event.clientY ); } ); 

}

/* ========================================================= 创建爱心粒子 ========================================================= */

function createHeartParticle(element) {

const rect = element.getBoundingClientRect(); const x = rect.left + rect.width / 2; const y = rect.top + rect.height / 2; for (let i = 0; i < 7; i++) { createFloatingHeart( x + random(-30, 30), y + random(-20, 20) ); } 

}

/* ========================================================= 创建漂浮爱心 ========================================================= */

function createFloatingHeart(x, y) {

const heart = document.createElement("span"); heart.textContent = "♥"; heart.style.position = "fixed"; heart.style.left = x + "px"; heart.style.top = y + "px"; heart.style.pointerEvents = "none"; heart.style.zIndex = "9999"; heart.style.fontSize = random(12, 22) + "px"; heart.style.color = "rgba(200, 117, 130, 0.65)"; heart.style.transition = "transform 1.4s ease, opacity 1.4s ease"; heart.style.transform = "translate(-50%, -50%) scale(1)"; heart.style.opacity = "1"; document.body.appendChild( heart ); /* * 下一帧开始动画 */ requestAnimationFrame( function () { const moveX = random(-50, 50); const moveY = random(-90, -140); heart.style.transform = "translate(" + moveX + "px, " + moveY + "px) scale(0.5)"; heart.style.opacity = "0"; } ); /* * 动画结束后删除 */ setTimeout( function () { heart.remove(); }, 1500 ); 

}

/* ========================================================= 随机数 ========================================================= */

function random(min, max) {

return Math.floor( Math.random() * (max - min + 1) ) + min; 

}


