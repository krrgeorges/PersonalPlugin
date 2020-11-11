chrome.webRequest.onBeforeRequest.addListener(
  function(info) {return {redirectUrl: "https://www.linkedin.com/jobs/"};},
  {urls: ["*://www.linkedin.com/feed/"]},
  ["blocking"]
);