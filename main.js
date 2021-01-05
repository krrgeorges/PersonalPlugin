var colors = [[["#f9ebea","249, 235, 234","6, 54%, 95%"],["#f2d7d5","242, 215, 213","6, 54%, 89%"],["#e6b0aa","230, 176, 170","6, 54%, 78%"],["#d98880","217, 136, 128","6, 54%, 68%"],["#cd6155","205, 97, 85","6, 54%, 57%"],["#c0392b","192, 57, 43","6, 63%, 46%"],["#a93226","169, 50, 38","6, 63%, 41%"],["#922b21","146, 43, 33","6, 63%, 35%"],["#7b241c","123, 36, 28","6, 63%, 29%"],["#641e16","100, 30, 22","6, 63%, 24%"]],[["#fdedec","253, 237, 236","6, 78%, 96%"],["#fadbd8","250, 219, 216","6, 78%, 91%"],["#f5b7b1","245, 183, 177","6, 78%, 83%"],["#f1948a","241, 148, 138","6, 78%, 74%"],["#ec7063","236, 112, 99","6, 78%, 66%"],["#e74c3c","231, 76, 60","6, 78%, 57%"],["#cb4335","203, 67, 53","6, 59%, 50%"],["#b03a2e","176, 58, 46","6, 59%, 43%"],["#943126","148, 49, 38","6, 59%, 37%"],["#78281f","120, 40, 31","6, 59%, 30%"]],[["#f5eef8","245, 238, 248","283, 39%, 95%"],["#ebdef0","235, 222, 240","283, 39%, 91%"],["#d7bde2","215, 189, 226","283, 39%, 81%"],["#c39bd3","195, 155, 211","283, 39%, 72%"],["#af7ac5","175, 122, 197","283, 39%, 63%"],["#9b59b6","155, 89, 182","283, 39%, 53%"],["#884ea0","136, 78, 160","283, 34%, 47%"],["#76448a","118, 68, 138","283, 34%, 40%"],["#633974","99, 57, 116","283, 34%, 34%"],["#512e5f","81, 46, 95","283, 34%, 28%"]],[["#f4ecf7","244, 236, 247","282, 39%, 95%"],["#e8daef","232, 218, 239","282, 39%, 89%"],["#d2b4de","210, 180, 222","282, 39%, 79%"],["#bb8fce","187, 143, 206","282, 39%, 68%"],["#a569bd","165, 105, 189","282, 39%, 58%"],["#8e44ad","142, 68, 173","282, 44%, 47%"],["#7d3c98","125, 60, 152","282, 44%, 42%"],["#6c3483","108, 52, 131","282, 44%, 36%"],["#5b2c6f","91, 44, 111","282, 44%, 30%"],["#4a235a","74, 35, 90","282, 44%, 25%"]],[["#eaf2f8","234, 242, 248","204, 51%, 94%"],["#d4e6f1","212, 230, 241","204, 51%, 89%"],["#a9cce3","169, 204, 227","204, 51%, 78%"],["#7fb3d5","127, 179, 213","204, 51%, 67%"],["#5499c7","84, 153, 199","204, 51%, 55%"],["#2980b9","41, 128, 185","204, 64%, 44%"],["#2471a3","36, 113, 163","204, 64%, 39%"],["#1f618d","31, 97, 141","204, 64%, 34%"],["#1a5276","26, 82, 118","204, 64%, 28%"],["#154360","21, 67, 96","204, 64%, 23%"]],[["#ebf5fb","235, 245, 251","204, 70%, 95%"],["#d6eaf8","214, 234, 248","204, 70%, 91%"],["#aed6f1","174, 214, 241","204, 70%, 81%"],["#85c1e9","133, 193, 233","204, 70%, 72%"],["#5dade2","93, 173, 226","204, 70%, 63%"],["#3498db","52, 152, 219","204, 70%, 53%"],["#2e86c1","46, 134, 193","204, 62%, 47%"],["#2874a6","40, 116, 166","204, 62%, 40%"],["#21618c","33, 97, 140","204, 62%, 34%"],["#1b4f72","27, 79, 114","204, 62%, 28%"]],[["#e8f8f5","232, 248, 245","168, 55%, 94%"],["#d1f2eb","209, 242, 235","168, 55%, 88%"],["#a3e4d7","163, 228, 215","168, 55%, 77%"],["#76d7c4","118, 215, 196","168, 55%, 65%"],["#48c9b0","72, 201, 176","168, 55%, 54%"],["#1abc9c","26, 188, 156","168, 76%, 42%"],["#17a589","23, 165, 137","168, 76%, 37%"],["#148f77","20, 143, 119","168, 76%, 32%"],["#117864","17, 120, 100","168, 76%, 27%"],["#0e6251","14, 98, 81","168, 76%, 22%"]],[["#e8f6f3","232, 246, 243","168, 42%, 94%"],["#d0ece7","208, 236, 231","168, 42%, 87%"],["#a2d9ce","162, 217, 206","168, 42%, 74%"],["#73c6b6","115, 198, 182","168, 42%, 61%"],["#45b39d","69, 179, 157","168, 45%, 49%"],["#16a085","22, 160, 133","168, 76%, 36%"],["#138d75","19, 141, 117","168, 76%, 31%"],["#117a65","17, 122, 101","168, 76%, 27%"],["#0e6655","14, 102, 85","168, 76%, 23%"],["#0b5345","11, 83, 69","168, 76%, 19%"]],[["#e9f7ef","233, 247, 239","145, 45%, 94%"],["#d4efdf","212, 239, 223","145, 45%, 88%"],["#a9dfbf","169, 223, 191","145, 45%, 77%"],["#7dcea0","125, 206, 160","145, 45%, 65%"],["#52be80","82, 190, 128","145, 45%, 53%"],["#27ae60","39, 174, 96","145, 63%, 42%"],["#229954","34, 153, 84","145, 63%, 37%"],["#1e8449","30, 132, 73","145, 63%, 32%"],["#196f3d","25, 111, 61","145, 63%, 27%"],["#145a32","20, 90, 50","145, 63%, 22%"]],[["#eafaf1","234, 250, 241","145, 61%, 95%"],["#d5f5e3","213, 245, 227","145, 61%, 90%"],["#abebc6","171, 235, 198","145, 61%, 80%"],["#82e0aa","130, 224, 170","145, 61%, 69%"],["#58d68d","88, 214, 141","145, 61%, 59%"],["#2ecc71","46, 204, 113","145, 63%, 49%"],["#28b463","40, 180, 99","145, 63%, 43%"],["#239b56","35, 155, 86","145, 63%, 37%"],["#1d8348","29, 131, 72","145, 63%, 31%"],["#186a3b","24, 106, 59","145, 63%, 25%"]],[["#fef9e7","254, 249, 231","48, 89%, 95%"],["#fcf3cf","252, 243, 207","48, 89%, 90%"],["#f9e79f","249, 231, 159","48, 89%, 80%"],["#f7dc6f","247, 220, 111","48, 89%, 70%"],["#f4d03f","244, 208, 63","48, 89%, 60%"],["#f1c40f","241, 196, 15","48, 89%, 50%"],["#d4ac0d","212, 172, 13","48, 88%, 44%"],["#b7950b","183, 149, 11","48, 88%, 38%"],["#9a7d0a","154, 125, 10","48, 88%, 32%"],["#7d6608","125, 102, 8","48, 88%, 26%"]],[["#fef5e7","254, 245, 231","37, 90%, 95%"],["#fdebd0","253, 235, 208","37, 90%, 90%"],["#fad7a0","250, 215, 160","37, 90%, 80%"],["#f8c471","248, 196, 113","37, 90%, 71%"],["#f5b041","245, 176, 65","37, 90%, 61%"],["#f39c12","243, 156, 18","37, 90%, 51%"],["#d68910","214, 137, 16","37, 86%, 45%"],["#b9770e","185, 119, 14","37, 86%, 39%"],["#9c640c","156, 100, 12","37, 86%, 33%"],["#7e5109","126, 81, 9","37, 86%, 27%"]],[["#fdf2e9","253, 242, 233","28, 80%, 95%"],["#fae5d3","250, 229, 211","28, 80%, 90%"],["#f5cba7","245, 203, 167","28, 80%, 81%"],["#f0b27a","240, 178, 122","28, 80%, 71%"],["#eb984e","235, 152, 78","28, 80%, 61%"],["#e67e22","230, 126, 34","28, 80%, 52%"],["#ca6f1e","202, 111, 30","28, 74%, 46%"],["#af601a","175, 96, 26","28, 74%, 39%"],["#935116","147, 81, 22","28, 74%, 33%"],["#784212","120, 66, 18","28, 74%, 27%"]],[["#fbeee6","251, 238, 230","24, 71%, 94%"],["#f6ddcc","246, 221, 204","24, 71%, 88%"],["#edbb99","237, 187, 153","24, 71%, 77%"],["#e59866","229, 152, 102","24, 71%, 65%"],["#dc7633","220, 118, 51","24, 71%, 53%"],["#d35400","211, 84, 0","24, 100%, 41%"],["#ba4a00","186, 74, 0","24, 100%, 36%"],["#a04000","160, 64, 0","24, 100%, 31%"],["#873600","135, 54, 0","24, 100%, 26%"],["#6e2c00","110, 44, 0","24, 100%, 22%"]],[["#fdfefe","253, 254, 254","192, 15%, 99%"],["#fbfcfc","251, 252, 252","192, 15%, 99%"],["#f7f9f9","247, 249, 249","192, 15%, 97%"],["#f4f6f7","244, 246, 247","192, 15%, 96%"],["#f0f3f4","240, 243, 244","192, 15%, 95%"],["#ecf0f1","236, 240, 241","192, 15%, 94%"],["#d0d3d4","208, 211, 212","192, 5%, 82%"],["#b3b6b7","179, 182, 183","192, 3%, 71%"],["#979a9a","151, 154, 154","192, 2%, 60%"],["#7b7d7d","123, 125, 125","192, 1%, 49%"]],[["#f8f9f9","248, 249, 249","204, 8%, 98%"],["#f2f3f4","242, 243, 244","204, 8%, 95%"],["#e5e7e9","229, 231, 233","204, 8%, 90%"],["#d7dbdd","215, 219, 221","204, 8%, 86%"],["#cacfd2","202, 207, 210","204, 8%, 81%"],["#bdc3c7","189, 195, 199","204, 8%, 76%"],["#a6acaf","166, 172, 175","204, 5%, 67%"],["#909497","144, 148, 151","204, 4%, 58%"],["#797d7f","121, 125, 127","204, 3%, 49%"],["#626567","98, 101, 103","204, 3%, 40%"]],[["#f4f6f6","244, 246, 246","184, 9%, 96%"],["#eaeded","234, 237, 237","184, 9%, 92%"],["#d5dbdb","213, 219, 219","184, 9%, 85%"],["#bfc9ca","191, 201, 202","184, 9%, 77%"],["#aab7b8","170, 183, 184","184, 9%, 69%"],["#95a5a6","149, 165, 166","184, 9%, 62%"],["#839192","131, 145, 146","184, 6%, 54%"],["#717d7e","113, 125, 126","184, 5%, 47%"],["#5f6a6a","95, 106, 106","184, 5%, 40%"],["#4d5656","77, 86, 86","184, 5%, 32%"]],[["#f2f4f4","242, 244, 244","184, 6%, 95%"],["#e5e8e8","229, 232, 232","184, 6%, 91%"],["#ccd1d1","204, 209, 209","184, 6%, 81%"],["#b2babb","178, 186, 187","184, 6%, 72%"],["#99a3a4","153, 163, 164","184, 6%, 62%"],["#7f8c8d","127, 140, 141","184, 6%, 53%"],["#707b7c","112, 123, 124","184, 5%, 46%"],["#616a6b","97, 106, 107","184, 5%, 40%"],["#515a5a","81, 90, 90","184, 5%, 34%"],["#424949","66, 73, 73","184, 5%, 27%"]],[["#ebedef","235, 237, 239","210, 12%, 93%"],["#d6dbdf","214, 219, 223","210, 12%, 86%"],["#aeb6bf","174, 182, 191","210, 12%, 71%"],["#85929e","133, 146, 158","210, 12%, 57%"],["#5d6d7e","93, 109, 126","210, 15%, 43%"],["#34495e","52, 73, 94","210, 29%, 29%"],["#2e4053","46, 64, 83","210, 29%, 25%"],["#283747","40, 55, 71","210, 29%, 22%"],["#212f3c","33, 47, 60","210, 29%, 18%"],["#1b2631","27, 38, 49","210, 29%, 15%"]],[["#eaecee","234, 236, 238","210, 9%, 92%"],["#d5d8dc","213, 216, 220","210, 9%, 85%"],["#abb2b9","171, 178, 185","210, 9%, 70%"],["#808b96","128, 139, 150","210, 9%, 55%"],["#566573","86, 101, 115","210, 14%, 39%"],["#2c3e50","44, 62, 80","210, 29%, 24%"],["#273746","39, 55, 70","210, 29%, 21%"],["#212f3d","33, 47, 61","210, 29%, 18%"],["#1c2833","28, 40, 51","210, 29%, 16%"],["#17202a","23, 32, 42","210, 29%, 13%"]]]


$(document).ready(function(){
	add_colors();
	add_ui_links();
	CKEDITOR.on('instanceCreated', function(e) {
	    e.editor.on('change', function (event) {
	        if(event.editor.name == "notes"){
	        	chrome.storage.local.set({"tabnotes":CKEDITOR.instances.notes.getData()},function(){
	        		console.log("Tabnotes written")
	        	});
	        }
	    });
	}); 
	CKEDITOR.on('instanceReady',function(){
		$(".cke_top").remove()
	})
	CKEDITOR.replace('notes');
	chrome.storage.local.get("tabnotes",function(result){
		console.log(result.tabnotes)
		if(result.tabnotes == undefined){
			chrome.storage.local.set({"tabnotes":""},function(){
				CKEDITOR.instances.notes.setData('')
			})
		}
		else{
			CKEDITOR.instances.notes.setData(result.tabnotes);
		}
	})
	$("#add-tab-link").click(function(){
		add_link($("#tab-link-input").val().trim());
	})
	$("#add-ps-link").click(function(){
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		    add_link(tabs[0].url);
		});
	})
	$("#tab-link-input").keypress(function(e){
		if(e.which == 13){
			add_link($("#tab-link-input").val().trim());
		}
	})

	$("#U2HD").click(function(){
		var unix_timestamp = $("#epoch-n").val()
		var date = moment.unix(unix_timestamp).format("MM/DD/YYYY HH:mm:ss")
		$("#u2hd_res").html("<br/><b>Human Date : "+date+"</b><br/>");
	})
	$("#HD2U").click(function(){
		var y = $("#hf-d1").val().toString()
		var m = $("#hf-d2").val().toString()
		var d = $("#hf-d3").val().toString()
		var h = $("#hf-d4").val().toString()
		var mi = $("#hf-d5").val().toString()

		var s = $("#hf-d6").val().toString()
		var a = $("#hf-d7").val().toString()
		var l = $("#hf-d8").val().toString()
		if(l == 1){
			$("#hd2u_res").html("<br/><b>UNIX Timestamp : "+moment(moment(y+"/"+m+"/"+d+" "+h+":"+mi+":"+s+" "+a,"YYYY/MM/DD HH:mm:ss A").utc().format("YYYY/MM/DD HH:mm:ss A"),"YYYY/MM/DD HH:mm:ss A").unix().toString()+"</b><br/>");
		}
		else{
			$("#hd2u_res").html("<b>UNIX Timestamp : "+moment(y+"/"+m+"/"+d+" "+h+":"+mi+":"+s+" "+a,"YYYY/MM/DD HH:mm:ss A").unix().toString()+"</b><br/><br/>");
		}
		
	})
})


function add_colors(){
	chtml = ""
    for(var i=0;i<=colors.length-1;i++){
      var color_group = colors[i]
      chtml += "<div class='color_group' style='width:5%;float:left;display:block'>"
      for(var j=0;j<=color_group.length-1;j++){
        var color_block = color_group[j];
        var hex = color_block[0]
        var rgb = color_block[1]
        var hsl = color_block[2]
        chtml += '<div class="color-block" style="float:left;display:block;position:relative;width:100%;padding-bottom:100%"><div class="js-color" style="background-color: '+hex+'" data-hex="'+hex+'" data-rgb="'+rgb+'" data-hsl="'+hsl+'"></div></div>'
      }
      chtml += '</div>'
    }
    chtml += '<br><br><br><div class="row"><div class="col" id="color-color" style="border:2px white solid;"></div><div class="col"><input type="text" id="color-hex"/></div><div class="col" id="color-rgb"></div></div>'
    $("#nav-colors").html(chtml)
    $(".js-color").click(function(){
    	console.log($(this).data("hex"));
    	$("#color-hex").val($(this).data("hex"))
    	$("#color-color").css("background-color",$(this).data("hex"))
    	$("#color-rgb").text($(this).data("rgb"))
    	document.getElementById("color-hex").focus()
    	document.getElementById("color-hex").select()
    	document.execCommand("copy")
    })
}

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