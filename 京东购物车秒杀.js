// 打开京东 秒杀的已经放进购物车，直接提交订单
auto.waitFor()
launchApp("京东");
console.show();
// 点击京东购物车
/**if(className("android.view.View").depth("2").exists()){
    // 判断是否点击了全选按钮
    className("android.view.View").desc("购物车1").findOne().click()
    if(text("去结算(1)").exists()){
        toast("存在")
        text("去结算(1)").findOne().click()
        var nm= className("android.widget.Button").findOne().bounds() 
        sleep(50)
        click(nm.centerX(), nm.centerY());
    }else{
        toast("不存在") 
        click(45,1453) 
        sleep(200)     
        text("去结算(1)").findOne().click()
        sleep(200)
        var nm= className("android.widget.Button").findOne().bounds() 
        click(nm.centerX(), nm.centerY());
    }    
}else{
    toast("不存在1")
}
**/
// 抽取
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
        sleep(500)
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
demo01();
sleep(5000);
console.hide();
exit();