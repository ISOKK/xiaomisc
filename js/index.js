
    window.addEventListener('load', function () {
        var items = document.getElementsByClassName('item');
        var goPrebtn = document.getElementById('goPre');
        var goNextbtn = document.getElementById('goNext');
        var points = document.getElementsByClassName('point');
        //记录当前下标
        var index = 0;
        //自动轮播
        var timer =setInterval(function () {
            goNextbtn.click();// 手动调用点击事件
        }, 2000);

       // 鼠标移入时取消自动播放
		// banner_list.onmouseover = function() {
		// 	clearInterval(timer);
		// }
		// // 鼠标移出时开启自动播放
		// banner_list.onmouseout = function() {
		// 	timer = setInterval(function () {
        //     goNextbtn.click();// 手动调用点击事件
        // }, 2000);
        // }
        
        var clearActive = function () {
            for (var i = 0; i < items.length; i++) {
                items[i].className = 'item';
            }
            for (var i = 0; i < points.length; i++) {
                points[i].className = 'point';
            }
        }
        var goIndex = function () {
            clearActive();
            items[index].className = 'item active';
            points[index].className = 'point active';
        }
        var goNext = function () {
            if (index < 3) {
                index++;
            } else {
                index = 0;
            }
            goIndex();
        }
        var goPre = function () {
            if (index == 0) {
                index = 3;
            } else {
                index--;
            }
            goIndex();
        }
        goNextbtn.addEventListener('click', function () {
            goNext();
        })
        goPrebtn.addEventListener('click', function () {
            goPre();
        })

        for (var i = 0; i < points.length; i++) {
            points[i].addEventListener('click', function () {
                var pointIndex = this.getAttribute('data-index');
                index = pointIndex;
                goIndex();
            })
        }
        
        

 // 获取菜单和广告部分 回顶部
        var menu = document.querySelector('.idx-menu-adv');
        var goBack = document.querySelector('.goBack');
        var menuTop = menu.offsetTop;
            // 滚动事件
        document.addEventListener('scroll', function () { 
            if (window.pageYOffset >= menuTop) {
                goBack.style.display = 'block';
            } else { 
                goBack.style.display = 'none';
            }
        })

//倒计时方法
        //1.获取元素
        var hour = document.querySelector('.hour');
        var minute = document.querySelector('.minute');
        var second = document.querySelector('.second');
        var inputTime = + new Date('2030-06-1 00:00:00');
        countDown();
        //2.开启定时器
        setInterval(countDown, 1000);
        
        function countDown() { 
            var nowTime = +new Date();
            var times = (inputTime - nowTime) / 1000;
            var h = parseInt(times / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h;
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            minute.innerHTML = m;
            var s = parseInt(times %60);
            s = s < 10 ? '0' + s : s;
            second.innerHTML = s;
        }

    
//家电鼠标经过切换
        var tablist = document.querySelector('.tab-list');
        var list = tablist.querySelectorAll('li');
        var cons = document.querySelectorAll('.gt_con');
         //for循环绑定事件
        for (var i = 0; i < list.length; i++) {
            //开始给li设置索引号
            list[i].setAttribute('index', i);
            list[i].onmouseover = function () {
                //排他思想
                for (var i = 0; i < list.length; i++) {
                    list[i].className = '';
                }
                this.className = 'list';
                //显示内容模块
                var index = this.getAttribute('index');
    
                for (i = 0; i < cons.length; i++) { 
                    cons[i].style.display = 'none';
                }
                cons[index].style.display = 'block';
            }
        }

//底部图标定时器转换
        //获取img
        var aa = document.getElementById('aa');
        //得到图片地址
        var urls = ["./images/img/info5.png", "./images/img/info5-1.png"];
        //当前下标
        var i = 0;
        //先使用一次
        ioo();
        //定时器开启
        setInterval(ioo, 2000);
        function ioo() {
            aa.src = urls[i];
            if (i == urls.length-1) {
                i = 0;
            } else {
                i++;
            }
            
        }
        


    })

