$(document).ready(function(){
	add_ui_links();
	$("#add-tab-link").click(function(){
		add_link($("#tab-link-input").val().trim());
	})
	$("#tab-link-input").keypress(function(e){
		if(e.which == 13){
			add_link($("#tab-link-input").val().trim());
		}
	})
})

function add_link(link){
	if(link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null){
		chrome.storage.local.get('tabstoopen',function(result){
			if(result.tabstoopen == undefined){
				chrome.storage.local.set({'tabstoopen':JSON.stringify([link])},function(){
					add_ui_links();
				})
			}
			else{
				var data = JSON.parse(result.tabstoopen);
				for(var i=0;i<=data.length-1;i++){
					if(link == data[i]){
						return
					}
				}
				data.push(link)
				chrome.storage.local.set({'tabstoopen':JSON.stringify(data)},function(){
					add_ui_links();
				})
			}
		})	
	}
}

function add_ui_links(){
	$("#tab-link-input").val('')
	chrome.storage.local.get('tabstoopen',function(result){
		if(result.tabstoopen != undefined){
			var data = JSON.parse(result.tabstoopen);
			$("#tab-link-container").html('');
			for(var i=0;i<=data.length-1;i++){
				var html = '<div class="col-md-12 tab-link-item" data-link="'+data[i]+'">'+data[i]+'</div>'
				$("#tab-link-container").append(html)
			}
			$(".tab-link-item").dblclick(function(){
				var link = $(this).data("link");
				chrome.storage.local.get('tabstoopen',function(result){
						var data = JSON.parse(result.tabstoopen);
						var index = -1;
						for(var i=0;i<=data.length-1;i++){
							if(data[i] == link){
								index = i
								break
							}
						}
						if(index >= 0){
							data.splice(index,1)
						}
						chrome.storage.local.set({'tabstoopen':JSON.stringify(data)},function(){
							add_ui_links();
						})
				})	

			})
		}
	})
}