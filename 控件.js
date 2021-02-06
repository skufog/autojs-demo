// 测试控件
if(text("立即购买").exists()){
    toast("点击立即购买")
    namesl=id("com.jd.lib.productdetail.feature:id/add_2_car").findOne().bounds();
    click(namesl.centerX(), namesl.centerY());
    // sleep(200)

    //     if(text("提交订单").exists()){
    //         toast("点击提交订单")
    //         namesl=id("com.jd.lib.settlement.feature:id/a0s").findOne().bounds();
    //         click(namesl.centerX(), namesl.centerY());
            
    //     }else{
    //         toast("提交订单失败，重新提交")
        
    //     }
 
   
}