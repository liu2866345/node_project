/**
 * Created by LIUD009 on 2016/5/31.
 */

console.log("login js load success....");

function submit(){
    var reqData = {
        user:{
            name:$("input[name='name']").val(),
            password:$("input[name='password']").val()
        }
    };
    $.ajax({
        url:'http://localhost:8811/login.ajax',
        type:'post',
        data:reqData,
        success:function(data){
            var data = eval(data);
            if(data[0].url){
                location.href = data[0].url;
            }
        },
        error:function(){
            alert("登录失败")
        }
    });
}

