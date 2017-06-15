
var visitor = new Visitor("netshoes"); // same as s.visitorNamespace
visitor.trackingServer = "netshoes.d1.sc.omtrdc.net"; // same as s.trackingServer

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

Adobe Visitor API for JavaScript version: 1.3
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(k,s){if(!k)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.3";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._c="Visitor";a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;var o=h.document,i=h.P;i||(i=null);var j=h.Q;j||(j=!0);var p=h.O;p||(p=!1);a.D=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.n=function(a){var c="0123456789",b="",e="",f,g=8,h=10,i=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=
Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*h),b+=c.substring(f,f+1),h=0==a&&9==f?3:10,f=Math.floor(Math.random()*i),e+=c.substring(f,f+1),i=0==a&&9==f?3:10;return b+e};a.J=function(){var a;!a&&h.location&&(a=h.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tt,tv,tw,tz,ua,ug,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+",")&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+o.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=b.getYear(),
b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(o.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.m?" domain="+a.m+";":""),a.cookieRead(d)==c):0};a.d=i;a.z=function(a,c){try{"function"==typeof a?a.apply(h,c):a[1].apply(a[0],c)}catch(b){}};a.M=function(d,c){c&&(a.d==i&&(a.d={}),void 0==a.d[d]&&(a.d[d]=[]),a.d[d].push(c))};a.l=function(d,c){if(a.d!=i){var b=a.d[d];if(b)for(;0<b.length;)a.z(b.shift(),c)}};a.h=i;a.K=function(d,c,b){!c&&
b&&b();var e=o.getElementsByTagName("HEAD")[0],f=o.createElement("SCRIPT");f.type="text/javascript";f.setAttribute("async","async");f.src=c;e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f);b&&(a.h==i&&(a.h={}),a.h[d]=setTimeout(b,a.loadTimeout))};a.I=function(d){a.h!=i&&a.h[d]&&(clearTimeout(a.h[d]),a.h[d]=0)};a.F=p;a.G=p;a.isAllowed=function(){if(!a.F&&(a.F=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.G=j;return a.G};a.a=i;a.c=i;var v=a.W;v||(v="MC");var l=a.Y;l||
(l="MCMID");var w=a.X;w||(w="MCCIDH");var t=a.U;t||(t="A");var m=a.R;m||(m="MCAID");var u=a.V;u||(u="AAM");var q=a.T;q||(q="MCAAMLH");var n=a.S;n||(n="MCAAMB");var r=a.Z;r||(r="NONE");a.u=0;a.C=function(){if(!a.u){var d=a.version;a.customerIDMappingServer&&(d+="|"+a.customerIDMappingServer);a.customerIDMappingServerSecure&&(d+="|"+a.customerIDMappingServerSecure);a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);if(a.audienceManagerCustomerIDDPIDs)for(var c in a.audienceManagerCustomerIDDPIDs)!Object.prototype[c]&&
a.audienceManagerCustomerIDDPIDs[c]&&(d+=c+"="+a.audienceManagerCustomerIDDPIDs[c]);a.u=a.D(d)}return a.u};a.H=p;a.j=function(){if(!a.H){a.H=j;var d=a.C(),c=p,b=a.cookieRead(a.cookieName),e,f,g,h=new Date;a.a==i&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0])!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)e=b[d].split("-"),f=e[0],g=b[d+1],e=1<e.length?parseInt(e[1]):0,c&&(f==w&&(g=""),0<e&&(e=h.getTime()/1E3-60)),f&&g&&(a.g(f,g,1),0<e&&(a.a["expire"+
f]=e,h.getTime()>=1E3*e&&(a.c||(a.c={}),a.c[f]=j)))}if(!a.b(m)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.g(m,g))}};a.N=function(){var d=a.C(),c,b;for(c in a.a)!Object.prototype[c]&&a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=i&&(c||!a.c||!a.c[d])?a.a[d]:
i};a.g=function(d,c,b){a.a==i&&(a.a={});a.a[d]=c;b||a.N()};a.t=function(d,c){var b=new Date;b.setTime(b.getTime()+1E3*c);a.a==i&&(a.a={});a.a["expire"+d]=Math.floor(b.getTime()/1E3);0>c&&(a.c||(a.c={}),a.c[d]=j)};a.B=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=r)),!a||a!=r&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.I(d);a.f!=i&&(a.f[d]=p);if(d==v){var b=a.b(l);if(!b){b=
"object"==typeof c&&c.mid?c.mid:a.B(c);if(!b){if(a.q){a.getAnalyticsVisitorID(null,!1,!0);return}b=a.n()}a.g(l,b)}if(!b||b==r)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(u,c),a.q&&c.mid&&a.i(t,{id:c.id}));a.l(l,[b])}if(d==u&&"object"==typeof c){b=604800;void 0!=c.id_sync_ttl&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl));var e=a.b(q);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.t(q,b),a.g(q,e)));e||(e="");a.l(q,[e]);e=a.b(n);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),
a.t(n,b),a.g(n,e);e||(e="");a.l(n,[e])}if(d==t){b=a.b(m);b||((b=a.B(c))||(b=r),a.g(m,b));if(!b||b==r)b="";a.l(m,[b])}};a.f=i;a.o=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.j(),f=a.b(d),!f&&(d==l?g=v:d==q||d==n?g=u:d==m&&(g=t),g))){if(a.f==i||!a.f[g])a.f==i&&(a.f={}),a.f[g]=j,a.K(g,c,function(){if(!a.b(d)){var b="";d==l&&(b=a.n());a.i(g,b)}});a.M(d,b);return""}if((d==l||d==m)&&f==r)f="",e=j;b&&e&&a.z(b,[f]);return f};a._setMarketingCloudFields=function(d){a.j();a.i(v,d)};a.setMarketingCloudVisitorID=
function(d){a._setMarketingCloudFields(d)};a.q=p;a.getMarketingCloudVisitorID=function(d,c){return a.isAllowed()?(a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.q=j),a.o(l,a.r("_setMarketingCloudFields"),d,c)):""};a._mapCustomerIDsDone=function(d){d&&"success"==d.status&&a.g(w,a.s)};a.L=function(){a._mapCustomerIDsDone({status:"success"})};a.e={};a.A=p;a.s="";a.setCustomerIDs=function(d){a.e=d;if(a.isAllowed()){a.j();var d=a.b(w),c="",b,e;d||(d=0);for(b in a.e)e=a.e[b],
!Object.prototype[b]&&e&&(c+=(c?"|":"")+b+"|"+e);a.s=a.D(c);a.s!=d&&(a.A=j,a.L())}};a.getCustomerIDs=function(){return a.e};a._setAnalyticsFields=function(d){a.j();a.i(t,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):
a.trackingServerSecure&&(f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:""));return a.o(b?l:m,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.j();a.i(u,d)};a.r=function(d){var c=a.audienceManagerServer,b="",e=a.b(l),f=a.b(n,j),g="",h,i;a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){if(a.e&&
a.audienceManagerCustomerIDDPIDs)for(h in a.e)Object.prototype[h]||(b=a.e[h],i=a.audienceManagerCustomerIDDPIDs[h],b&&i&&(g+=(g?"%01":"&d_cid=")+i+"%01"+encodeURIComponent(b)));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_rtbd=json&d_ver=2"+(!e&&a.q?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&d_mid="+e:"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+"&d_cb=s_c_il%5B"+a._in+"%5D."+d}return b};a.getAudienceManagerLocationHint=function(d,
c){return a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})?a.o(q,a.r(),d,c):""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.r();a.A&&a.t(n,-1);return a.o(n,b,d,c)}return""};a.k="";a.p={};a.v="";a.w={};a.getSupplementalDataID=function(d,c){!a.k&&!c&&(a.k=a.n(1));var b=a.k;a.v&&!a.w[d]?(b=a.v,a.w[d]=j):b&&(a.p[d]&&(a.v=a.k,a.w=a.p,a.k=b=!c?a.n(1):"",a.p={}),b&&
(a.p[d]=j));return b};0>k.indexOf("@")&&(k+="@AdobeOrg");a.marketingCloudOrgID=k;a.namespace=s;a.cookieName="AMCV_"+k;a.m=a.J();a.m==h.location.hostname&&(a.m="");if(s){var x="AMCV_"+s,z=a.cookieRead(a.cookieName),y=a.cookieRead(x);!z&&y&&(a.cookieWrite(a.cookieName,y,1),a.cookieWrite(x,"",-60))}a.loadSSL=0<=h.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";a.customerIDMappingServer="map.adobecrs.com"}
Visitor.getInstance=function(k,s){var a,h=window.s_c_il,o;0>k.indexOf("@")&&(k+="@AdobeOrg");if(h)for(o=0;o<h.length;o++)if((a=h[o])&&"Visitor"==a._c&&(a.marketingCloudOrgID==k||s&&a.namespace==s))return a;return new Visitor(k,s)};


s = new AppMeasurement()
/************************ ADDITIONAL FEATURES ************************
     Plugins
*/
/*******************************************************/
var s_account
, domainP;

domainP = "3";

if (document.URL && document.URL.indexOf('netshoes.com') > 0){
	s_account="nsns-global,netshoesprod";
} else if (document.URL && document.URL.indexOf('ns2online.com') > 0) {
	s_account="netshoesdev";
} else if (document.URL && document.URL.indexOf('lojagloboesporte.com') > 0) {
	s_account="nsns-global,nsns-ge-prod";
	domainP = "2";
} else if (document.URL && document.URL.indexOf('zattini.com') > 0) {
	s_account="nszattini,nsns-global";

} else {
	s_account="ns-ambientedeteste";
}
/*******************************************************/

var s=s_gi(s_account)
s.visitorNamespace = "netshoes"

/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
s.visitor = Visitor.getInstance("netshoes") // same as s.VisitorNamespace
/* You may add or alter any code config here. */
/* Conversion Config */
s.currencyCode="BRL"
s.cookieDomainPeriods=domainP
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,netshoes.com,netshoes.com.br,netshoes.net,objectedge.com,fbiz.com.br,zattini.com.br,zattini.com"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"


//time parting config - Brazil
s._tpDST = {
2013:'2/16,10/19',
2014:'2/15,10/18',
2015:'2/14,10/17',
2016:'2/20,10/15',
2017:'2/18,10/21',
2018:'2/17,10/20',
2019:'2/16,10/19'}


/* uncomment below to use doPlugins */
s.usePlugins=true
function s_doPlugins(s) {


		/* External Campaigns */
	if (s.Util.getQueryParam('utm_campaign')){
			s.campaign = s.Util.getQueryParam('utm_campaign')
		}
		if (!s.campaign && s.Util.getQueryParam('cm_mmc')){
			s.campaign = s.Util.getQueryParam('cm_mmc')
		}

			/* Internal Campaign Clicks */
		var sc_int_cmp = s.Util.getQueryParam('mi');

		if (sc_int_cmp && s.linkTrackEvents=='None'){

			s.eVar11 = sc_int_cmp;

			s.events=s.apl(s.events,'event5',',',2);
			s.products=s.apl(s.products,";m:"+sc_int_cmp+";;;event5=1",',',2);
		}

			/*cartridges clicks*/
		var sc_crtdg_cmp = s.Util.getQueryParam('lid');
		var sc_crtdg_pos = s.Util.getQueryParam('ppc');

		if (sc_crtdg_cmp && sc_crtdg_pos && s.linkTrackEvents=='None'){

			s.eVar44 = sc_crtdg_cmp;

			s.events=s.apl(s.events,'event18',',',2);
			s.products=s.apl(s.products,";c:"+s.eVar44+";;;event18=1",',',2);

			if (sc_crtdg_cmp.length>1){
				s.events=s.apl(s.events,'event34',',',2);
				s.products=s.apl(s.products,";cp:"+s.eVar31+";;;event41=1;eVar46="+sc_crtdg_pos,',',2);
			}

		}
					/* Custom Page View, Page Name Copy, URL, Previous Page */
		s.events=s.apl(s.events,'event1',',',2);

		if (s.pageName && sc_int_cmp){s.eVar1 = "int: " + sc_int_cmp + ": " + s.pageName;}
		else if (s.pageName && s.campaign){s.eVar1 = "ext: " + s.campaign + ": " + s.pageName;}
		else if (s.pageName) s.eVar1 = s.pageName;
		var url = document.location.href;
		s.eVar2 = url.substring(url.indexOf('/',url.indexOf('//')+2));
		s.eVar4 = s.getPreviousValue(s.pageName,'gpv_v4','');

					// URL sem parametros
		s.eVar42 = url.substring(url.indexOf('/',url.indexOf('//')+2)).split("?").shift();


	// Hostname


	if (document.URL && document.URL.indexOf('netshoes.com') > 0){
	s.eVar54 = "m.netshoes.com.br";
     }

	 if (document.URL && document.URL.indexOf('zattini.com') > 0) {
	s.eVar54 = "m.zattini.com.br";
     }

	/* Search Origination */
		if (s.events)
			if (s.events.match("event6") || s.events.match("event7")) s.eVar14 = "D=v4";
			/* PurchaseID copy */
		if (s.purchaseID) s.eVar21 = s.purchaseID;

	/* Product Finding Method */
		s.eVar17 = "browse";
		if(s.campaign) {
			s.eVar17 = "midia externa";
		}
		else if (sc_int_cmp) {
			if (sc_int_cmp.indexOf('mntop') > 0) {
				s.eVar17 = "menu superior";
			}else if (sc_int_cmp.indexOf('mnleft') > 0) {
				s.eVar17 = "menu lateral";
			}else{
				s.eVar17 = "midia interna";
			}
		}
		else if (s.Util.getQueryParam('fc') && s.Util.getQueryParam('fc').indexOf('pdp') > 0) {
			s.eVar17 = "pagina de produto";
		}

		if (s.events)
			if (s.events.match("event6") || s.events.match("event7"))s.eVar17 = "busca interna"
				/* Error Tracking */
		if (s.pageType){
			s.prop18 = document.location.href;
			s.prop19 = "D=v4";
		}
			/* New/Repeat */
		s.prop20 = s.getNewRepeat();
		s.eVar70 = s.prop20;

					/* Visit Number */
		s.prop21 = s.getVisitNum(365);
		s.eVar71 = s.prop21;

					/* Days Since Last Visit */
		s.prop22=s.getDaysSinceLastVisit('s_lv');
		s.eVar69 = s.prop22;


			/* Time Parting */
		s.eVar32 = s.getTimeParting('s','-3'); /*Nao funciona*/


			/* Code Version */
		s.eVar75="v2.0";
	/* Copy eVar values into props */
		if (s.eVar1) s.prop1 = "D=v1"; if (s.eVar2) s.prop2 = "D=v2"; if (s.eVar3) s.prop3 = "D=v3";
		if (s.eVar4) s.prop4 = "D=v4"; if (s.eVar5) s.prop5 = "D=v5"; if (s.eVar6) s.prop6 = "D=v6";
		if (s.eVar7) s.prop7 = "D=v7"; if (s.eVar8) s.prop8 = "D=v8"; if (s.eVar9) s.prop9 = "D=v9";
		if (s.eVar10) s.prop10 = "D=v10"; if (s.eVar11) s.prop11 = "D=v11"; if (s.eVar12) s.prop12 = "D=v12";
		if (s.eVar13) s.prop13 = "D=v13"; if (s.eVar14) s.prop14 = "D=v14"; if (s.eVar15) s.prop15 = "D=v15";
		if (s.eVar16) s.prop16 = "D=v16"; if (s.eVar28) s.prop17 = "D=v28"; if (s.eVar52) s.prop33 = "D=v52";
		if (s.eVar56) s.prop36 = "D=v56"; if (s.eVar57) s.prop37 = "D=v57";

		try {if (s.eVar31) s.prop32 = s.eVar31.substring(0,8);} catch(e){}

		// D2167
		s.prop39 = "D=v42";

	/*internal campaign tracking on internal pages*/
	if (sc_ic_internal_track && sc_ic_internal_track.length > 0)
	{
		s.events = (s.events ? s.events+"," : "") + "event4";
		s.products = (s.products ? s.products+"," : "") + sc_ic_internal_track.join(',');
		sc_ic_internal_track = null;
	}
		/*cartridges tracking*/
	if (sc_ic_cartridge_track && sc_ic_cartridge_track.length > 0)
	{
		s.events = (s.events ? s.events+"," : "") + "event17";
		s.products = (s.products ? s.products+"," : "") + sc_ic_cartridge_track.join(',');

		s.list1 = sc_ic_cartridge_evar_track.join(',');
		s.eVar43 = sc_ic_cartridge_evar_track.join('~');

		sc_ic_cartridge_track = null;
	}

		/*products on cartridges tracking*/
	if (sc_ic_enable_crtgprd_tracking === true && sc_ic_cartridge_products_track && sc_ic_cartridge_products_track.length > 0)
	{
		s.events = (s.events ? s.events+"," : "") + "event33";
		s.products = (s.products ? s.products+"," : "") + sc_ic_cartridge_products_track.join(',');
		sc_ic_cartridge_products_track = null;
	}

	/*disabling plugins variable to save server call length*/
	s.plugins = '';


		/* lower case all variables if not already */
		s.manageVars("s.lowercaseVars");

	/* Page URL and dynamic add of segmentation variables for s.tl() */
	if(s.linkTrackVars=='None') s.linkTrackVars="eVar1";
	else s.linkTrackVars=s.linkTrackVars+",eVar1";


		/* Page URL and dynamic add of segmentation variables for s.tl() */
	if(s.linkTrackVars=='None') s.linkTrackVars="eVar1";
	else s.linkTrackVars=s.linkTrackVars+",eVar1";

	/* Cross Visiting Participation
	/*External Campaign Stack*/
	var isIE8 = /MSIE\s8/.test(navigator.userAgent);
	if (s.campaign){
		var cExtCamp = isIE8 ? "5" : "10";
		s.eVar62 = s.crossVisitParticipation(s.campaign,'s_ev62','90',cExtCamp,'>','purchase',0);
	}
	/*Internal Campaign Stack*/
	if (sc_int_cmp){
		var cIntCamp = isIE8 ? "5" : "10";
		s.eVar63 = s.crossVisitParticipation(sc_int_cmp,'s_ev63','30',cIntCamp,'>','purchase',0);
	}
	/*Product Order*/
	if (s.eVar31){
		var cSKU = "25";
		s.eVar26 = s.crossVisitParticipation(s.eVar31,'s_ev26','90',cSKU,'>','purchase',0);
	}

	/* Audience Manager */
	if(s.eVar18 && typeof nsDil != 'undefined'){

		nsDil.api.aamIdSync({
			dpid: '815',
			dpuuid: s.eVar18,
			minutesToLive: 20160
		});
	}
}

s.doPlugins=s_doPlugins


/************************** Custom Functions *************************/

var sc_ic_track = [];
var sc_ic_internal_track = [];
var sc_ic_cartridge_track = [];
var sc_ic_cartridge_evar_track = [];
var sc_ic_cartridge_products_track = [];
var sc_ic_enable_crtgprd_tracking = true;

function sc_ICTracking_AddCartridge(cname, cproducts) {

	sc_ic_cartridge_evar_track.push(cname);
	sc_ic_cartridge_track.push(";c:" + cname + ";;;event17=1");

	if (arguments.length == 2){

		cproducts = cproducts.split(',');
		for (var i=0;i<cproducts.length;i++)
		{
			sc_ic_cartridge_products_track.push(";cp:" + cproducts[i] + ";;;event33=1;eVar45="+cname);
		}
	}
}

function sc_ICTracking_SendImpression(campaign) {
    sc_ic_internal_track.push(";m:" + campaign + ";;;event4=1");
}

function sc_ICTracking_AddImpression(campaign) {
    sc_ic_track.push(";m:" + campaign + ";;;event4=1");
}

function sc_ICTracking_SendValues() {

    s.events = 'event4';
    s.products = sc_ic_track.join(',');
    s.linkTrackVars = 'events,products';
    s.linkTrackEvents = 'event4';
    s.tl(true, 'o', "ic impression hit");
    s.events = s.products = "";
    s.linkTrackVars = s.linkTrackEvents = "None";
}

function createProdOrder(newProd){
	s.c_w('prodOrder',newProd,0);
}

function updateProdOrder (newProd){
	var currVal = s.c_r('prodOrder');
	var newVal = currVal + '|' +newProd;
	s.c_w('prodOrder',newVal,0);
}



/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.trackingServer="netshoes.d1.sc.omtrdc.net"
s.trackingServerSecure="netshoes.d1.sc.omtrdc.net"

/* You may insert any plugins you wish to use here.                 */

/*Plug-in: crossVisitParticipation v1.7 - stacks values from
specified variable in cookie and returns value
 */
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * Utility Functions: apl, p_c, p_gh, split, replace, join
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Plugin: getQueryParam 2.4
 */
s.getQueryParam=new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u","h",""
+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return''");

/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");


/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
 * Plugin: getValOnce_v1.1
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

 /*
   * Plugin: getVisitNum - version 3.0
   */
   s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");

/*
 * Utility manageVars v1.4 - clear variable values (requires split 1.5)
 */
s.manageVars=new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");
s.clearVars=new Function("t","var s=this;s[t]='';");
s.lowercaseVars=new Function("t",""
+"var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index"
+"Of('D=')!=0){s[t]=s[t].toLowerCase();}}");

/*
 * Plugin: setupLinkTrack 2.0.3 - return links for HBX-based link
 *         tracking in SiteCatalyst (requires s.split and s.apl)
 */
s.setupLinkTrack=new Function("vl","c",""
+"var s=this;var l=s.d.links,cv,cva,vla,h,i,l,t,b,o,y,n,oc,d='';cv=s."
+"c_r(c);if(vl&&cv!=''){cva=s.split(cv,'^^');vla=s.split(vl,',');for("
+"x in vla)s._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}s.c_w(c,'',0);if(!s.e"
+"o&&!s.lnk)return '';o=s.eo?s.eo:s.lnk;y=s.ot(o);n=s.oid(o);if(s.eo&"
+"&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement"
+":o.parentNode;if(!o)return '';y=s.ot(o);if(y=='BODY') return '';n=s"
+".oid(o);}for(i=0;i<4;i++){var ltp=setTimeout(function(){},10);if(o."
+"tagName)if(o.tagName.toLowerCase()!='a')if(o.tagName.toLowerC"
+"ase()!='area')o=o.parentElement;}}b=s._LN(o);o.lid=b[0];o.lpos=b[1];"
+"if(s.hbx_lt&&s.hbx_lt!='manual'){if((o.tagName&&s._TL(o.tagName)=='"
+"area')){if(!s._IL(o.lid)){if(o.parentNode){if(o.parentNode.name)o.l"
+"id=o.parentNode.name;else o.lid=o.parentNode.id}}if(!s._IL(o.lpos))"
+"o.lpos=o.coords}else{if(s._IL(o.lid)<1)o.lid=s._LS(o.lid=o.text?o.t"
+"ext:o.innerText?o.innerText:'');if(!s._IL(o.lid)||s._II(s._TL(o.lid"
+"),'<img')>-1){h=''+o.innerHTML;bu=s._TL(h);i=s._II(bu,'<img');if(bu"
+"&&i>-1){eval(\"__f=/ src\s*=\s*[\'\\\"]?([^\'\\\" ]+)[\'\\\"]?/i\")"
+";__f.exec(h);if(RegExp.$1)h=RegExp.$1}o.lid=h}}}h=o.href?o.href:'';"
+"i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l"
+"=s.linkName?s.linkName:s._hbxln(h);t=s.linkType?s.linkType.toLowerC"
+"ase():s.lt(h);oc=o.onclick?''+o.onclick:'';cv=s.pageName+'^^'+o.lid"
+"+'^^'+s.pageName+' | '+(o.lid=o.lid?o.lid:'no &lid')+'^^'+o.lpos;if"
+"(t&&(h||l)){cva=s.split(cv,'^^');vla=s.split(vl,',');for(x in vla)s"
+"._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}else if(!t&&oc.indexOf('.tl(')<"
+"0){s.c_w(c,cv,0);}else return ''");
s._IL=new Function("a","var s=this;return a!='undefined'?a.length:0");
s._II=new Function("a","b","c","var s=this;return a.indexOf(b,c?c:0)"
);
s._IS=new Function("a","b","c",""
+"var s=this;return b>s._IL(a)?'':a.substring(b,c!=null?c:s._IL(a))");
s._LN=new Function("a","b","c","d",""
+"var s=this;b=a.href;b+=a.name?a.name:'';c=s._LVP(b,'lid');d=s._LVP("
+"b,'lpos');r"
+"eturn[c,d]");
s._LVP=new Function("a","b","c","d","e",""
+"var s=this;c=s._II(a,'&'+b+'=');c=c<0?s._II(a,'?'+b+'='):c;if(c>-1)"
+"{d=s._II(a,'&',c+s._IL(b)+2);e=s._IS(a,c+s._IL(b)+2,d>-1?d:s._IL(a)"
+");return e}return ''");
s._LS=new Function("a",""
+"var s=this,b,c=100,d,e,f,g;b=(s._IL(a)>c)?escape(s._IS(a,0,c)):esca"
+"pe(a);b=s._LSP(b,'%0A','%20');b=s._LSP(b,'%0D','%20');b=s._LSP(b,'%"
+"09','%20');c=s._IP(b,'%20');d=s._NA();e=0;for(f=0;f<s._IL(c);f++){g"
+"=s._RP(c[f],'%20','');if(s._IL(g)>0){d[e++]=g}}b=d.join('%20');retu"
+"rn unescape(b)");
s._LSP=new Function("a","b","c","d","var s=this;d=s._IP(a,b);return d"
+".join(c)");
s._IP=new Function("a","b","var s=this;return a.split(b)");
s._RP=new Function("a","b","c","d",""
+"var s=this;d=s._II(a,b);if(d>-1){a=s._RP(s._IS(a,0,d)+','+s._IS(a,d"
+"+s._IL(b),s._IL(a)),b,c)}return a");
s._TL=new Function("a","var s=this;return a.toLowerCase()");
s._NA=new Function("a","var s=this;return new Array(a?a:0)");
s._hbxm=new Function("m","var s=this;return (''+m).indexOf('{')<0");
s._hbxln=new Function("h","var s=this,n=s.linkNames;if(n)return s.pt("
+"n,',','lnf',h);return ''");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * s.join: 1.0 - Joins an array into a string
 */

s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/****************************** MODULES *****************************/

// copy and paste implementation modules (Media, Integrate) here
// AppMeasurement_Module_Media.js - Media Module, included in AppMeasurement zip
// AppMeasurement_Module_Integrate.js - Integrate Module, included in AppMeasurement zip


/* ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============


/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 1.3.2
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function AppMeasurement(){var s=this;s.version="1.3.2";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var k=w.ob;k||(k=null);var j=w,g,o;try{g=j.parent;for(o=j.location;g&&g.location&&o&&""+g.location!=""+o&&j.location&&""+g.location!=""+j.location&&g.location.host==o.host;)j=g,g=j.parent}catch(p){}s.Za=function(s){try{console.log(s)}catch(a){}};s.oa=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<
0)return s;return s.split(a).join(c)};s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.Qa=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.ha&&
!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.ha=c>0?b.substring(c):b}return s.ha};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.Qa(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&d!="NONE"&&((f=a!=
""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.D=[];s.C=function(b,a,c){if(s.ia)return 0;if(!s.maxDelay)s.maxDelay=250;var e=0,d=(new Date).getTime()+s.maxDelay,f=s.d.mb,i=["webkitvisibilitychange","visibilitychange"];if(!f)f=s.d.nb;
if(f&&f=="prerender"){if(!s.V){s.V=1;for(c=0;c<i.length;c++)s.d.addEventListener(i[c],function(){var b=s.d.mb;if(!b)b=s.d.nb;if(b=="visible")s.V=0,s.delayReady()})}e=1;d=0}else c||s.r("_d")&&(e=1);e&&(s.D.push({m:b,a:a,t:d}),s.V||setTimeout(s.delayReady,s.maxDelay));return e};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.r("_d")&&(a=1);s.D.length>0;){c=s.D.shift();if(a&&!c.t&&c.t>b){s.D.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.ia=1;s[c.m].apply(s,c.a);s.ia=
0}};s.setAccount=s.sa=function(b){var a,c;if(!s.C("setAccount",arguments))if(s.account=b,s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.foreachVar=function(b,a){var c,e,d,f,i="";d=e="";if(s.lightProfileID)c=s.H,(i=s.lightTrackVars)&&(i=","+i+","+s.Y.join(",")+",");else{c=s.c;if(s.pe||s.linkType)if(i=s.linkTrackVars,e=s.linkTrackEvents,s.pe&&(d=s.pe.substring(0,1).toUpperCase()+
s.pe.substring(1),s[d]))i=s[d].lb,e=s[d].kb;i&&(i=","+i+","+s.A.join(",")+",");e&&i&&(i+=",events,")}a&&(a=","+a+",");for(e=0;e<c.length;e++)d=c[e],(f=s[d])&&(!i||i.indexOf(","+d+",")>=0)&&(!a||a.indexOf(","+d+",")>=0)&&b(d,f)};s.J=function(b,a,c,e,d){var f="",i,m,w,q,g=0;b=="contextData"&&(b="c");if(a){for(i in a)if(!Object.prototype[i]&&(!d||i.substring(0,d.length)==d)&&a[i]&&(!c||c.indexOf(","+(e?e+".":"")+i+",")>=0)){w=!1;if(g)for(m=0;m<g.length;m++)i.substring(0,g[m].length)==g[m]&&(w=!0);if(!w&&
(f==""&&(f+="&"+b+"."),m=a[i],d&&(i=i.substring(d.length)),i.length>0))if(w=i.indexOf("."),w>0)m=i.substring(0,w),w=(d?d:"")+m+".",g||(g=[]),g.push(w),f+=s.J(m,a,c,e,w);else if(typeof m=="boolean"&&(m=m?"true":"false"),m){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=i.substring(0,4),q=i.substring(4),i){case "transactionID":i="xact";break;case "channel":i="ch";break;case "campaign":i="v0";break;default:s.oa(q)&&(w=="prop"?i="c"+q:w=="eVar"?i="v"+q:w=="list"?i="l"+q:w=="hier"&&(i=
"h"+q,m=m.substring(0,255)))}f+="&"+s.escape(i)+"="+s.escape(m)}}f!=""&&(f+="&."+b)}return f};s.Sa=function(){var b="",a,c,e,d,f,i,m,w,g="",k="",j=c="";if(s.lightProfileID)a=s.H,(g=s.lightTrackVars)&&(g=","+g+","+s.Y.join(",")+",");else{a=s.c;if(s.pe||s.linkType)if(g=s.linkTrackVars,k=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))g=s[c].lb,k=s[c].kb;g&&(g=","+g+","+s.A.join(",")+",");k&&(k=","+k+",",g&&(g+=",events,"));s.events2&&(j+=(j!=""?",":"")+s.events2)}s.AudienceManagement&&
s.AudienceManagement.isReady()&&(b+=s.J("d",s.AudienceManagement.getEventCallConfigParams()));for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);i=d.substring(4);!f&&d=="events"&&j&&(f=j,j="");if(f&&(!g||g.indexOf(","+d+",")>=0)){switch(d){case "supplementalDataID":d="sdid";break;case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "marketingCloudVisitorID":d="mid";break;case "analyticsVisitorID":d="aid";break;case "audienceManagerLocationHint":d=
"aamlh";break;case "audienceManagerBlob":d="aamb";break;case "pageURL":d="g";if(f.length>255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d="vmf";!s.ssl&&s.visitorMigrationServer&&(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";
break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d="vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";break;case "cookiesEnabled":d="k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";
break;case "homepage":d="hp";break;case "plugins":d="p";break;case "events":j&&(f+=(f!=""?",":"")+j);if(k){i=f.split(",");f="";for(e=0;e<i.length;e++)m=i[e],w=m.indexOf("="),w>=0&&(m=m.substring(0,w)),w=m.indexOf(":"),w>=0&&(m=m.substring(0,w)),k.indexOf(","+m+",")>=0&&(f+=(f?",":"")+i[e])}break;case "events2":f="";break;case "contextData":b+=s.J("c",s[d],g,d);f="";break;case "lightProfileID":d="mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d=
"mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d="mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.J("mts",s[d],g,d));f="";break;default:s.oa(i)&&(e=="prop"?d="c"+i:e=="eVar"?d="v"+i:e=="list"?d="l"+i:e=="hier"&&(d="h"+i,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&(b+=s.g)}return b};s.v=function(s){var a=s.tagName;if(""+s.sb!="undefined"||""+s.eb!="undefined"&&(""+s.eb).toUpperCase()!=
"HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.ka=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,
c<0?0:c)+"/":"")+a;return a};s.F=function(b){var a=s.v(b),c,e,d="",f=0;if(a){c=b.protocol;e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.ka(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\r",""),"\n",""),"\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;else if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};
s.pb=function(b){for(var a=s.v(b),c=s.F(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:b.parentNode)a=s.v(b),c=s.F(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.bb=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,i;s.Z=1;if(!c)s.Z=0,c=s.j;if(c){b=s.v(c);for(a=s.F(c);c&&!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.v(c),a=s.F(c);if(!a||b=="BODY")c=0;if(c){var m=c.onclick?""+
c.onclick:"";if(m.indexOf(".tl(")>=0||m.indexOf(".trackLink(")>=0)c=0}}else s.Z=1;!d&&c&&(d=s.ka(c));d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var g=0,k=0,j;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){m=d.toLowerCase();f=m.indexOf("?");i=m.indexOf("#");f>=0?i>=0&&i<f&&(f=i):f=i;f>=0&&(m=m.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");for(i=0;i<f.length;i++)(j=f[i])&&m.substring(m.length-(j.length+1))=="."+j&&(e="d")}if(s.trackExternalLinks&&
!e&&(m=d.toLowerCase(),s.na(m))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),g=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(i=0;i<f.length;i++)j=f[i],m.indexOf(j)>=0&&(k=1);k?g&&(e="e"):g||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||s.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=
w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.Ta=function(){var b=s.Z,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=0);if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,i,w,g;d=0;if(f)for(i=
0;i<f.length;i++)w=f[i].split("="),e=s.unescape(w[0]).split(","),w=s.unescape(w[1]),a[w]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(w in a)if(!Object.prototype[w])for(i=0;i<e.length;i++){d&&(g=a[w].join(","),g==s.account&&(s.g+=(w.charAt(0)!="&"?"&":"")+w,a[w]=[],c=1));for(f=0;f<a[w].length;f++)g=a[w][f],g==e[i]&&(d&&(s.g+="&u="+s.escape(g)+(w.charAt(0)!="&"?"&":"")+w+"&u=0"),a[w].splice(f,1),c=1)}b||(c=1);if(c){d="";i=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),i=1);for(w in a)!Object.prototype[w]&&
i>0&&a[w].length>0&&(d+=(d?"&":"")+s.escape(a[w].join(","))+"="+s.escape(w),i--);s.cookieWrite("s_sq",d)}}}return b};s.Ua=function(){if(!s.jb){var b=new Date,a=j.location,c,e,d,f=d=e=c="",i="",w="",g="1.2",k=s.cookieWrite("s_cc","true",0)?"Y":"N",o="",p="",n=0;if(b.setUTCDate&&(g="1.3",n.toPrecision&&(g="1.5",c=[],c.forEach))){g="1.6";d=0;e={};try{d=new Iterator(e),d.next&&(g="1.7",c.reduce&&(g="1.8",g.trim&&(g="1.8.1",Date.parse&&(g="1.8.2",Object.create&&(g="1.8.5")))))}catch(r){}}c=screen.width+
"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;i=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;w=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;b=navigator.plugins;try{s.b.addBehavior("#default#homePage"),o=s.b.qb(a)?"Y":"N"}catch(t){}try{s.b.addBehavior("#default#clientCaps"),p=s.b.connectionType}catch(u){}if(b)for(;n<b.length&&n<30;){if(a=b[n].name)a=a.substring(0,100)+";",f.indexOf(a)<0&&(f+=a);n++}s.resolution=
c;s.colorDepth=e;s.javascriptVersion=g;s.javaEnabled=d;s.cookiesEnabled=k;s.browserWidth=i;s.browserHeight=w;s.connectionType=p;s.homepage=o;s.plugins=f;s.jb=1}};s.I={};s.loadModule=function(b,a){var c=s.I[b];if(!c){c=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{};s.I[b]=s[b]=c;c.Ba=function(){return c.Ea};c.Fa=function(a){if(c.Ea=a)s[b+"_onLoad"]=a,s.C(b+"_onLoad",[s,c],1)||a(s,c)};try{Object.defineProperty?Object.defineProperty(c,"onLoad",{get:c.Ba,set:c.Fa}):c._olc=1}catch(e){c._olc=
1}}a&&(s[b+"_onLoad"]=a,s.C(b+"_onLoad",[s,c],1)||a(s,c))};s.r=function(b){var a,c;for(a in s.I)if(!Object.prototype[a]&&(c=s.I[a])){if(c._olc&&c.onLoad)c._olc=0,c.onLoad(s,c);if(c[b]&&c[b]())return 1}return 0};s.Xa=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};
s.K=function(b,a){var c,e,d,f,w,g;for(c=0;c<2;c++){e=c>0?s.ea:s.c;for(d=0;d<e.length;d++)if(f=e[d],(w=b[f])||b["!"+f]){if(!a&&(f=="contextData"||f=="retrieveLightData")&&s[f])for(g in s[f])w[g]||(w[g]=s[f][g]);s[f]=w}}};s.wa=function(b,a){var c,e,d,f;for(c=0;c<2;c++){e=c>0?s.ea:s.c;for(d=0;d<e.length;d++)f=e[d],b[f]=s[f],!a&&!b[f]&&(b["!"+f]=1)}};s.Pa=function(s){var a,c,e,d,f,w=0,g,k="",j="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(g=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),
e=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),a=a.substring(0,c),d.indexOf("google")>=0?w=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(w=",p,ei,"),w&&g)))){if((s=g.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&w.indexOf(","+d.substring(0,c)+",")>=0?k+=(k?"&":"")+d:j+=(j?"&":"")+d;k&&j?g=k+"&"+j:j=""}c=253-(g.length-j.length)-a.length;s=a+(c>0?f.substring(0,c):
"")+"?"+g}return s};s.S=!1;s.O=!1;s.Da=function(b){s.marketingCloudVisitorID=b;s.O=!0;s.l()};s.P=!1;s.L=!1;s.ya=function(b){s.analyticsVisitorID=b;s.L=!0;s.l()};s.R=!1;s.N=!1;s.Aa=function(b){s.audienceManagerLocationHint=b;s.N=!0;s.l()};s.Q=!1;s.M=!1;s.za=function(b){s.audienceManagerBlob=b;s.M=!0;s.l()};s.isReadyToTrack=function(){var b=!0,a=s.visitor;if(a&&a.isAllowed()){if(!s.S&&!s.marketingCloudVisitorID&&a.getMarketingCloudVisitorID&&(s.S=!0,s.marketingCloudVisitorID=a.getMarketingCloudVisitorID([s,
s.Da]),s.marketingCloudVisitorID))s.O=!0;if(!s.P&&!s.analyticsVisitorID&&a.getAnalyticsVisitorID&&(s.P=!0,s.analyticsVisitorID=a.getAnalyticsVisitorID([s,s.ya]),s.analyticsVisitorID))s.L=!0;if(!s.R&&!s.audienceManagerLocationHint&&a.getAudienceManagerLocationHint&&(s.R=!0,s.audienceManagerLocationHint=a.getAudienceManagerLocationHint([s,s.Aa]),s.audienceManagerLocationHint))s.N=!0;if(!s.Q&&!s.audienceManagerBlob&&a.getAudienceManagerBlob&&(s.Q=!0,s.audienceManagerBlob=a.getAudienceManagerBlob([s,
s.za]),s.audienceManagerBlob))s.M=!0;if(s.S&&!s.O&&!s.marketingCloudVisitorID||s.P&&!s.L&&!s.analyticsVisitorID||s.R&&!s.N&&!s.audienceManagerLocationHint||s.Q&&!s.M&&!s.audienceManagerBlob)b=!1}return b};s.k=k;s.o=0;s.callbackWhenReadyToTrack=function(b,a,c){var e;e={};e.Ja=b;e.Ia=a;e.Ga=c;if(s.k==k)s.k=[];s.k.push(e);if(s.o==0)s.o=setInterval(s.l,100)};s.l=function(){var b;if(s.isReadyToTrack()){if(s.o)clearInterval(s.o),s.o=0;if(s.k!=k)for(;s.k.length>0;)b=s.k.shift(),b.Ia.apply(b.Ja,b.Ga)}};s.Ca=
function(b){var a,c,e=k,d=k;if(!s.isReadyToTrack()){a=[];if(b!=k)for(c in e={},b)e[c]=b[c];d={};s.wa(d,!0);a.push(e);a.push(d);s.callbackWhenReadyToTrack(s,s.track,a);return!0}return!1};s.Ra=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=
function(b,a){var c,e=new Date,d="s"+Math.floor(e.getTime()/108E5)%10+Math.floor(Math.random()*1E13),f=e.getYear();f="t="+s.escape(e.getDate()+"/"+e.getMonth()+"/"+(f<1900?f+1900:f)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());if(!s.supplementalDataID&&s.visitor&&s.visitor.getSupplementalDataID)s.supplementalDataID=s.visitor.getSupplementalDataID("AppMeasurement:"+s._in,s.expectSupplementalData?!1:!0);s.r("_s");if(!s.C("track",arguments)){if(!s.Ca(b)){a&&
s.K(a);b&&(c={},s.wa(c,0),s.K(b));if(s.Xa()){if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.Ra();s.bb();s.usePlugins&&s.doPlugins&&s.doPlugins(s);if(s.account){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(e.getTime()/1E3);e=w.location;if(!s.pageURL)s.pageURL=e.href?e.href:e;if(!s.referrer&&!s.xa)s.referrer=j.document.referrer,s.xa=1;s.referrer=s.Pa(s.referrer);s.r("_g")}if(s.Ta()&&!s.abort)s.Ua(),f+=s.Sa(),s.ab(d,f),s.r("_t"),s.referrer=""}}b&&s.K(c,1)}s.abort=
s.supplementalDataID=s.timestamp=s.pageURLRest=s.linkObject=s.j=s.linkURL=s.linkName=s.linkType=w.rb=s.pe=s.pev1=s.pev2=s.pev3=s.g=0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.q=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.c.length;b++)if(a=s.c[b],a.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)==
"hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a=="transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.ab=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.substring(0,e)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&
(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";d=s.AudienceManagement&&s.AudienceManagement.isReady();c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":"")+(d?"10":"1")+"/JS-"+s.version+(s.ib?"T":"")+"/"+b+"?AQB=1&ndh=1&"+(d?"callback=s_c_il["+s._in+"].AudienceManagement.passData&":"")+a+"&AQE=1";s.Wa&&(c=c.substring(0,2047));s.Na(c);s.W()};s.Na=function(b){s.e||s.Va();s.e.push(b);s.X=s.u();s.va()};s.Va=function(){s.e=s.Ya();if(!s.e)s.e=[]};s.Ya=function(){var b,
a;if(s.ba()){try{(a=w.localStorage.getItem(s.$()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.ba=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.la=function(){var b=0;if(s.e)b=s.e.length;s.z&&b++;return b};s.W=function(){if(!s.z)if(s.ma=k,s.aa)s.X>s.G&&s.ta(s.e),s.da(500);else{var b=s.Ha();if(b>0)s.da(b);else if(b=s.ja())s.z=1,s.$a(b),s.fb(b)}};s.da=function(b){if(!s.ma)b||(b=0),s.ma=setTimeout(s.W,b)};s.Ha=function(){var b;if(!s.trackOffline||
s.offlineThrottleDelay<=0)return 0;b=s.u()-s.ra;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.ja=function(){if(s.e.length>0)return s.e.shift()};s.$a=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\n\t"+s.unescape(b[c]);s.Za(a)}};s.fb=function(b){var a,c,e;if(!a&&s.d.createElement&&s.AudienceManagement&&s.AudienceManagement.isReady()&&(a=s.d.createElement("SCRIPT"))&&"async"in a)(e=(e=s.d.getElementsByTagName("HEAD"))&&
e[0]?e[0]:s.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),c=3):a=0;if(!a)a=new Image,a.alt="";a.ga=function(){try{if(s.ca)clearTimeout(s.ca),s.ca=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=0}catch(b){}};a.onload=a.hb=function(){a.ga();s.Ma();s.T();s.z=0;s.W()};a.onabort=a.onerror=a.Oa=function(){a.ga();(s.trackOffline||s.aa)&&s.z&&s.e.unshift(s.La);s.z=0;s.X>s.G&&s.ta(s.e);s.T();s.da(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.hb():a.Oa())};s.ra=
s.u();if(c==1)a.open("GET",b,!0),a.send();else if(c==2)a.open("GET",b),a.send();else if(a.src=b,c==3){if(s.pa)try{e.removeChild(s.pa)}catch(d){}e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a);s.pa=s.Ka}if(a.abort)s.ca=setTimeout(a.abort,5E3);s.La=b;s.Ka=w["s_i_"+s.replace(s.account,",","_")]=a;if(s.useForcedLinkTracking&&s.B||s.q){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.U=setTimeout(s.T,s.forcedLinkTrackingTimeout)}};s.Ma=function(){if(s.ba()&&!(s.qa>s.G))try{w.localStorage.removeItem(s.$()),
s.qa=s.u()}catch(b){}};s.ta=function(b){if(s.ba()){s.va();try{w.localStorage.setItem(s.$(),w.JSON.stringify(b)),s.G=s.u()}catch(a){}}};s.va=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.e.length>s.offlineLimit;)s.ja()}};s.forceOffline=function(){s.aa=!0};s.forceOnline=function(){s.aa=!1};s.$=function(){return s.offlineFilename+"-"+s.visitorNamespace+s.account};s.u=function(){return(new Date).getTime()};s.na=function(s){s=s.toLowerCase();if(s.indexOf("#")!=
0&&s.indexOf("about:")!=0&&s.indexOf("opera:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,c,e;s.ib=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.K(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!="function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&
(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);c.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,
e)),a.length>0))))return s.unescape(a);return""}};s.A=["supplementalDataID","timestamp","dynamicVariablePrefix","visitorID","marketingCloudVisitorID","analyticsVisitorID","audienceManagerLocationHint","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods","fpCookieDomainPeriods","cookieLifetime","pageName","pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy",
"retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.c=s.A.concat(["purchaseID","variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","audienceManagerBlob","tnt"]);s.Y=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","contextData","lightProfileID","lightStoreForSeconds","lightIncrementBy"];s.H=s.Y.slice(0);s.ea=["account","allAccounts","debugTracking",
"visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling","visitorSamplingGroup","linkObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","useForcedLinkTracking","forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl",
"abort","mobile","dc","lightTrackVars","maxDelay","expectSupplementalData","AudienceManagement"];for(g=0;g<=75;g++)s.c.push("prop"+g),s.H.push("prop"+g),s.c.push("eVar"+g),s.H.push("eVar"+g),g<6&&s.c.push("hier"+g),g<4&&s.c.push("list"+g);g=["resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage","plugins"];s.c=s.c.concat(g);s.A=s.A.concat(g);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=0;s.charSet="UTF-8";
s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.ra=0;s.X=0;s.G=0;s.qa=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.Wa=navigator.appName=="Microsoft Internet Explorer"}catch(n){}s.T=function(){if(s.U)w.clearTimeout(s.U),s.U=k;s.i&&s.B&&s.i.dispatchEvent(s.B);if(s.q)if(typeof s.q=="function")s.q();else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.B=s.q=0};s.ua=function(){s.b=s.d.body;if(s.b)if(s.p=
function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b.cb)){if(s.fa)if(s.useForcedLinkTracking)s.b.removeEventListener("click",s.p,!1);else{s.b.removeEventListener("click",s.p,!0);s.fa=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.j=b.srcElement?b.srcElement:b.target;try{if(s.j&&(s.j.tagName||s.j.parentElement||s.j.parentNode))if(e=s.la(),s.track(),e<s.la()&&s.useForcedLinkTracking&&b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!="A"&&d.tagName.toUpperCase()!=
"AREA";)d=d.parentNode;if(d&&(f=d.href,s.na(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(g){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(j){a=0}if(a)a.cb=1,b.stopPropagation(),b.gb&&b.gb(),b.preventDefault(),s.i=b.target,s.B=a}}}}catch(k){}s.j=
0}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.p);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.fa=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.p,!0);s.b.addEventListener("click",s.p,!1)}}else setTimeout(s.ua,30)};s.ua()}
function s_gi(s){var w,k=window.s_c_il,j,g,o=s.split(","),p,n,b=0;if(k)for(j=0;!b&&j<k.length;){w=k[j];if(w._c=="s_c"&&(w.account||w.oun))if(w.account&&w.account==s)b=1;else{g=w.account?w.account:w.oun;g=w.allAccounts?w.allAccounts:g.split(",");for(p=0;p<o.length;p++)for(n=0;n<g.length;n++)o[p]==g[n]&&(b=1)}j++}b||(w=new AppMeasurement);w.setAccount?w.setAccount(s):w.sa&&w.sa(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var s=window,w=s.s_giq,k,j,g;if(w)for(k=0;k<w.length;k++)j=w[k],g=s_gi(j.oun),g.setAccount(j.un),g.setTagContainer(j.tagContainerName);s.s_giq=0}s_pgicq();

/*
Audience Manager
*/

"function"!=typeof DIL&&(DIL=function(a,b){var d=[],c,e;a!==Object(a)&&(a={});var f,g,k,r,t,n,u,D,m,z,H;f=a.partner;g=a.containerNSID;k=a.iframeAttachmentDelay;r=!!a.disableDestinationPublishingIframe;t=a.iframeAkamaiHTTPS;n=a.mappings;u=a.uuidCookie;D=!0===a.enableErrorReporting;m=a.visitorService;z=a.declaredId;H=!0===a.removeFinishedScriptsAndCallbacks;var I,J,E,B;I=!0===a.disableScriptAttachment;J=!0===a.disableDefaultRequest;E=a.afterResultForDefaultRequest;B=a.dpIframeSrc;D&&DIL.errorModule.activate();
var K=!0===window._dil_unit_tests;(c=b)&&d.push(c+"");if(!f||"string"!=typeof f)return c="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:c,filename:"dil.js"}),Error(c);c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(g||"number"==typeof g)g=parseInt(g,10),!isNaN(g)&&0<=g&&(c="");c&&(g=0,d.push(c),c="");e=DIL.getDil(f,g);if(e instanceof DIL&&e.api.getPartner()==f&&e.api.getContainerNSID()==g)return e;
if(this instanceof DIL)DIL.registerDil(this,f,g);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+f+" and containerNSID = "+g);var w={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},F={stuffed:{}},l={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},
callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:g+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",
admsProcessingStarted:!1,process:function(h){try{if(!this.admsProcessingStarted){var a=this,v,b,c,d,f;if("function"==typeof h&&"function"==typeof h.getInstance){if(m===Object(m)&&(v=m.namespace)&&"string"==typeof v)b=h.getInstance(v);else{this.releaseType="no namespace";this.releaseRequests();return}if(b===Object(b)&&"function"==typeof b.isAllowed&&"function"==typeof b.getMarketingCloudVisitorID){if(!b.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=
b;this.admsProcessingStarted=!0;c=function(h){"VisitorAPI"!=a.releaseType&&(a.mid=h,a.releaseType="VisitorAPI",a.releaseRequests())};K&&(d=m.server)&&"string"==typeof d&&(b.server=d);f=b.getMarketingCloudVisitorID(c);if("string"==typeof f&&f.length){c(f);return}setTimeout(function(){"VisitorAPI"!=a.releaseType&&(a.releaseType="timeout",a.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},
releaseRequests:function(){this.calledBack=!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var h=s.isPopulatedString,a=this.getMarketingCloudVisitorID();h(this.mid)&&this.mid==a||(this.mid=a);return h(this.mid)?"d_mid="+this.mid+"&":""}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(h,a){var b=s.isPopulatedString,c=encodeURIComponent;if(h===
Object(h)&&b(a)){var d=h.dpid,f=h.dpuuid,e=null;if(b(d)&&b(f)){e=c(d)+"$"+c(f);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+a+"'";this.declaredIdCombos[e]=!0;this.declaredId[a]={dpid:d,dpuuid:f};return"setDeclaredId: succeeded for type '"+a+"'"}}return"setDeclaredId: failed for type '"+a+"'"},getDeclaredIdQueryString:function(){var h=this.declaredId.request,a=this.declaredId.init,b="";null!==h?b="&d_dpid="+h.dpid+"&d_dpuuid="+h.dpuuid:null!==a&&(b="&d_dpid="+a.dpid+
"&d_dpuuid="+a.dpuuid);return b}},registerRequest:function(h){var a=this.firingQueue;h===Object(h)&&a.push(h);!this.firing&&a.length&&(this.adms.calledBack?(h=a.shift(),h.src=h.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),x.fireRequest(h),this.firstRequestHasFired||"script"!=h.tag||(this.firstRequestHasFired=!0)):this.processVisitorAPI())},processVisitorAPI:function(){this.adms.process(window.Visitor)},requestRemoval:function(h){if(!H)return"removeFinishedScriptsAndCallbacks is not boolean true";
var a=this.toRemove,b,c;h===Object(h)&&(b=h.script,c=h.callbackName,(b===Object(b)&&"SCRIPT"==b.nodeName||"no script created"==b)&&"string"==typeof c&&c.length&&a.push(h));if(this.readyToRemove&&a.length){c=a.shift();b=c.script;c=c.callbackName;"no script created"!=b?(h=b.src,b.parentNode.removeChild(b)):h=b;window[c]=null;try{delete window[c]}catch(d){}this.removed.push({scriptSrc:h,callbackName:c});DIL.variables.scriptsRemoved.push(h);DIL.variables.callbacksRemoved.push(c);return this.requestRemoval()}return"requestRemoval() processed"}};
e=function(){var h="http://fast.",a="?d_nsid="+g+"#"+encodeURIComponent(document.location.href);if("string"===typeof B&&B.length)return B+a;w.IS_HTTPS&&(h=!0===t?"https://fast.":"https://");return h+f+".demdex.net/dest4.html"+a};var y={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+f+"_"+g,url:e(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:w.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var h=
this,a=document.createElement("iframe");a.id=this.id;a.style.cssText="display: none; width: 0; height: 0;";a.src=this.url;q.addListener(a,"load",function(){h.iframeHasLoaded=!0;h.requestToProcess()});document.body.appendChild(a);this.iframe=a},requestToProcess:function(h,a){var b=this;h&&!s.isEmptyObject(h)&&this.process(h,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){b.messageSendingInterval=w.POST_MESSAGE_ENABLED?
15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(h,a){var b=encodeURIComponent,c,d,f,e,g,m;a===Object(a)&&(m=q.encodeAndBuildRequest(["",a.dpid||"",a.dpuuid||""],","));if((c=h.dests)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)e=c[f],e=[b("dests"),b(e.id||""),b(e.y||""),b(e.c||"")],this.addMessage(e.join("|"));if((c=h.ibs)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)e=c[f],e=[b("ibs"),b(e.id||""),b(e.tag||""),q.encodeAndBuildRequest(e.url||[],
","),b(e.ttl||""),"",m],this.addMessage(e.join("|"));if((c=h.dpcalls)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)e=c[f],g=e.callback||{},g=[g.obj||"",g.fn||"",g.key||"",g.tag||"",g.url||""],e=[b("dpm"),b(e.id||""),b(e.tag||""),q.encodeAndBuildRequest(e.url||[],","),b(e.ttl||""),q.encodeAndBuildRequest(g,","),m],this.addMessage(e.join("|"));this.jsonProcessed.push(h)},addMessage:function(h){var a=encodeURIComponent,a=D?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+h)},sendMessages:function(){var h=
this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){h.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},G={traits:function(h){s.isValidPdata(h)&&(l.sids instanceof Array||(l.sids=[]),q.extendArray(l.sids,h));return this},pixels:function(h){s.isValidPdata(h)&&(l.pdata instanceof Array||(l.pdata=[]),q.extendArray(l.pdata,h));return this},logs:function(h){s.isValidLogdata(h)&&
(l.logdata!==Object(l.logdata)&&(l.logdata={}),q.extendObject(l.logdata,h));return this},customQueryParams:function(h){s.isEmptyObject(h)||q.extendObject(l,h,p.reservedKeys);return this},signals:function(h,a){var b,c=h;if(!s.isEmptyObject(c)){if(a&&"string"==typeof a)for(b in c={},h)h.hasOwnProperty(b)&&(c[a+b]=h[b]);q.extendObject(l,c,p.reservedKeys)}return this},declaredId:function(h){p.declaredId.setDeclaredId(h,"request");return this},result:function(h){"function"==typeof h&&(l.callback=h);return this},
afterResult:function(h){"function"==typeof h&&(l.postCallbackFn=h);return this},useImageRequest:function(){l.useImageRequest=!0;return this},clearData:function(){l={};return this},submit:function(){x.submitRequest(l);l={};return this},getPartner:function(){return f},getContainerNSID:function(){return g},getEventLog:function(){return d},getState:function(){var h={},a={};q.extendObject(h,p,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});q.extendObject(a,y,{attachIframe:!0,requestToProcess:!0,process:!0,
sendMessages:!0});return{pendingRequest:l,otherRequestInfo:h,destinationPublishingInfo:a}},idSync:function(a){if(a!==Object(a)||"string"!=typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!=typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,c=a.minutesToLive,d=encodeURIComponent,f,b=b.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)return"Error: config.minutesToLive needs to be a positive number";
f=q.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],",");a=["ibs",d(a.dpid),"img",d(b),c,"",f];y.addMessage(a.join("|"));p.firstRequestHasFired&&y.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(a!==Object(a)||"string"!=typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(s.isEmptyObject(a))return"Error: json is empty or not an object";x.defaultCallback(a);
return"json submitted for processing"},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var a=p,b=a.modStatsParams,c=a.platformParams,d;if(!b){b={};for(d in c)c.hasOwnProperty(d)&&!a.nonModStatsParams[d]&&(b[d.replace(/^d_/,"")]=c[d]);a.modStatsParams=b}return b}},x={submitRequest:function(a){p.registerRequest(x.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=p,c,d=a.callback,e="img";if(!s.isEmptyObject(n)){var A,m,u;for(A in n)n.hasOwnProperty(A)&&
(m=n[A],null!=m&&""!==m&&A in a&&!(m in a||m in p.reservedKeys)&&(u=a[A],null!=u&&""!==u&&(a[m]=u)))}s.isValidPdata(a.sids)||(a.sids=[]);s.isValidPdata(a.pdata)||(a.pdata=[]);s.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=q.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());"function"!=typeof d&&(d=this.defaultCallback);if(b.useJSONP=!a.useImageRequest||"boolean"!=typeof a.useImageRequest)e="script",c=b.callbackPrefix+"_"+f+"_"+g+"_"+(new Date).getTime();
return{tag:e,src:x.makeRequestSrc(a,c),internalCallbackName:c,callbackFn:d,postCallbackFn:a.postCallbackFn,useImageRequest:a.useImageRequest,requestData:a}},defaultCallback:function(a,b){var c,d,f,e,g,m,n,l,k;if((c=a.stuff)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)if((e=c[f])&&e===Object(e)){g=e.cn;m=e.cv;n=e.ttl;if("undefined"==typeof n||""===n)n=Math.floor(q.getMaxCookieExpiresInMinutes()/60/24);l=e.dmn||"."+document.domain.replace(/^www\./,"");k=e.type;g&&(m||"number"==typeof m)&&("var"!=
k&&(n=parseInt(n,10))&&!isNaN(n)&&q.setCookie(g,m,1440*n,"/",l,!1),F.stuffed[g]=m)}c=a.uuid;s.isPopulatedString(c)&&!s.isEmptyObject(u)&&(d=u.path,"string"==typeof d&&d.length||(d="/"),f=parseInt(u.days,10),isNaN(f)&&(f=100),q.setCookie(u.name||"aam_did",c,1440*f,d,u.domain||"."+document.domain.replace(/^www\./,""),!0===u.secure));r||p.abortRequests||y.requestToProcess(a,b)},makeRequestSrc:function(a,b){a.sids=s.removeEmptyArrayValues(a.sids||[]);a.pdata=s.removeEmptyArrayValues(a.pdata||[]);var c=
p,d=c.platformParams,e=q.encodeAndBuildRequest(a.sids,","),g=q.encodeAndBuildRequest(a.pdata,","),m=(a.logdataArray||[]).join("&");delete a.logdataArray;var n=w.IS_HTTPS?"https://":"http://",u=c.declaredId.getDeclaredIdQueryString(),l;l=[];var k,t,r,z;for(k in a)if(!(k in c.reservedKeys)&&a.hasOwnProperty(k))if(t=a[k],k=encodeURIComponent(k),t instanceof Array)for(r=0,z=t.length;r<z;r++)l.push(k+"="+encodeURIComponent(t[r]));else l.push(k+"="+encodeURIComponent(t));l=l.length?"&"+l.join("&"):"";return n+
f+".demdex.net/event?d_nsid="+d.d_nsid+u+(e.length?"&d_sid="+e:"")+(g.length?"&d_px="+g:"")+(m.length?"&d_ld="+encodeURIComponent(m):"")+l+(c.useJSONP?"&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst+"&d_cb="+(b||""):"")},fireRequest:function(a){if("img"==a.tag)this.fireImage(a);else if("script"==a.tag){var b=p.declaredId,b=b.declaredId.request||b.declaredId.init||{};this.fireScript(a,{dpid:b.dpid||"",dpuuid:b.dpuuid||""})}},fireImage:function(a){var b=p,f,e;b.abortRequests||(b.firing=
!0,f=new Image(0,0),b.sent.push(a),f.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},e=function(f){c="imgAbortOrErrorHandler received the event of type "+f.type;d.push(c);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},f.addEventListener?(f.addEventListener("error",e,!1),f.addEventListener("abort",e,!1)):f.attachEvent&&(f.attachEvent("onerror",e),f.attachEvent("onabort",e)),f.src=a.src)},fireScript:function(a,
b){var e=this,g=p,m,n,u=a.src,k=a.postCallbackFn,l="function"==typeof k,t=a.internalCallbackName;g.abortRequests||(g.firing=!0,window[t]=function(e){try{e!==Object(e)&&(e={});var m=a.callbackFn;g.firing=!1;g.fired.push(a);g.num_of_jsonp_responses++;m(e,b);l&&k(e,b)}catch(v){v.message="DIL jsonp callback caught error with message "+v.message;c=v.message;d.push(c);v.filename=v.filename||"dil.js";v.partner=f;DIL.errorModule.handleError(v);try{m({error:v.name+"|"+v.message}),l&&k({error:v.name+"|"+v.message})}catch(u){}}finally{g.requestRemoval({script:n,
callbackName:t}),g.registerRequest()}},I?(g.firing=!1,g.requestRemoval({script:"no script created",callbackName:t})):(n=document.createElement("script"),n.addEventListener&&n.addEventListener("error",function(b){g.requestRemoval({script:n,callbackName:t});c="jsonp script tag error listener received the event of type "+b.type+" with src "+u;e.handleScriptError(c,a)},!1),n.type="text/javascript",n.src=u,m=DIL.variables.scriptNodeList[0],m.parentNode.insertBefore(n,m)),g.sent.push(a),g.declaredId.declaredId.request=
null)},handleScriptError:function(a,b){var c=p;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.num_of_jsonp_errors++;c.registerRequest()}},s={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,e=[],b=0;b<c;b++)d=a[b],
"undefined"!=typeof d&&null!=d&&e.push(d);return e},isPopulatedString:function(a){return"string"==typeof a&&a.length}},q={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"==typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"==typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[];b=b||"=";var e,f;for(e in a)f=a[e],"undefined"!=typeof f&&null!=f&&d.push(e+
b+(c?encodeURIComponent(f):f));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=Array(d),f=0;f<d;f++)f in c&&(e[f]=b.call(b,c[f],f,c));return e},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),
d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=[],e=0;e<d;e++)if(e in c){var g=c[e];b.call(b,g,e,c)&&f.push(g)}return f}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,e;c=0;for(d=b.length;c<d;c++){for(e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,d,e,f){var g=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+
(c?";expires="+(new Date(g.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!s.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(w.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/
1E3/60}};"error"==f&&0==g&&q.addListener(window,"load",function(){DIL.windowLoaded=!0});var C=function(){M();r||p.abortRequests||y.attachIframe();p.readyToRemove=!0;p.requestRemoval()},M=function(){r||setTimeout(function(){J||p.firstRequestHasFired||p.adms.admsProcessingStarted||p.adms.calledBack||("function"==typeof E?G.afterResult(E).submit():G.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},L=document;"error"!=f&&(DIL.windowLoaded?C():"complete"!=L.readyState&&"loaded"!=L.readyState?q.addListener(window,
"load",C):DIL.isAddedPostWindowLoadWasCalled?q.addListener(window,"load",C):(k="number"==typeof k?parseInt(k,10):0,0>k&&(k=0),setTimeout(C,k||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));p.declaredId.setDeclaredId(z,"init");this.api=G;this.getStuffedVariable=function(a){var b=F.stuffed[a];b||"number"==typeof b||(b=q.getCookie(a))||"number"==typeof b||(b="");return b};this.validators=s;this.helpers=q;this.constants=w;this.log=d;K&&(this.pendingRequest=l,this.requestController=p,this.setDestinationPublishingUrl=
e,this.destinationPublishing=y,this.requestProcs=x,this.variables=F)},function(){var a=document,b;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",b=function(){a.removeEventListener("DOMContentLoaded",b,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var b;if(a===Object(a))for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},DIL.extendStaticPropertiesAndMethods({version:"5.0",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,
TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(a){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof a?!!a():"boolean"==typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(b){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,b,d){b=b+"$"+d;b in this.dils||(this.dils[b]=a)},getDil:function(a,b){var d;"string"!=typeof a&&(a="");b||(b=0);d=a+"$"+b;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+b+" was not found")},dexGetQSVars:function(a,b,d){b=this.getDil(b,d);return b instanceof this?b.getStuffedVariable(a):""},xd:{postMessage:function(a,b,d){var c=1;b&&
(window.postMessage?d.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(d.location=b.replace(/#.*$/,"")+"#"+ +new Date+c++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),b={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(c){if(!d)return"DIL error module has not been activated";
c!==Object(c)&&(c={});var e=c.name?(new String(c.name)).toLowerCase():"",f=[];c={name:e,filename:c.filename?c.filename+"":"",partner:c.partner?c.partner+"":"no_partner",site:c.site?c.site+"":document.location.href,message:c.message?c.message+"":""};f.push(e in b?b[e]:b.noerrortypedefined);a.api.pixels(f).logs(c).useImageRequest().submit();return"DIL error report sent"},pixelMap:b}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,b,d){var c="";b=b||"Error caught in DIL module/submodule: ";
a===Object(a)?c=b+(a.message||"err has no message"):(c=b+"err is not a valid object",a={});a.message=c;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=c}}});
DIL.tools.getSearchReferrer=function(a,b){var d=DIL.getDil("error"),c=DIL.tools.decomposeURI(a||document.referrer),e="",f="",g={queryParam:"q"};return(e=d.helpers.filter([b===Object(b)?b:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!c.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:c.hostname,keywords:(d.helpers.extendObject(g,e),f=g.queryPattern?
(e=(""+c.search).match(g.queryPattern))?e[1]:"":c.uriParams[g.queryParam],decodeURIComponent(f||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var b=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){b.helpers.map(d.split("&"),function(b){b=b.split("=");a[b.shift()]=b.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},b=document.getElementsByTagName("meta"),d,c,e,f,g;d=0;for(e=arguments.length;d<e;d++)if(f=arguments[d],null!==f)for(c=0;c<b.length;c++)if(g=b[c],g.name==f){a[f]=g.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d,c){try{var e=this,f={name:"DIL Site Catalyst Module Error"},g=function(a){f.message=a;DIL.errorModule.handleError(f);return a};this.options=c===Object(c)?c:{};this.dil=null;if(b instanceof DIL)this.dil=b;else return g("dilInstance is not a valid instance of DIL");f.partner=b.api.getPartner();if(a!==Object(a))return g("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return g("m is not an object");b.trackVars=e.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,f,k=[];f=[];var t={},r=!1;if(d!==Object(d))return g("Error in m._t function: s is not an object");if(this.d){if("function"==typeof d.foreachVar)d.foreachVar(function(a,b){t[a]=b;r=!0},this.trackVars);else{if(!(d.va_t instanceof Array))return g("Error in m._t function: s.va_t is not an array");
if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType)a=d.linkTrackVars,d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]&&(a=d[b].trackVars)),a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",");if(a){b=0;for(k=a.split(",");b<k.length;b++)0<=c.indexOf(","+k[b]+",")&&f.push(k[b]);f.length&&(c=","+f.join(",")+",")}f=0;for(b=d.va_t.length;f<b;f++)a=d.va_t[f],0<=c.indexOf(","+a+",")&&null!=d[a]&&""!==d[a]&&(t[a]=d[a],r=!0)}e.includeContextData(d,e,t).store_populated&&
(r=!0);r&&this.d.api.signals(t,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=b;return f.message?f.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(k){return this.handle(k,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var b=[],d,c,e,f,g;if(a===Object(a)){d=a.names;if(d instanceof Array&&(e=d.length))for(c=0;c<e;c++)f=d[c],"string"==typeof f&&f.length&&b.push(f);a=a.iteratedNames;if(a instanceof Array&&(e=a.length))for(c=
0;c<e;c++)if(d=a[c],d===Object(d)&&(f=d.name,g=parseInt(d.maxIndex,10),"string"==typeof f&&f.length&&!isNaN(g)&&0<=g))for(d=0;d<=g;d++)b.push(f+d);if(b.length)return b.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:75}]})},includeContextData:function(a,b,d){var c={},e=!1;if(a.contextData===Object(a.contextData)){a=a.contextData;b=b.options.replaceContextDataPeriodsWith;
var f,g;"string"===typeof b&&b.length||(b="_");for(f in a)a.hasOwnProperty(f)&&((g=a[f])||"number"===typeof g)&&(f=("contextData."+f).replace(/\./g,b),d[f]=g,e=!0)}c.store_populated=e;return c}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var c={name:"DIL GA Module Error"},e="";b instanceof DIL?(this.dil=b,c.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",
c.message=e,DIL.errorModule.handleError(c));a instanceof Array&&a.length?this.arr=a:(e="gaArray is not an array or is empty",c.message=e,DIL.errorModule.handleError(c));this.tv=this.constructTrackVars(d);this.errorMessage=e}catch(f){this.handle(f,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var b=[],d,c,e,f;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){e=this.defaultTrackVars;f={};d=0;for(c=e.length;d<c;d++)f[e[d]]=
!0;this.defaultTrackVarsObj=f}else f=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(c=a.length))for(d=0;d<c;d++)e=a[d],"string"==typeof e&&e.length&&e in f&&b.push(e);if(b.length)return b}return this.defaultTrackVars},constructGAObj:function(a){var b={};a=a instanceof Array?a:this.arr;var d,c,e,f;d=0;for(c=a.length;d<c;d++)e=a[d],e instanceof Array&&e.length&&(e=[],f=a[d],e instanceof Array&&f instanceof Array&&Array.prototype.push.apply(e,f),f=e.shift(),"string"==typeof f&&
f.length&&(b[f]instanceof Array||(b[f]=[]),b[f].push(e)));return b},addToSignals:function(a,b){if("string"!=typeof a||""===a||null==b||""===b)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(b);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),b={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c,d){"string"==typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,e,f){this.addToSignals("c_itemOrderId",
a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",e);this.addToSignals("c_itemQuantity",f)},_addTrans:function(a,b,c,d,e,f,g,k){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",e);this.addToSignals("c_transCity",f);this.addToSignals("c_transState",g);this.addToSignals("c_transCountry",
k)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,c,e,f,g,k,r;c=0;for(e=d.length;c<e;c++)if(f=d[c],a.hasOwnProperty(f)&&b.hasOwnProperty(f)&&(r=a[f],r instanceof Array))for(g=0,k=r.length;g<k;g++)b[f].apply(this,r[g])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();return this.hasSignals?(this.dil.api.signals(this.signals).submit(),
"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,b,d){try{this.callback=this.dil=null,this.errorMessage="",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,
this.cookieName=this.v(b)?b:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(c){this.handle(c,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var b,d,c,e,f,g;g=!1;var k=1;if(a===Object(a)&&(b=a.stuff)&&b instanceof Array&&(d=b.length))for(a=0;a<d;a++)if((c=b[a])&&c===Object(c)&&(e=c.cn,f=c.cv,e==this.cookieName&&this.v(f))){g=!0;break}if(g){b=
f.split(this.delimiter);"undefined"==typeof window._gaq&&(window._gaq=[]);c=window._gaq;a=0;for(d=b.length;a<d&&!(g=b[a].split("="),f=g[0],g=g[1],this.v(f)&&this.v(g)&&c.push(["_setCustomVar",k++,f,g,1]),k>this.LIMIT);a++);this.errorMessage=1<k?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;
this.dil.api.afterResult(function(b){a.process(b)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(b){return this.handle(b,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var c=[],e="";this.isSecurePageButNotEnabled(document.location.protocol)&&(e="Module has not been enabled for a secure page",c.push(e),d.message=e,DIL.errorModule.handleError(d));b instanceof
DIL?(this.dil=b,d.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",c.push(e),d.message=e,DIL.errorModule.handleError(d));"string"==typeof a&&a.length?this.aid=a:(e="aid is not a string or is empty",c.push(e),d.message=e,DIL.errorModule.handleError(d));this.errorMessage=c.join("\n")}catch(f){this.handle(f,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"==a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,b=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(d){}finally{a.calledBack=!0,"function"==typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(b,d);this.scriptsSent.push(b);return"Request sent to Peer39"},processData:function(a){var b,d,c,e,f={},g=!1;
this.returnedData.push(a);if(a instanceof Array)for(b=0,d=a.length;b<d;b++)c=a[b].split("="),e=c[0],c=c[1],e&&isFinite(c)&&!isNaN(parseInt(c,10))&&(f[e]instanceof Array||(f[e]=[]),f[e].push(c),g=!0);return{hasSignals:g,signals:f}},constructScript:function(){var a=document.createElement("script"),b=this.optionals,d=b.scriptId,c=b.scriptSrc,b=b.scriptParams;a.id="string"==typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"==typeof c&&c.length?a.src=c:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"==typeof b&&b.length&&(a.src+="?"+b));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};


//Instantiate DIL v5.0 code
var nsDil = DIL.create({
partner: 'netshoes'
});
var _scDilObj = s_gi(s_account);
DIL.modules.siteCatalyst.init(_scDilObj, nsDil, {
       names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
       iteratedNames: [{
              name: 'eVar',
              maxIndex: 75
       }, {
              name: 'prop',
              maxIndex: 75
       }, {
              name: 'pev',
              maxIndex: 3
       }, {
              name: 'hier',
              maxIndex: 4
       }]
});
