var title_timer;
var titles = ['(1) New Message From Jenny Anderson', 'Get Weekly Checks' ]
window.onblur = function () { 

	title_timer = setInterval(function () {
		document.title = titles[0]; 

		setTimeout(function () {
			document.title = titles[1]; 
		},1000)
	},1500)
}
window.onfocus = function () { 
	clearInterval(title_timer);
	document.title = titles[1]; 
}