!function(){var a=9e5,b=864e5,c="chaordic-apikey",d="chaordic-debug",e=function(){return(new Date).getTime()},f=Array.prototype,g=function(){function a(a,b){var c=f.indexOf(a.charAt(b));if(-1===c)throw"Cannot decode";return c}function b(b){var c,d,f=0,g=b.length,h=[];b=String(b);if(0===g)return b;if(g%4!==0)throw"Cannot decode";if(b.charAt(g-1)===e){f=1;b.charAt(g-2)===e&&(f=2);g-=4}for(c=0;g>c;c+=4){d=a(b,c)<<18|a(b,c+1)<<12|a(b,c+2)<<6|a(b,c+3);h.push(String.fromCharCode(d>>16,d>>8&255,255&d))}switch(f){case 1:d=a(b,c)<<18|a(b,c+1)<<12|a(b,c+2)<<6;h.push(String.fromCharCode(d>>16,d>>8&255));break;case 2:d=a(b,c)<<18|a(b,c+1)<<12;h.push(String.fromCharCode(d>>16))}return h.join("")}function c(a,b){var c=a.charCodeAt(b);if(c>255)throw"INVALID_CHARACTER_ERR: DOM Exception 5";return c}function d(a){if(1!==arguments.length)throw"SyntaxError: exactly one argument required";a=String(a);var b,d,g=[],h=a.length-a.length%3;if(0===a.length)return a;for(b=0;h>b;b+=3){d=c(a,b)<<16|c(a,b+1)<<8|c(a,b+2);g.push(f.charAt(d>>18));g.push(f.charAt(d>>12&63));g.push(f.charAt(d>>6&63));g.push(f.charAt(63&d))}switch(a.length-h){case 1:d=c(a,b)<<16;g.push(f.charAt(d>>18)+f.charAt(d>>12&63)+e+e);break;case 2:d=c(a,b)<<16|c(a,b+1)<<8;g.push(f.charAt(d>>18)+f.charAt(d>>12&63)+f.charAt(d>>6&63)+e)}return g.join("")}var e="=",f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return{d:b,e:d}}(),h=function(){"undefined"==typeof chaordic&&(chaordic=[]);if("[object Array]"===Object.prototype.toString.call(chaordic))chaordic=function(a){return{Config:{},lib:{},push:function(){return f.push.apply(a,f.slice.call(arguments))},callbacks:function(){return f.slice.call(a)},loaderRunCount:0}}(chaordic);else{chaordic.Config||(chaordic.Config={});chaordic.lib||(chaordic.lib={});chaordic.loaderRunCount||(chaordic.loaderRunCount=0)}chaordic.initializedAt=e()},i=function(a,b){for(var c,d=document.getElementsByTagName("script"),e=d.length-1;e>-1;){c=d[e];if(c.getAttribute("data-apikey")&&/loader\.js/.test(c.src)){a(c);return}e-=1}b=(b||0)+1;if(b>10)throw new Error("[loader.js] Unable to find loader.js script");setTimeout(function(){i(a,b)},500)},j=function(a){a+="=";for(var b,c=document.cookie.split(";"),d=0,e=c.length;e>d;){b=c[d];for(;" "===b.charAt(0);)b=b.substring(1,b.length);if(0===b.indexOf(a))return decodeURIComponent(b.substring(a.length,b.length));d+=1}return null},k=function(a,b){var c=a+"="+encodeURIComponent(b)+"; path=/";document.cookie=c},l=function(a){var b=j(c);b?a.setAttribute("data-apikey",b):b=a.getAttribute("data-apikey");return b},m=function(){chaordic.initialize=function(){chaordic.last_initialize_args=f.slice.call(arguments)};chaordic.setActiveFoo=function(a){k(c,a)};chaordic.setDebug=function(a){k(d,a?"true":"")}},n=function(a){i(function(b){var c=String(b.src).split("?")[0].replace(/^(.+\:)?\/\/(.+)/,"$2"),d=c.split("/"),e=chaordic.Config;e.API_KEY=l(b);e.MODULE=b.getAttribute("data-module");e.PROTOCOL=location.protocol+"//";d.pop();e.STATIC_HOST=d.shift();e.STATIC_CONTEXT="/"+d.join("/")+"/";e.ONSITE_CONTEXT=e.STATIC_CONTEXT.replace(/(.*)\/[^\/]+\/$/,"$1/onsite/");a()})},o=function(a){var b=document.documentElement,c=document.createElement("script");c.setAttribute("charset","UTF-8");c.src=a;c.async=!0;b.insertBefore(c,b.firstChild)},p=function(){var a="test_"+e();try{localStorage.setItem(a,a);localStorage.removeItem(a);return localStorage}catch(b){return null}},q=function(a,b){var c,d="GET";a+="?t="+e();if("undefined"!=typeof XDomainRequest){c=new XDomainRequest;c.open(d,a);c.onprogress=function(){}}else{c=new XMLHttpRequest;c.open(d,a,!0)}c.onload=function(){b(c.responseText)};c.onerror=function(){b(null)};c.send()},r=function(c,d){var f,g,h,i,j=p(),k=function(a){setTimeout(function(){d(a)},0)};if(null===j||!window.JSON)return k(null);f="chaordic_script_cache_"+c;g=j.getItem(f);if(g){i=JSON.parse(g);h=e()<i.ts+b}if(h){k(i.data);i.ts+a<e()&&q(c,function(a){a&&j.setItem(f,JSON.stringify({data:a,ts:e()}))})}else q(c,function(a){if(null!==a){k(a);j.setItem(f,JSON.stringify({data:a,ts:e()}))}else k(null)})},s=function(b){"true"===j(d)?o(b):r(b,function(c){null!==c?window.execScript?window.execScript(c):window.eval.call(window,c):o(b+"?t="+Math.round(e()/a))})},t=function(){var a=chaordic.Config;s(a.PROTOCOL+a.STATIC_HOST+a.STATIC_CONTEXT+a.API_KEY+"/current.js")},u=function(){var a=chaordic.Config;s(a.PROTOCOL+a.STATIC_HOST+a.STATIC_CONTEXT+a.API_KEY+"/chaordic-vtex.js")},v=function(){var a=chaordic.Config;s(a.PROTOCOL+a.STATIC_HOST+"/search/generated/"+a.API_KEY+"/loader.js")},w=function(){h();if(0===chaordic.loaderRunCount){m();n(function(){var a=chaordic.Config,b={};b[g.d("Y2VudGF1cm8tdjU=")]=!0;b[g.d("YmVsZXphbmF3ZWI=")]=!0;b.hasOwnProperty(a.API_KEY)||v();a.MODULE===g.d("dnRleA==")?u():t()})}chaordic.loaderRunCount+=1};w()}();