$(document).ready(function(){
	var url=window.location.toString();
	if(url.search(/\/post\//)>-1){
		$('body').click(function(){window.open('');});
	}
});
