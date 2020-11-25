chrome.webRequest.onBeforeRequest.addListener(
  function(info) {return {redirectUrl: "https://www.linkedin.com/jobs/"};},
  {urls: ["*://www.linkedin.com/feed/*"]},
  ["blocking"]
);

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if(request.message.indexOf("lpdfDetected") >= 0){
		chrome.tabs.update({url:'pdf_test.html?file='+request.message.substring(request.message.indexOf(":")+1,request.message.length),active:true},null)
	}
})