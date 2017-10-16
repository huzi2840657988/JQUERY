/**value
 * Created by honglin.jiang on 2014/10/14.
 */
 $(function(){
     //验证用户名:6~8位
     //失去焦点时
     $("#userName").blur(function () {
         //获取值
         var userName = $.trim($(this).val());
         console.log(userName);
         var msg = "";
         if(userName.length===0){
            //提示语:用户名不能为空
             msg = "用户名不能为空";
         }else if(!(userName.length<9 && userName.length>5)){
            //提示语:用户名长度需要在6~8位
             msg = "用户名长度需要在6~8位";
         }
         //显示错误
         if(msg.length>0){
             $(this).removeClass("inputs"); //移除正确的样式
             $(this).addClass("inputs_error");//添加错误的样式
             alert(msg);
         }else{
             $(this).removeClass("inputs_error"); //移除错误的样式
             $(this).addClass("inputs_success");//添加正确的样式
         }
     });
     //验证密码:8~12位
     //失去焦点时
     $("#pwd").blur(function () {
         //获取值
         var pwd = $.trim($(this).val());
         var msg = "";
         if(pwd.length===0){
             //提示语:用户名不能为空
             msg = "密码不能为空";
         }else if(!(pwd.length<13 && pwd.length>7)){
             //提示语:用户名长度需要在6~8位
             msg = "密码长度需要在8~12位";
         }
         //显示错误
         if(msg.length>0){
             $(this).removeClass("inputs");
             $(this).addClass("inputs_error");//添加错误的样式
             alert(msg);
         }else{//如果成功
             $(this).removeClass("inputs_error"); //移除成功的样式
             $(this).addClass("inputs_success");//添加正确的样式
         }
     });
     //验证重复密码
     //失去焦点时
     $("#repwd").blur(function () {
         //获取重复值
         var repwd = $.trim($(this).val());
         //获取密码值
         var pwd = $.trim($("#pwd").val());
         var msg = "";
         if(repwd.length===0){
             //提示语:重复密码不能为空
             msg = "重复密码不能为空";
         }else if(pwd!==repwd){
             //提示语:用户名不能为空
             msg = "和密码不一致";
         }
         //显示错误
         if(msg.length>0){
             $(this).removeClass("inputs"); //移除正确的样式
             $(this).addClass("inputs_error");//添加错误的样式
             alert(msg);
         }else{
             $(this).removeClass("inputs_error"); //移除错误的样式
             $(this).addClass("inputs_success");//添加正确的样式
         }
     });
 })
function checkForm(){
    /**
     * 获取需要验证的元素
     */
    /**
     *  用户名
     * */
    //获取值
    var userName = $.trim($("#userName").val());
    console.log(userName);
    var msg = "";
    if(userName.length===0){
        //提示语:用户名不能为空
        msg = "用户名不能为空";
    }else if(!(userName.length<9 && userName.length>5)){
        //提示语:用户名长度需要在6~8位
        msg = "用户名长度需要在6~8位";
    }
    //显示错误
    if(msg.length>0){
        $("#userName").removeClass("inputs"); //移除正确的样式
        $("#userName").addClass("inputs_error");//添加错误的样式
        alert(msg);
        return false;
    }else{
        $("#userName").removeClass("inputs_error"); //移除错误的样式
        $("#userName").addClass("inputs_success");//添加正确的样式
    }
    /**
     * 密码
     */
    //获取值
    var pwd = $.trim($("#pwd").val());
    if(pwd.length===0){
        //提示语:用户名不能为空
        msg = "密码不能为空";
    }else if(!(pwd.length<13 && pwd.length>7)){
        //提示语:用户名长度需要在6~8位
        msg = "密码长度需要在8~12位";
    }
    //显示错误
    if(msg.length>0){
        $("#pwd").removeClass("inputs");
        $("#pwd").addClass("inputs_error");//添加错误的样式
        alert(msg);
        return false;
    }else{//如果成功
        $("#pwd").removeClass("inputs_error"); //移除成功的样式
        $("#pwd").addClass("inputs_success");//添加正确的样式
    }
    /**
     * 验证重复密码
     */
    //获取重复值
    var repwd = $.trim($("#repwd").val());
    //获取密码值
    var pwd = $.trim($("#pwd").val());
    if(repwd.length===0){
        //提示语:重复密码不能为空
        msg = "重复密码不能为空";
    }else if(pwd!==repwd){
        //提示语:用户名不能为空
        msg = "和密码不一致";
    }
    //显示错误
    if(msg.length>0){
        $("#repwd").removeClass("inputs"); //移除正确的样式
        $("#repwd").addClass("inputs_error");//添加错误的样式
        alert(msg);
        return false;
    }else{
        $("#repwd").removeClass("inputs_error"); //移除错误的样式
        $("#repwd").addClass("inputs_success");//添加正确的样式
    }
    return true;
}