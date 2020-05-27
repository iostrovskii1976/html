(function($) {

$(document).ready(function () {
	$(".navWrapp").each(function(){
							var ul=$(this).find("ul");
							var overWrapperBottom=$(".overWrapperBottom");
							var wrapper=$("#wrapper");
							if(ul.length==1)
								{
								if(!$(this).hasClass("current"))ul.css("display","none");
								$(this).find("a:first").bind("click",function(){
									if(ul.css("display")=="none")ul.css("display","block");
									else ul.css("display","none");
									if(!Globltie7)overWrapperBottom.css("height",intval(wrapper.css("height")));
									});
								}	
							});
	//Search
	$("#submSearch").bind("click",function(){
								$("#formSearch").submit();
								return false;
								});
								
	var paginator=$("#paginator");
	if(paginator.length>0)
		{
		if(paginator.children().length==1)paginator.css("display","none");
		}
});

function intval(str)
{
var val = parseInt(str,10);
return val?val:0;
}


})(jQuery);

