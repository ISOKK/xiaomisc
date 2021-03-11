window.onload = function () {  
    var item = document.querySelector('.item');
    var lis = item.querySelectorAll('li');
    var cons = document.querySelectorAll('.content');
    //for循环绑定事件
    for (var i = 0; i < lis.length; i++) { 
        //开始给li设置索引号
        lis[i].setAttribute('index', i);
        lis[i].onclick = function () { 
            //排他思想
            for (var i = 0; i < lis.length; i++) { 
                lis[i].className = '';
            }
            this.className = 'active';
            //显示内容模块
            var index = this.getAttribute('index');

            for (i = 0; i < cons.length; i++) { 
                cons[i].style.display = 'none';
            }
            cons[index].style.display = 'block';
        }
    }
    
    // //登录帐号检测
    // var text = document.querySelector('value');
    // var pass = document.querySelector('pass');
    // var tishi = document.querySelector('.tishi');
    // var div = tishi.querySelectorAll('div');
    // var btn = document.querySelector('login-button');
    // btn.onclick=function () { 
    //     // if (text == "" || text == null) { 
    //         alert("请输入帐号");
    //         // return false;
    //     // } else {
    //     //     return true;
    //     // }
    // }
}
