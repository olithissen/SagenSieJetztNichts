var config = {
	"spiegel.de" : ".article-comments-box",
	"faz.net" : "#lesermeinungen",
	"zeit.de" : ".comment-section",
	"taz.de" : ".sect_commentlinks",
}

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

var domain = extractDomain(window.location.href);
if (domain in config) {
	$(config[domain]).hide();
}