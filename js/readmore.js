/**
 * Created by Administrator on 2017/8/8.
 */
$(document).ready(function () {
    var article=blogJson.article;
    var id=parseInt(GetQueryString("id"));
    init(article,id);
    $("#pre").on("click",function () {
        if(id<=0){
            id=article.length-1;
        }else{
            id-=1;
        }
        init(article,id);
    });
    $("#next").on("click",function () {
        if(id>=(article.length-1)){
            id=0;
        }else{
            id+=1;
        }
        init(article,id);
    });
})
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
function init(article,id){
    var content="";
    var htmlStr="";
    for (var i in article[id].content){
        content+="<p>"+article[id].content[i]+"</p>";
    }
    htmlStr+="<div class='aritcle-container'><h2>"+article[id].head+"</h2>"+
        '<img class="article-img" src="'+article[id].img+'">'+
        "<div class='article-content'"+">"+content+"</div>"+"</div>";
    $(".article-list").html(htmlStr);
}