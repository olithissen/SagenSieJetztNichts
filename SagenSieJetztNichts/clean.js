function extractDomain(url) {
    var domain;
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }
	
	domainElements = domain.split(':')[0].split('.');
	domain = domainElements[domainElements.length - 2] + '.' + domainElements[domainElements.length - 1];

    return domain;
}


$.getJSON("http://tonick.net/filterlist.json", function(config) {
	var domain = extractDomain(window.location.href);
	if (domain in config) {
		$(config[domain]).hide();
	}
});