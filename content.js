hosts = ["linkedin.com","github.com","glassdoor.co.in","en.wikipedia.org","mail.google.com"]

mail_bans = ["talent.com","timesjobs job alert","iimjobs.com","timesjobs research","linkedin job alerts"]

if(window.location.host.indexOf(hosts[0]) >= 0){
	if(window.location.href.indexOf("/feed/") >= 0){
		window.location.href = "https://www.linkedin.com/jobs/"
	}
	if(document.getElementsByClassName("global-nav__primary-link").length > 0){
		console.log("Removed feed link")
		document.getElementsByClassName("global-nav__primary-link")[0].remove();
	}
	if(document.getElementsByClassName("global-nav__primary-item").length > 0){
		console.log("Removed feed link")
		document.getElementsByClassName("global-nav__primary-item")[0].remove();
	}
}

if(window.location.host.indexOf(hosts[1]) >= 0){
	href = window.location.href
	if(href.indexOf("?") >= 0){
		href = href.substring(0,href.indexOf("?"))
	}
	if(document.getElementsByClassName("vcard-username").length > 0){
		if(href.substring(href.lastIndexOf("/")+1,href.length) == document.getElementsByClassName("vcard-username")[0].textContent.trim()){
			console.log("Profile Page Detected - Github")
			nav_items = document.getElementsByClassName("UnderlineNav-item")
			for(var i=0;i<=nav_items.length-1;i++){
				if(nav_items[i].classList.contains("selected") == true){
					if(nav_items[i].textContent.trim() == "Overview"){
						window.location.href = href+"?tab=repositories"
						break;
					}
				}
				if(nav_items[i].textContent.trim() == "Overview"){
					nav_items[i].remove()
				}
			}

		}
	}
}

if(window.location.host.indexOf(hosts[2]) >= 0){
	href = window.location.href
	var rids = []
	if(href.indexOf("/Reviews/") > 0){
		var int = setInterval(function(){
	  		var ps = document.getElementsByClassName("v2__EIReviewDetailsV2__bodyColor");
	  		for(var i=0;i<=ps.length-1;i++){
	  			if(rids.indexOf(ps[i].textContent) < 0){
	  				console.log(ps[i].getElementsByTagName("span")[0].dataset.test+" : "+ps[i].textContent)
	  				rids.push(ps[i].textContent)	
	  			}
	  		}
			document.getElementsByClassName("pagination__ArrowStyle__nextArrow")[0].click()
		},4000)
		
	}
}

if(window.location.host.indexOf(hosts[3]) >= 0){
	if(window.location.href.indexOf("/wiki") > 0){
		console.log("wiki page detected")
		var ids = ["mw-page-base","mw-head-base","mw-data-after-content","mw-navigation","footer","toc"];
		for(id in ids){document.getElementById(ids[id]).remove();}
		var classes = ["reference","reflist","box-Refimprove"]
		for(c in classes){
			var css=document.getElementsByClassName(classes[c]);
			if(css.length > 0){
				for(var i=0;i<=css.length-1;i++){
					css[i].remove()
				}
			}
		}
		document.getElementById("content").style.marginLeft = "0px";
	}
}

async function wait(m){
	await new Promise(r=>setTimeout(r,m))
}

if(window.location.host.indexOf(hosts[4]) >= 0){
	if(window.location.href.indexOf("/u/") > 0 && window.location.href.indexOf("#inbox") > 0){
		console.log("Google mail inbox detected")
		window.setInterval(function(){
			var divs = document.getElementsByTagName("div");
			var tpm = null;
			for(var i=0;i<=divs.length-1;i++){
				  if(divs[i].getAttribute("role")=="tabpanel"){tpm = divs[i]}
			}
			try{
				var trs = tpm.getElementsByClassName("Cp")[tpm.getElementsByClassName("Cp").length-1].getElementsByTagName("table")[0].getElementsByTagName("tr")
			}
			catch(err){
				return
			}
			c_count = 0
			for(var i=0;i<=trs.length-1;i++){
				var tds = trs[i].getElementsByTagName("td")
				var sender = tds[3].getElementsByTagName("span")[0].innerText.trim()
				if(mail_bans.indexOf(sender.toLowerCase()) >= 0){
					console.log(sender)
					if(tds[1].getElementsByTagName("div")[0].ariaChecked!="true" && tds[1].getElementsByTagName("div")[0].ariaChecked!=true){
						tds[1].click()
						c_count += 1
					}
				}
			}
			if(c_count > 0){
				document.onmousemove = function(e){
					document.getElementsByClassName("asa")[2].parentElement.style.position = "absolute"
					document.getElementsByClassName("asa")[2].parentElement.style.top = "0px";
					document.getElementsByClassName("asa")[2].parentElement.style.left = "0px";
					document.getElementsByClassName("asa")[2].parentElement.style.top = e.clientY-document.getElementsByClassName("asa")[2].parentElement.getBoundingClientRect().y+"px"
					document.getElementsByClassName("asa")[2].parentElement.style.left = e.clientX-document.getElementsByClassName("asa")[2].parentElement.getBoundingClientRect().x+"px"
					document.getElementsByClassName("asa")[2].parentElement.onclick = function(){
						document.onmousemove = function(){}
						document.getElementsByClassName("asa")[2].parentElement.style.position = "relative"
						document.getElementsByClassName("asa")[2].parentElement.style.top = "0px";
						document.getElementsByClassName("asa")[2].parentElement.style.left = "0px";
					}
				}
			}
		},5000)
	}
}


if(window.location.href.indexOf(".pdf") > 0 && window.location.href.indexOf("file:/") >= 0){
	console.log("PDF page detected")
	if(window.location.href.substring(window.location.href.length-4,window.location.href.length) == ".pdf"){
		chrome.runtime.sendMessage({message:"lpdfDetected:"+window.location.href},function(){

		})
	}
}

var d = new Date()
var datestring = d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear()
chrome.storage.local.get('value',function(result){
	if(result.value == undefined || result.value != datestring){
		chrome.storage.local.set({'value':datestring},function(){
			console.log("Tabs opened for today")
			chrome.storage.local.get("tabstoopen",function(result){
				if(result.tabstoopen!=undefined){
					var tabs_to_open = JSON.parse(result.tabstoopen)
					console.log(tabs_to_open)
					for(var i=0;i<=tabs_to_open.length-1;i++){
						window.open(tabs_to_open[i],"_blank")
					}
				}
			})
		})
	}
	else{
		console.log("Tabs already opened for today")
	}
})
