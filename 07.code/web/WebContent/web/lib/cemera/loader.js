define(function(require, exports, module)
{
    return function(jquery){
        (function(){
            if (window.location != window.parent.location ||
                window.panoram_partner_id) {
                return;
            }

            window._gaq = window._gaq || [];
            _gaq.push(['b._setAccount', 'UA-36732895-1']);
            _gaq.push(['b._setDomainName', window.location.hostname]);
            _gaq.push(['b._trackPageview']);

            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

            var submodules = [''];
            var head = document.getElementsByTagName('head')[0];
            window.panoram_partner_id = 'ting0817';
            window.panoram_partner_key = '36045';

            for (var i = 0; i < submodules.length; i++) {
                if (submodules[i].length > 0) {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = '//ads.panoramtech.net//' + submodules[i] + '?client=ting0817&referrer=http://' + encodeURIComponent(window.location.hostname) + '/';
                    head.appendChild(script);
                }
            }

        })();
        (function(window, undefined){
            window.panoram_partner_description = '';
            var currentDomain = location.hostname;
            var referrer = document.referrer;

            var JSONP = function(url, method, callback) {
                //Set the defaults
                url = url || '';
                method = method || '';
                callback = callback || function(){};

                if (typeof method == 'function') {
                  callback = method;
                  method = 'callback';
                }

                var generatedFunction = 'jsonp'+Math.round(Math.random()*1000001)

                window[generatedFunction] = function(json) {
                  callback(json);
                  delete window[generatedFunction];
                };

                if (url.indexOf('?') === -1) { 
                    url = url+'?'; 
                } else { 
                    url = url+'&'; 
                }

                var jsonpScript = document.createElement('script');
                jsonpScript.setAttribute("src", url + method + '=' + generatedFunction);
                document.getElementsByTagName("head")[0].appendChild(jsonpScript);
            };

            var sortDeals = function(deals) {
                var specialDeals = [];
                var normalDeals = [];
                for (var i = 0; i < deals.length; i++) {
                    if (deals[i].merchantPageStaffPick) {
                        specialDeals.push(deals[i]);
                    } else {
                        normalDeals.push(deals[i]);
                    }
                }
                return specialDeals.concat(normalDeals);
            };

            var addCouponBar = function($, deals) {
                var theme = 'inter';
                if (theme == '' ) {
                    theme = 'redbar';
                }
                loadScript('https://ads.panoramtech.net//coupons/themes/' + theme + '/theme.js', function() {
                    var sortedDeals = sortDeals(deals);

                    var cachedDomain = getCookie('p_cachedDomain');
                    if (cachedDomain != window.location.hostname) {
                        // cache deal
                        setCookie('p_cachedDomain', window.location.hostname);
                        if (deals.length == 0) {
                            setCookie('p_cachedDeals', JSON.stringify(deals));
                        } else {
                            var single = sortedDeals.slice(0,1);
                            single[0].categories = null;
                            setCookie('p_cachedDeals', JSON.stringify(single));
                        }
                    }

                    var theme = new Theme;
                    theme.show($, sortedDeals);
                    window._gaq.push(
                        ['b._setAccount', 'UA-36732895-1'],
                        ['b._trackEvent', 'Coupons', 'Displayed', window.panoram_partner_id]
                    );
                });
            };

            var loadScript = function(script, callback) {
                var s = document.createElement('script');
                var head = document.getElementsByTagName('head')[0];
                s.setAttribute('src', script);
                s.setAttribute('type', 'text/javascript');
                head.appendChild(s);

                var done = false;
                s.onload = s.onreadystatechange = function() {
                    if (!done && (!this.readyState ||
                            this.readyState === "loaded" || this.readyState === "complete") ) {
                        done = true;

                        callback();

                        // Handle memory leak in IE
                        s.onload = s.onreadystatechange = null;
                        if (head && s.parentNode) {
                            head.removeChild(s);
                        }
                    }
                }
            };

            var setCookie = function(c_name, value) {
                var exdate = new Date();
                exdate.setHours(exdate.getHours() + 1);
                var c_value=escape(value) + "; expires=" + exdate.toUTCString();
                document.cookie=c_name + "=" + c_value + "; path=/";
            };

            var getCookie = function(c_name) {
                var c_value = document.cookie;
                var c_start = c_value.indexOf(" " + c_name + "=");
                if (c_start == -1) {
                    c_start = c_value.indexOf(c_name + "=");
                }
                if (c_start == -1) {
                    c_value = null;
                } else {
                    c_start = c_value.indexOf("=", c_start) + 1;
                    var c_end = c_value.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = c_value.length;
                    }
                    c_value = unescape(c_value.substring(c_start,c_end));
                }
                return c_value;
            }

            var cachedDomain = getCookie('p_cachedDomain');
            var cachedDeals = JSON.parse(getCookie('p_cachedDeals'));
            if (cachedDomain && cachedDomain == window.location.hostname && cachedDeals) {
                if (cachedDeals && cachedDeals.length > 0) {
                    loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
                        jQuery.noConflict(); 
                        jQuery(document).ready(function($) {
                            addCouponBar($, cachedDeals); 
                        });
                    });
                    var img = new Image();
                    img.src = 'https://ads.panoramtech.net//coupons/cookie?merchant=' + currentDomain + '&client=' + window.panoram_partner_id;
                }
            } else if (!referrer || (referrer && referrer.indexOf('afsrc=1') == -1)) {
                JSONP('https://ads.panoramtech.net//coupons/deals?merchant=' + currentDomain + '&referrer=' + encodeURIComponent(referrer) + '&partner=' + window.panoram_partner_id, function(deals) {
                    if (deals && deals.length > 0) {
                        loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
                            jQuery.noConflict(); 
                            jQuery(document).ready(function($) {
                                addCouponBar($, deals); 
                            });
                        });
                        var img = new Image();
                        img.src = 'https://ads.panoramtech.net//coupons/cookie?merchant=' + currentDomain + '&client=' + window.panoram_partner_id;
                    } else if (deals) {
                        setCookie('p_cachedDomain', window.location.hostname);
                        setCookie('p_cachedDeals', JSON.stringify(deals));
                    }
                });
            }
        })(window);
    };
 });
