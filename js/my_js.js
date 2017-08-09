/**
 * Created by Administrator on 2017/8/8.
 */
$(document).ready(function () {
    initData();
})
function initData() {
    var htmlStr="";
    var article=blogJson.article;
    for(var i in article){
        var content="";
        var item=article[i];
        for (var j in item.content){
            content+="<p>"+item.content[j]+"</p>";
        }
        htmlStr+="<div class='aritcle-container'><a class='read-more' href='readmore.html?id="+i+"'>...ReadMore</a><h2>"+item.head+"</h2>"+
            '<div><img class="article-img col-md-4 col-lg-4 col-xs-4" src="'+item.img+'">'+
            "<div class='article-content col-md-8 col-lg-8 col-xs-8'"+">"+content+"</div>"+"</div>"+"</div>";
    }
    $(".article-list").html(htmlStr);
}