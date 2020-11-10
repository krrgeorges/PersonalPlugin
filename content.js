document.getElementsByClassName("global-nav__primary-item")[0].remove();
//redirects to jobs if current url is linkedin feeds
if(window.location.host.indexOf("linkedin.com") >= 0 && window.location.href.indexOf("/feed") > 0){window.location.href = "https://www.linkedin.com/jobs";}