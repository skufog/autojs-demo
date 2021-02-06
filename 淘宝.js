auto.waitFor()
launchApp("手机淘宝");
// 点击购物车
function demo01(){
    if(className("android.widget.FrameLayout").desc("购物车").exists()){
        log("准备点击")
        className("android.widget.FrameLayout").desc("购物车").findOne().click()
        demo02();
    }else{
        log("购物车不存在")
    }
}
//全选
function demo02(){
    id("checkbox_container").findOne().click()
    demo03();
}
// 点击结算
function demo03(){
    if(id("button_cart_charge").exists()){
        id("button_cart_charge").findOne().click()
    }else{
        demo03();
    }
}
// 提交订单
function demo04(){
    if(id("com.taobao.taobao:id/purchase_recycler_view").exists()){
            
    }else{

    }
}
demo01()

