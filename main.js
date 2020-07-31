var wrapper = document.getElementsByClassName('wrapper')[0]
var items = document.querySelectorAll('.item')
var slots = document.querySelectorAll(".slot")
var leftBtn = document.getElementById('left')
var rightBtn = document.getElementById('right')
var index = 0
//初始化重置每张图片的class值
var initClass = function () {
    items.forEach(x => x.className='item')
    slots.forEach(x => x.className='slot')
}
//根据索引值，显示图片
var renderIndex = function (index) {
    //先将所有类名重置，再根据index添加类名active让其显示
    initClass();
    items[index].classList.add('active') //渲染图片
    slots[index].classList.add('active');//渲染小黑点
}
//点击左键，右键，改变索引值进行渲染
leftBtn.onclick = function () {
    if (index == 0) {
        index = items.length - 1  //items.length-1 表示最后一张
    } else { index-- }
    renderIndex(index)
}
rightBtn.onclick = function () {
    if (index == items.length - 1) {
        index = 0
    } else {
        index++
    }
    renderIndex(index)
}
//先给圆点赋上索引值，通过点击圆点，获取圆点的索引值
for (var i = 0; i < slots.length; i++) {
    slots[i].index = i
    slots[i].onclick = function () {
        renderIndex(this.index);
    }
}

//自动向右切换图片
var autoRender = function () {
    index++
    // console.log(index)
    if (index < items.length) {
    } else {
        index = 0
    }
    renderIndex(index)
}
var timer = setInterval(autoRender, 5000)
//当鼠标放置上去时，清除定时器
wrapper.onmouseover = function () {
    clearInterval(timer);
}
//当鼠标离开时，重启定时器
wrapper.onmouseout = function () {
    timer = setInterval(autoRender, 5000)
}
