// 打开京东 秒杀的已经放进购物车，直接提交订单
auto.waitFor()
launchApp("京东");
console.show();
function demo01(){
    if(className("android.view.View").depth("2").exists()){
        console.info("点击购物车")
        //点击购物车
        className("android.view.View").desc("购物车1").findOne().click()
        demo02();
    }else{
        console.warn("等待超时，即将重新执行")
        demo01();
    } 
}
function demo02(){
    // 判断是否点击了
    if(text("去结算(1)").exists()){
      console.info("准备去结算")
      text("去结算(1)").findOne().click()  
      demo03();   
    }else{
        // 没有点击全选按钮
        console.info("准备点击全选按钮")
        var nm= id("com.jd.lib.cart.feature:id/cart_select_all_layout").findOne().bounds();
        click(nm.centerX(), nm.centerY());
        sleep(100)
        text("去结算(1)").findOne().click()  
        sleep(400)
        demo03()
    }
}
function demo03(){
        console.info("准备提交订单")
        var nm= className("android.widget.Button").findOne().bounds() 
        click(nm.centerX(), nm.centerY()); 
        sleep(500)
        demo04();
}
// 存在虚拟财产，需要输入支付密码
function demo04(){
    if(className("android.widget.TextView").findOne().bounds()){
        sleep(600)
        console.info("准备输入支付密码")
            click(455,1307)    
            click(171,1313)    
            click(450,1531)    
            click(154,1198)    
            click(450,1208)    
            click(154,1198)    
    }else{
        console.error("不需要输入支付密码") 
    } 
}

/**
 * 脑裂过程：
 *   1:autojs 定时器api 是哪个？
 *   2:设置运行时间
 * 
 *  分析：
 *    1： 去官网查看后：发现定时器方法为
 *     setTimeout(callback, delay[, ...args])
 *     setInterval(callback, delay[, ...args])
 *   2:首先需要获取京东时间，然后获取本地时间，减去时间差，然后设置好等待的时间
 */
  /**
   * 时间获取方法
   */
  //本地时间与京东服务器时间差
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

// 设置抢购的时间
//抢购时间，先设置成毫秒方式，后面会改成熟悉的yyyy-MM-dd hh:mm:ss 方式
var buyTime=1612625220000
//矫正后的本地时间
var localTime=isDiffTime()+new Date().getTime() 
var runTime=buyTime-localTime;
// 这里的运行时间为毫秒
log("运行时间为"+runTime)
// 定时器使用方式一：使用sleep方式等待运行
sleep(runTime)
demo01();
