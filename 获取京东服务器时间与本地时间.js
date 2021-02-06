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
// isDiffTime();
//次函数是读取配置文件日期与本地时间+与京东服务器时间差，能否启动线程
// function tranSportTime(){
    
// }
// tranSportTime();