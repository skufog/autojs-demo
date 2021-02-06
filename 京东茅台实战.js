auto.waitFor()
launchApp("京东");

// 进去茅台链接
function one(){
    if(className("android.view.View").desc("我的").exists()){
        toast("点击我的")
        className("android.view.View").desc("我的").findOne().click();
    }   
}
//点击收藏，并进去茅台页面
function two(){
        toast("点击收藏")
        click(110,254)
        toast("点击茅台")
        sleep(200)
        click(460,413)
        sleep(200)
        three()
}
function three(){
  if(text("立即购买").exists()){
      toast("点击立即购买")
      namesl=id("com.jd.lib.productdetail.feature:id/add_2_car").findOne().bounds();
      click(namesl.centerX(), namesl.centerY());
      four();
  }else if(text("等待预约").exists()){
     toast("现在是等待预约状态")
     
     three();
  }
  else{
    toast("点击立即购买失败，重新调用立即购买")
    three();
  }
}
function four(){
    if(text("确定").exists()){
        amesl=id("com.jd.lib.productdetail.feature:id/detail_style_left_btn").findOne().bounds();
      click(namesl.centerX(), namesl.centerY());
    }
    five();
}
function five(){
    if(text("提交订单").exists()){
        toast("点击提交订单")
        namesl=id("com.jd.lib.settlement.feature:id/a0s").findOne().bounds();
        click(namesl.centerX(), namesl.centerY());
        
    }else{
        toast("提交订单失败，重新提交")
        four();
    }
}
one();
two();
// sleep(5000)
// exit();
