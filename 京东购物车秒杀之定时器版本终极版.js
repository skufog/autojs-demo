// 终极版本为多线程带定时器，这是在秒杀场景最为适用
// 等待线程到某一时间开始执行
/**var thread = threads.start(function(){
    toast("hello world")  //执行一次
});
thread.waitFor();
thread.setTimeout(function(){  //次函数也是执行一次
    toast("hello 2")
}, 1000);
*/
/**
log("当前线程(主线程):" + threads.currentThread());
var thread = threads.start(function(){
    //设置一个空的定时来保持线程的运行状态
    setInterval(function(){
        var count=0
        toast(count++)
    }, 1000);
});
sleep(500)
thread.setTimeout(() => {
    log("当前线程为"+thread.currentThread())
    exit()
}, 1000);
*/
// 创建两个线程去执行
var t1=threads.start(function(){
    setInterval(function(){
        var count=0
        count++
        toast("我是线程1-"+count)
    }, 1000);
})
var t2=threads.start(function(){
    setInterval(function(){
        var count=0
        count++
        toast("我是线程2-"+count)
    }, 1000);
})
sleep(10000)
// 线程的中断
t1.interrupt();
// 线程的中断
t2.interrupt();
