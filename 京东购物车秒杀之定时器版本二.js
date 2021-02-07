//每5秒就发出一次hello
/**var id = setInterval(function(){
    toast("hello");//此处可以作为方法的调入
    log("hello")
}, 5000);
**/

// 2秒发出一次helloworld
// 然后20s 后停止
/** 
var id = setInterval(function(){
        toast("hello");//此处可以作为方法的调入
        log("hello")
}, 2000);

setTimeout(function(){
    clearInterval(id);
}, 20 * 1000);*/


// 多线程的使用
// 启动线程
// var thread=threads.start(function(){
//     toast("我正在使用线程创建"); 
// });

// 主线程与子线程一起执行
/** 
threads.start(function(){
    //在新线程执行的代码
    while(true){
        log("子线程");
        sleep(2000)
    }
});
while(true){
    log("脚本主线程");
    sleep(2000)
    var count=0
    count++;
    if(count==15){
        break;   
    }
}
exit();

*/
// 停止线程
// console.show();
// var thread = threads.start(function(){
//     while(true){
//         log("子线程");
//     }
// });
// //停止线程执行
// // 5s后停止线程
// sleep(5000)
// thread.interrupt();
// console.hide()
// exit();