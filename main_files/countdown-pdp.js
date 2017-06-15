(function (){
	timer = setInterval(function () {
		if( typeof define !== 'undefine' && typeof require !== 'undefined'  ) {

			require([
				'http://static.ar.netshoes.net/resources/ns-countdown/nsar/vendors/vanillacountdown.js'
				], function (vanillaCountdown) {

			function pdpCountDown(params) {
			  var options = params;

			  var CONFIG_PATH = options.jsonPath;
			  var dailyOfferProduct = false;
			  var configuration = {};
			  loadModule();

			  function loadModule() {

			    $ajax(CONFIG_PATH, function(config) {
			       var productSet = config.value.productSet;
			       configuration.headerDisplayName = config.value.headerDisplayName;
			       configuration.headerDescription = config.value.headerDescription;
			       // document.addEventListener("DOMContentLoaded", function(event) {
			         // document.querySelector("body").insertAdjacentHTML('afterbegin',style);
			         var productSku = document.querySelector(".sku").textContent.replace("Ref.: ","");

			         for(var i = 0; i < productSet.length; i++) {
			           var splitDate = getSplitInfoDate(productSet[i].startTime),
			               setStartDate = new Date(splitDate.date + " " + splitDate.time + " " + splitDate.shift);
			           if(isOnStartTime(setStartDate)) {
			              for(var j = 0; j < productSet[i].products.length; j++) {
			                if(productSku.indexOf(productSet[i].products[j].productCode) >= 0) {
			                  dailyOfferProduct = productSet[i].products[j];
      						var dailyOfferStart = getSplitInfoDate(dailyOfferProduct.countDownStartTime),
								dailyOfferStartDate = new Date(dailyOfferStart.date + " " + dailyOfferStart.time + " " + dailyOfferStart.shift),
								dailyOfferEnd = getSplitInfoDate(dailyOfferProduct.countDownEndTime),
								dailyOfferEndDate = new Date(dailyOfferEnd.date + " " + dailyOfferEnd.time + " " + dailyOfferEnd.shift);
			                  if(isOnCountDown(dailyOfferStartDate, dailyOfferEndDate)) {
			                    observeColors();
			                    if(checkColor(productSku)) {
			                      render();
			                    }
			                  }
			                  break;
			                }
			              }
			           }
			         }
			       // });
			    });
			  }

			function checkColor(sku) {
			  var selectedColor = sku.replace("Ref.: ","").replace(dailyOfferProduct.productCode,"").split("-")[1];
			  return dailyOfferProduct.productExclusion.every(function(element, index, array) {
			    return selectedColor != element;
			  });
			}

			window.addEventListener('countDownRendered', function() {
			    document.querySelector(".ns-countdown").classList.remove("loading");
			});

			function observeColors() {

			  document.querySelector(options.skuClass).addEventListener('DOMSubtreeModified', function () {
			  if(!!this.textContent) {
			      if(checkColor(this.textContent)) {
			        if(document.querySelector(".ns-countdown") == null) {
			          render();
			        }
			      } else {
			        if(!!document.querySelector(".ns-countdown")){
			          document.querySelector(".ns-countdown").remove();
			        }
			      }
			  }
			}, false);
			}

			  function render() {
			    if(dailyOfferProduct) {

			      html = 	'<div class="ns-countdown loading"> \
			                                <div class="ns-header"> \
			                                  <div class="ns-wrapper"> \
			                                    <div class="box-title"> \
			                                      <h4 class="title">' + configuration.headerDisplayName + '</h4> \
			                                      <h5 class="subtitle">' + configuration.headerDescription + '</h5> \
			                                    </div> \
			                                    <div class="mod-countdown"></div> \
			                                  </div> \
			                               </div>';
			      document.querySelector(options.countdownPlace).insertAdjacentHTML(options.countdownPosition,html );

			      var counterDateSplit = getSplitInfoDate(dailyOfferProduct.countDownEndTime),
			          counterDate = new Date(counterDateSplit.date + " " + counterDateSplit.time + " " + counterDateSplit.shift);

			      // if(isOnEndTime(counterDate))
			      var element = document.querySelector('.mod-countdown');
			      var counter = new vanillaCountdown({
			          year: counterDate.getFullYear(),
			          month: counterDate.getMonth() + 1,
			          day: counterDate.getDate(),
			          hour: counterDate.getHours(),
			          minute: counterDate.getMinutes(),
			          second: 00,
			          action: function(){  },
			          text: true // Default: true
			      }, element);
			      counter.init();

			    }
			  }

			  function isOnCountDown(start, end) {
			    return isOnStartTime(start), isOnEndTime(end);
			  }

			  function isOnStartTime(startTime) {
			    var today = new Date();
			    return today.getTime() >= startTime.getTime() &&
			    (today.getDate() == startTime.getDate() && today.getMonth() == startTime.getMonth() && today.getFullYear() == startTime.getFullYear());
			  }

			  function isOnEndTime(endTime) {
			    var today = new Date();
			    return today.getTime() <= endTime.getTime();
			  }

			  function getSplitInfoDate(time) {
			      var a = time.split(" ");
			      var aux = [];
			      aux["date"] = a[2];
			      aux["time"] = a[0];
			      aux["shift"] = a[1];

			      return aux;
			  }

			  function $ajax(url, callback) {
			    var request = new XMLHttpRequest();
			    request.open('GET', url, true);

			    request.onload = function() {
			      if (request.status == 200) {
			        callback(JSON.parse(request.responseText));
			      } else {
			        callback({error: true, message: 'Error calling get-product-vo'});
			      }
			    };

			    request.onerror = function() {
			      console.log('Error calling get-product-vo');
			    };

			    request.send();
			  }
			};


			pdpCountDown({
			  jsonPath: 'http://static.ar.netshoes.net/resources/ns-countdown/nsar/dailyOffer_ar.json',
			  skuClass: ".sku",
			  countdownPlace: ".buy-product-holder",
			  countdownPosition:'afterbegin'
			});


			});

			clearInterval(timer)
		}
	}, 1);
})();


// pdpCountDown({
//   jsonPath: 'http://static.ar.netshoes.net/resources/ns-countdown/nsar/dailyOffer_ar.json',
//   skuClass: ".product-name-holder",
//   countdownPlace: ".content-holder",
//   countdownPosition:'afterbegin'
// });
/* MOBILE
jsonPath: '/src/js/dailyOffer.json',
skuClass: ".product-name-holder",
countdownPlace: ".content-holder",
countdownPosition:'afterbegin'
*/

/* DESKTOP
jsonPath: '/src/js/dailyOffer.json',
skuClass: ".sku",
countdownPlace: ".buy-product-holder",
countdownPosition:'afterbegin'
*/
