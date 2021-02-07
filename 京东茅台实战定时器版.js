/**
 * 本来想测试下写的代码，京东茅台竟然跟别的不一样，
 * 这下，先换成坐标方式，然后在详细更改
 */
auto.waitFor()
launchApp("京东");

// 进去茅台链接
function one(){
    if(className("android.view.View").desc("我的").exists()){
        toast("点击我的")
        className("android.view.View").desc("我的").findOne().click();
        sleep(200)
        two()
    }   
}
//点击收藏，并进去茅台页面
function two(){
        toast("点击收藏")
        click(114,262)
       
}
function three(){
    toast("点击茅台")
    click(466,416)
    sleep(200)
    four()
}
function four(){
    toast("准备购买")
    //今天实战抢了一下，茅台页面不一样，需要修改
  if(text("立即抢购").exists()){
      toast("点击立即购买")
      namesl=id("com.jd.lib.productdetail.feature:id/add_2_car").findOne().bounds();
      click(namesl.centerX(), namesl.centerY());
      five();
  }else if(text("已预约").exists()){
     toast("现在是已预约状态")
     four();
  }
  else{
    toast("点击立即购买失败，重新调用立即购买")
    four();
  }
}
function five(){
    if(text("确定").exists()){
        amesl=id("com.jd.lib.productdetail.feature:id/detail_style_left_btn").findOne().bounds();
      click(namesl.centerX(), namesl.centerY());
    }
    six();
}
function six(){
    if(text("提交订单").exists()){
        toast("点击提交订单")
        namesl=id("com.jd.lib.settlement.feature:id/a0s").findOne().bounds();
        click(namesl.centerX(), namesl.centerY());    
    }else{
        toast("提交订单失败，重新提交")
        six();
    }
}
one();
// sleep(5000)
// exit();
