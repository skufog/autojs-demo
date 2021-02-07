auto.waitFor()
launchApp("京东");
console.show();
console.setPosition(-10, 418);
// 抽取
function demo01(){
    if(className("android.view.View").depth("2").exists()){
        console.info("点击购物车")
        //点击购物车
        className("android.view.View").desc("购物车1").findOne().click()
        demo02();
    }else{
        console.warn("等待超时，即将重新执行")
        // demo01();
    } 
}
function demo02(){
    // 判断是否点击了
    if(text("去结算(1)").exists()){
      console.info("准备去结算")
      text("去结算(1)").findOne().click()  
      //demo03();   
    }else{
        // 没有点击全选按钮
        console.info("准备点击全选按钮")
        var nm= id("com.jd.lib.cart.feature:id/cart_select_all_layout").findOne().bounds();
        click(nm.centerX(), nm.centerY());
        sleep(100)
        text("去结算(1)").findOne().click()  
        sleep(400)
        //demo03()
    }
}
function demo03(){
        console.info("准备提交订单")
        var nm= className("android.widget.Button").findOne().bounds() 
        click(nm.centerX(), nm.centerY()); 
        sleep(500)
     
}

function isDiffTime(){
    var url ="https://a.jd.com//ajax/queryServerData.html"
    var r= http.get(url);
    var sTime=r.body.json()
    // 京东服务器时间
    log("京东时间："+sTime.serverTime)
    var timestamp=new Date().getTime();
    log("本地时间："+timestamp)
    // return 
     return sTime.serverTime-timestamp
}
/**
 * 优化版  
 *   目标：通过一点点优化，从而达到满足我们需求的版本 
 */
// 需求： 起两个线程去跑购物车，但不会提交订单测试
/**  下面的两个线程只跑一次，现在需要重复提交  版本v 1.0
 //* 不足：只会执行一次
var t1 = threads.start(function(){
    setTimeout(() => {
        console.info("线程一正在执行")
        demo01();
    }, 1000);
})
var t2 = threads.start(function(){
    setTimeout(() => {
        console.info("线程一正在执行")
        demo01();
    }, 1000);
})
*/
/**
 * 在2秒内重复执行 版本v2.0 
 * 不足：执行的时间是定义死的
 */
/**var t1 = threads.start(function(){
    setInterval(function(){
        console.info("线程一正在执行")
        demo01();
    }, 2000);  
})
var t2 = threads.start(function(){
    setInterval(function(){
        console.info("线程二正在执行")
        demo01();
    },2000);
})**/
/**
 * 使用变量来传递线程执行时间间隔 v3.0
 *  不足：没有定时
 */
/**var runs=5000; 
var t1 = threads.start(function(){
    setInterval(function(){
        console.info("线程一正在执行")
        demo01();
    }, runs);  
})
var t2 = threads.start(function(){
    setInterval(function(){
        console.info("线程二正在执行")
        demo01();
    },runs);
})*/

/**
 * 使用变量来传递线程执行时间间隔加上带定时功能的调用 v4.0
 *  不足：定时器执行没有想象中那么好用。
 */
/** 
var runs=1000;//执行时间间隔 
var t1 = threads.start(function(){
    setInterval(function(){
        console.info("线程一正在执行")
        demo01();
    }, runs);  
})

var t2 = threads.start(function(){
    setInterval(function(){
        console.verbose("线程二正在执行")
        demo01();
    },runs);
})
t1.waitFor();
t1.setTimeout(function(){

}, 5000);
t2.waitFor();
t2.setTimeout(function(){
}, 10000);
*/
/*
    如果可以引入java 线程池，就好了，直接弄定时器执行，简单，
    现在直接用比较时间的方法
*/
/**
 * b_time 购买时间，需要动态配置
 * lo_time 本地时间，需要动态配置
 * https://tool.lu/timestamp/
 * 进入这个网站找到自己想执行的时间戳
 */
var b_time=0
var lo_time=0
while(true){
 if(b_time==lo_time){
    //  直接执行
    var t2 = threads.start(function(){
        setInterval(function(){
            console.verbose("线程二正在执行")
            demo01();
        },500);
    })
 }
}
// demo01();
sleep(50000);
t1.interrupt();
// 线程的中断
t2.interrupt();
