!function(){var e,t,n,i,o={6931:function(e,t,n){"use strict";(function(e){Promise.all(["open"in document.createElement("details")?Promise.resolve():n.e(6415).then(n.t.bind(n,1840,23)),"entries"in Object&&"values"in Object?Promise.resolve():Promise.all([n.e(831),n.e(4622)]).then(n.t.bind(n,6815,23)),void(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)),"closest"in Element.prototype&&"append"in Element.prototype&&"matches"in Element.prototype?Promise.resolve():n.e(5989).then(n.t.bind(n,2966,23)),"fetch"in window?Promise.resolve():n.e(6553).then(n.bind(n,6956)),"URL"in window&&"URLSearchParams"in window?Promise.resolve():Promise.all([n.e(831),n.e(1642)]).then(n.t.bind(n,7923,23)),"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&"isIntersecting"in window.IntersectionObserverEntry.prototype?Promise.resolve():n.e(6502).then(n.t.bind(n,1315,23))]).then(e,e)})((function(){n(7353)}))},6229:function(e,t,n){var i=n(9039),o=n(6633);e.exports=new function(){var e=o.jsconfHost+"/config_adreload.json",t=!1,n={},a=[],r=["color: black","background: #ffcc00","padding: 2px"].join(";");function c(e){if(e.interval<2)return o.log("%c%s",r,"adreload.js:","direct click"),!0;if(a[e.name]){if(++a[e.name]%e.interval==0)return o.log("%c%s",r,"adreload.js:","max clicks"),!0;o.log("%c%s",r,"adreload.js:","add up clicks")}else o.log("%c%s",r,"adreload.js:","first click"),a[e.name]=1;return!1}function s(e){var a;try{a=t[e.detail]}catch(s){return void o.log("adreload.js:",s)}window.location.pathname.indexOf(a.slug)<0||a.pagetypes.indexOf(o.view.type)<0||function(e){if(void 0!==e.time&&e.time>0){var t=Date.now();return!(n[e.name]>t)&&(n[e.name]=t+e.time,c(e))}return c(e)}(a)&&"function"==typeof window.IQD_ReloadHandle&&(o.log("%c%s",r,"adreload.js:","adReload postMessage sent"),window.postMessage("iq_refresh_ads"),o.log("%c%s",r,"adreload.js:","dataLayer.push emitted"),i.send(["....adreload","webtrekkadreload"],{},"adreload"),"iom"in window&&"function"==typeof window.iom.h&&void 0!==window.iam_data&&(o.log("%c%s",r,"adreload.js:","ivw old style emitted"),window.iom.h(window.iam_data,1)),"IOMm"in window&&void 0!==window.iommData&&(o.log("%c%s",r,"adreload.js:","ivw new style emitted"),window.IOMm("pageview",{cp:window.iommData.cp,co:window.iommData.co})))}function d(e){var n;if(o.log("%c%s",r,"debug: postmessage","📬",e.data),"string"==typeof e.data&&0===e.data.indexOf("{")){try{n=JSON.parse(e.data)}catch(i){return void o.log("%c%s",r,"adreload.js: error",i)}"string"==typeof n.name&&void 0!==t[n.name]&&function(e,t){return(e="string"==typeof e?[e]:e).indexOf(t.origin)>-1}(t[n.name].origin,e)&&s({detail:n.name})}}this.init=function(){o.log("adreload.js: debug AdReload started"),!1!==o.view.get("advertising_enabled")&&!0!==o.user.adFree&&(o.log("%c%s",r,"adreload.js: loadconfig",e),fetch(e).then((function(e){return e.json()})).then((function(e){t=e,o.log("%c%s",r,"adreload.js: config loaded",t),window.addEventListener("interaction.adreload.z",s),window.addEventListener("message",d)})).catch((function(e){o.log("adreload.js: error",e)})))}}},7962:function(e){e.exports=function(e,t,n){var i;return function(){var o=this,a=arguments;i?clearTimeout(i):n&&e.apply(o,a),i=setTimeout((function(){i=null,n||e.apply(o,a)}),t)}}},9558:function(e,t,n){e.exports=function(){var e=document.querySelectorAll(".js-registration-form");e.length&&n.e(8657).then((function(){var t=[n(8657)];(function(t){e.forEach((function(e){new t.default(e)}))}).apply(null,t)})).catch(n.oe)}},4093:function(e,t,n){var i=n(9161);function o(){"replaceState"in history?history.replaceState(null,document.title,location.pathname+location.search):location.hash=null}var a={init:function(){switch(location.hash.substr(1)){case"success-registration-with-newsletter":n.e(6505).then((function(){var e=[n(6505)];(function(e){e.default()}).apply(null,e)})).catch(n.oe);case"success-registration":window.Zeit.user&&"paid"===window.Zeit.user.paywall?i.default("Leider haben Sie kein gültiges Abonnement für diesen Artikel. Bitte wählen Sie unten das gewünschte Abo.","error"):i.default("Herzlich willkommen! Sie sind jetzt angemeldet."),o();break;case"success-confirm-account":i.default("Herzlich willkommen! Ihr Konto ist nun aktiviert."),o();break;case"success-confirm-change":i.default("Ihre Einstellungen wurden gespeichert. Viel Spaß!"),o();break;case"success-confirm-saved":i.default("Ihre Änderungen wurden gespeichert."),o()}}};e.exports=a},177:function(e,t,n){n.p=window.Zeit.assetHost+"/js/"},989:function(e){e.exports=function(e,t,n){n=n||{};var i,o,a,r=null,c=0,s=Date.now||function(){return(new Date).getTime()},d=function(){c=!1===n.leading?0:s(),r=null,a=e.apply(i,o),r||(i=o=null)};return function(){var u=s();c||!1!==n.leading||(c=u);var l=t-(u-c);return i=this,o=arguments,l<=0||l>t?(r&&(clearTimeout(r),r=null),c=u,a=e.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(d,l)),a}}},6633:function(e,t,n){var i=window.Zeit||{},o={readyWhenYouAre:function(e){return e},clearQueue:function(){if("object"==typeof this.queue&&this.queue.length){var e=this.queue;n.e(8740).then((function(){var t=[n(8740)];(function(t){t(e)}).apply(null,t)})).catch(n.oe),this.queue=[]}},log:function(){location.hash.indexOf("debug")>-1&&console.debug.apply(console,arguments)},getColorScheme:function(){try{return"dark"===getComputedStyle(document.documentElement).getPropertyValue("--z-color-scheme").trim()?"dark":"light"}catch(e){return"light"}},nullOrUndefined(e){return null==e}};Object.assign(i,o),i.callMeLater.forEach((function(e){e[0].apply(null,e[1])})),i.debounce=n(7962),i.throttle=n(989),e.exports=i},7353:function(e,t,n){"use strict";var i=n(6633);var o=function(){document.querySelectorAll(".js-pm-link").length>=1&&window.addEventListener("click",(function(e){if(e.target.classList.contains("js-pm-link")){var t;e.preventDefault(),i.log("CMP link clicked.");var n=i.settings.get("sourcepoint_privacy_manager_id");(n=null!=(t=i.user)&&t.adFree?i.settings.get("sourcepoint_pur_privacy_manager_id"):i.settings.get("sourcepoint_privacy_manager_id"))&&window._sp_&&"function"==typeof window._sp_.loadPrivacyManagerModal&&window._sp_.loadPrivacyManagerModal(n)}}))},a=n(9039);var r=function(){window.Zeit.isMobileApp&&document.querySelectorAll(".js-FollowPush").forEach((function(e){var t=e.dataset.followpushTaggroup,n=e.dataset.followpushTag;t&&n&&(e.innerHTML='<a href="zeitapp://subscribe/'+t+"/"+n+'" class="button button--gray">Folgen</a>')}))},c=n(1942);var s=function(){var e=document.querySelectorAll(".js-accordion");e.length&&Promise.all([n.e(3811),n.e(5826)]).then(n.bind(n,5826)).then((function(t){e.forEach((function(e){new t.default(e)}))}));var t=document.querySelectorAll(".js-showable");t.length&&n.e(3811).then(n.bind(n,3811)).then((function(e){t.forEach((function(t){return new e.default(t)}))}))};var d,u,l=document.querySelector(".navigation-backdrop"),f=function(){function e(e){if(e){this.button=e,this.content=document.querySelector("#"+this.button.getAttribute("aria-controls")),this.main=document.querySelector(".main"),this.header=document.querySelector(".header"),this.content.setAttribute("aria-hidden",!0),this.button.setAttribute("aria-expanded",!1),this.activeElement=void 0,this.setNavMenuHeight(),this.setCustomProperties(),this.button.addEventListener("click",this,!1),this.content.addEventListener("blur",this,!0),this.button.addEventListener("keydown",this,!1);var t=this.content.querySelector(".navigation-search__input");t&&t.addEventListener("click",this.trackSearchClick),window.addEventListener("keydown",this,!1),window.addEventListener("resize",i.debounce(this.handleEvent.bind(this),100),!1)}}var t=e.prototype;return t.handleEvent=function(e){var t=this,n=e.currentTarget;switch(e.type){case"click":e.preventDefault(),this.activeElement=document.activeElement,this.toggleMenu();break;case"blur":if("true"===this.content.getAttribute("aria-hidden"))return;if(e.target.classList.contains("navigation-search__input"))break;requestAnimationFrame((function(){n.contains(document.activeElement)||t.closeMenu()}));break;case"mousedown":e.target.closest(".navigation__button, .navigation__content")||this.closeMenu();break;case"keydown":if(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)return;switch(e.which){case 13:case 32:if(e.target.classList.contains("navigation-search__input"))break;if(!e.target.closest(".navigation__button, .navigation__content"))break;e.preventDefault(),e.target.click();break;case 27:if(!e.target.closest(".navigation__button, .navigation__content"))break;if("true"===this.content.getAttribute("aria-hidden"))break;this.closeMenu()}break;case"resize":this.setNavMenuHeight()}},t.setCustomProperties=function(){var e=0,t=0,n=this.header.querySelector(".navigation"),i=this.header.querySelector(".navigation__liveblogs-topics, .navigation__advertorial-marker");n&&(e=n.getBoundingClientRect().height),i&&(t=i.getBoundingClientRect().height),this.header.style.setProperty("--nav-height",e+"px"),this.header.style.setProperty("--nav-topic-height",t+"px")},t.openMenu=function(){this.setNavMenuHeight(),d&&d!==this.content&&(d.setAttribute("aria-hidden","true"),u.setAttribute("aria-expanded","false")),d=this.content,u=this.button,this.content.setAttribute("aria-hidden",!1),this.button.setAttribute("aria-expanded",!0),this.header.dataset.open="true",window.addEventListener("mousedown",this),document.documentElement.classList.add("no-scroll"),this.main.classList.add("prevent-click"),this.content.scrollTop=0,l.hidden=!1},t.closeMenu=function(){"true"!==this.content.getAttribute("aria-hidden")&&"false"!==this.button.getAttribute("aria-expanded")&&(this.content.setAttribute("aria-hidden",!0),this.button.setAttribute("aria-expanded",!1),this.header.dataset.open="false",window.removeEventListener("mousedown",this),document.documentElement.classList.remove("no-scroll"),this.main.classList.remove("prevent-click"),this.content.scrollTop=0,l.hidden=!0,this.button.dataset.ctAction="close",i.dispatchEvent("track",this.button),this.button.dataset.ctAction="open",this.activeElement&&this.activeElement.focus())},t.toggleMenu=function(){"true"===this.content.getAttribute("aria-hidden")?this.openMenu():this.closeMenu()},t.setNavMenuHeight=function(){var e=this;requestAnimationFrame((function(){var t=window.innerHeight,n=e.button.getBoundingClientRect().top,i="calc("+(t-e.button.getBoundingClientRect().height-n)+"px - var(--z-ds-space-14) - var(--z-ds-space-16))";e.content.style.setProperty("--content-menu-max-height",i),CSS.supports("height: 100dvh")?e.content.style.setProperty("--window-height","100dvh"):e.content.style.setProperty("--window-height",t+"px")}))},t.trackSearchClick=function(){(0,a.sendInfo)(["searchbar_open","","navigation_main","#navigation"])},e}();var h=function(){window.addEventListener("load",(function(){var e=function(e){for(var t=location.search.substr(1).split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0]===e)return decodeURIComponent(i[1])}}("wt_cc3");e&&i.cookieCreate("icode",e,7)}))};function p(e){var t=["skiplink...."+e.type,window.location.href];(0,a.send)(t,{},"skiplink",e.type)}var g=function(){var e=document.querySelector(".skiplink");e&&["focus","click"].forEach((function(t){e.addEventListener(t,p)}))},v=document.location.hash.indexOf("debug-clicktracking")>-1,m={sendTracking:{},handleSpecificPlugin:{},dispatch:{}};m.sendTracking.sendDataToWebrekk=function(e){(0,a.send)(e)},m.sendTracking.sendVideoEventToWebtrekk=function(e,t){var n,i,o,a,r=t?"#"+t:".video-player",c="",s="",d="",u=window.location.host+window.location.pathname;(n=document.querySelector(r).closest("article, figure[data-video-provider]"))&&(c=(a=n.dataset).videoSize,s=a.videoSeries,d=a.videoProvider,u=a.videoPageUrl||window.location.host+window.location.pathname,i=a.videoProductId||"undefined"),o=["video",c,s,d+"|"+i,e,u],m.sendTracking.sendDataToWebrekk(o)},m.sendTracking.sendVideoViewToIVW=function(){void 0!==window.IOMm&&void 0!==window.iommData&&(window.iommData.cp="video",v?console.debug("triggeredEventTracking: send IVW data newstyle",window.iommData):window.IOMm("pageview",{cp:window.iommData.cp,co:window.iommData.co}))},m.handleSpecificPlugin.trackVideojsEvent=function(e,t){switch(e){case"playerStarted":m.sendTracking.sendVideoViewToIVW(),m.sendTracking.sendVideoEventToWebtrekk("play",t);break;case"contentStarted":m.sendTracking.sendVideoEventToWebtrekk("start",t);break;case"contentCompleted":m.sendTracking.sendVideoEventToWebtrekk("complete",t);break;case"adStarted":m.sendTracking.sendVideoEventToWebtrekk("adstart",t)}},m.handleSpecificPlugin.trackMeineZeitClickEvent=function(e){var t=e.slug.replace(/^\./,"").split("|"),n=[t[0],t[1]];m.sendTracking.sendDataToWebrekk(n)},m.dispatch.dispatchTrackingMessages=function(e){"videojs"===e.sender&&m.handleSpecificPlugin.trackVideojsEvent(e.event,e.id),"meinezeit"===e.sender&&m.handleSpecificPlugin.trackMeineZeitClickEvent(e),"quiz"===e.sender&&m.sendTracking.sendDataToWebrekk(e.data)},m.dispatch.dispatchAllMessages=function(e){var t;if(void 0!==e&&"string"==typeof e.data&&0===e.data.indexOf("{")){try{t=JSON.parse(e.data)}catch(n){return}"string"==typeof t.name&&"string"==typeof t.sender&&"zonTriggeredEventTracking"===t.name&&m.dispatch.dispatchTrackingMessages(t)}};var b=function(){window.addEventListener("message",m.dispatch.dispatchAllMessages)},y=n(9100);function w(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target.dataset.vtParameter,i=e.target.dataset.vtLinkId||"#"+e.target.tagName.toLowerCase(),o=n.split(".");o.push(i),(0,a.sendInfo)(o),t.unobserve(e.target)}}))}function k(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target,i=Array.from(n.querySelectorAll("a")),o=Math.ceil(.5*i.length);if(e.intersectionRatio>=.5){var a=S(i.slice(0,o));E(n,a),t.unobserve(e.target)}}}))}function _(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target,i=Array.from(n.querySelectorAll("a")),o=Math.ceil(.5*i.length);if(e.intersectionRatio>=1){var a=S(i.slice(o,i.length));E(n,a),t.unobserve(e.target)}}}))}var S=function(e){return e.map((function(e){return(0,y.x)(e.dataset.ctLabel||e.textContent.trim())}))},E=function(e,t){(0,a.sendInfo)([e.dataset.vtSection+"_impression",e.closest("[data-ct-container-type]").dataset.ctContainerType,JSON.stringify(t),"","","#navigation"])};var j=function(e){if(i.toggles.get("visibility_tracking")){var t=i.settings.get("visibility_tracking_limited_to_pages");if(!t||t.split(",").some((function(e){return window.location.pathname.startsWith(e)})))if(e){var n=e.querySelectorAll("nav"),o=new IntersectionObserver(k,{threshold:[.5]}),a=new IntersectionObserver(_,{threshold:[1]});n.forEach((function(e){(e.querySelectorAll("li").length>=2||e.querySelector("li.js-replace-nav-teasers"))&&o.observe(e),a.observe(e)}))}else{var r=document.querySelectorAll("[data-vt-parameter]");if(!r.length)return;var c=new IntersectionObserver(w,{threshold:.5});r.forEach((function(e){c.observe(e)}))}else i.log('visibilityTracking.mjs: tracking canceled, current path "'+window.location.pathname+'" not matched by values in "visibility_tracking_limited_to_pages" setting')}else i.log('visibilityTracking.mjs: tracking canceled, visibility_tracking toggle = "'+i.toggles.get("visibility_tracking")+'"')};var q=function(){var e=document.querySelector(".js-photocluster");e&&"relative"===getComputedStyle(e).getPropertyValue("position")&&n.e(9470).then(n.t.bind(n,9470,19)).then((function(e){new(0,e.default)(".js-photocluster",{itemSelector:".photocluster__media",columnWidth:".photocluster__media--small",percentPosition:!0})}))},P=n(6633),T=n(4093),A=n(6229),O=n(9558),L=document.getElementById("js-article"),M=document.body.dataset.pageType,I=document.querySelectorAll("div[data-backgroundvideo]");if(document.querySelector(".navigation__button--main")&&new f(document.querySelector(".navigation__button--main")),document.querySelector(".navigation__button--account")&&new f(document.querySelector(".navigation__button--account")),Promise.all([n.e(2438),n.e(4941)]).then(n.bind(n,4941)).then((function(e){e.default()})),document.querySelector(".header--sticky")&&n.e(8731).then(n.bind(n,8731)).then((function(e){new e.default})),j(document.querySelector(".navigation__content--main")),j(document.querySelector(".navigation__content--account")),(0,c.Ay)(),T.init(),o(),(0,a.default)(),g(),b(),O(),A.init(),j(),s(),P.view.advertising_enabled&&P.toggles.get("adblocker_user_analytics")&&Promise.all([n.e(8537),n.e(8778)]).then(n.bind(n,8778)).then((function(e){e.default()})),P.toggles.get("block_embeds")){var x=document.querySelectorAll(".js-embed-consent");x.length&&Promise.all([n.e(3158),n.e(4397),n.e(2265)]).then((function(){var e=[n(2265)];(function(e){e.default(x)}).apply(null,e)})).catch(n.oe)}if(document.querySelector(".embed[data-embed]")&&Promise.all([n.e(2438),n.e(2160)]).then((function(){var e=[n(2160)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),"centerpage"===M&&n.e(5249).then((function(){var e=[n(5249)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),L){Promise.all([n.e(3784),n.e(1348)]).then((function(){var e=[n(3784)];(function(){q()}).apply(null,e)})).catch(n.oe),function(){var e=document.querySelectorAll(".js-audio-player");e.length&&Promise.all([n.e(8537),n.e(1449),n.e(4881)]).then(n.bind(n,4881)).then((function(t){e.forEach((function(e){new t.default(e)}))}))}();var C=document.querySelectorAll(".js-details");C.length&&n.e(7790).then((function(){var e=[n(7790)];(function(e){e.default(C)}).apply(null,e)})).catch(n.oe);var D=document.querySelectorAll(".js-sharing-menu");D.length&&Promise.all([n.e(2438),n.e(8813),n.e(5192)]).then(n.bind(n,8813)).then((function(e){D.forEach((function(t){new e.default(t)}))}));var V=document.querySelector(".article-player[data-article-player]");V&&Promise.all([n.e(8537),n.e(1449),n.e(4881),n.e(4629)]).then((function(){var e=[n(4629)];(function(e){new e.default(V)}).apply(null,e)})).catch(n.oe),document.querySelector("figure[data-animate]")&&n.e(4255).then((function(){var e=[n(4255)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),document.querySelector(".ingredient-dice")&&n.e(4816).then((function(){var e=[n(4816)];(function(e){e.default()}).apply(null,e)})).catch(n.oe)}P.toggles.get("bookmark_list")&&Promise.all([n.e(8537),n.e(909),n.e(4274),n.e(9511)]).then(n.bind(n,9511)).then((function(e){e.default()})),document.querySelector(".js-copy, .js-copy-inline")&&Promise.all([n.e(2438),n.e(909),n.e(9502),n.e(5288)]).then((function(){var e=[n(2907)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),r(),h(),P.clearQueue(),I&&n.e(3978).then((function(){var e=[n(3978)];(function(e){I.forEach((function(t){e.init(t)}))}).apply(null,e)})).catch(n.oe),document.querySelectorAll(".js-link-commentcount")&&n.e(5776).then((function(){var e=[n(5776)];(function(e){e.default()}).apply(null,e)})).catch(n.oe);var R=document.querySelector(".js-image-copyright-dialog");R&&R.addEventListener("click",(function(e){e.preventDefault(),Promise.all([n.e(3158),n.e(4397),n.e(6584)]).then((function(){var e=[n(6584)];(function(e){e.default()}).apply(null,e)})).catch(n.oe)}),!1),document.querySelector("iframe[data-src]")&&n.e(2595).then((function(){var e=[n(2595)];(function(e){e.default()}).apply(null,e)})).catch(n.oe),document.querySelector(".recipe-search")&&Promise.all([n.e(13),n.e(6870)]).then((function(){var e=[n(6870),n(13)];(function(e,t){e.default(),t.default(!0)}).apply(null,e)})).catch(n.oe);var U=document.querySelectorAll(".js-newsletter-signup");U.length&&n.e(2897).then((function(){var e=[n(2897)];(function(e){U.forEach((function(t){new e.default(t)}))}).apply(null,e)})).catch(n.oe),"popover"in HTMLElement.prototype&&document.querySelector(".volume-navbar")&&n.e(4421).then((function(){var e=[n(4421)];(e=>e.default()).apply(null,e)})).catch(n.oe)},9161:function(e,t,n){"use strict";n.r(t);var i;t.default=function(e,t,n){void 0===t&&(t="success");var o=document.querySelector(".notification--sticky"),a=document.createElement(n?"a":"div");function r(){var e;(e=a)&&(clearTimeout(i),e.dataset.go="out",e.addEventListener("animationend",(function(e){return e.target.hidden=!0})))}a.classList.add("notification","notification--"+t,"notification--sticky"),a.dataset.go="in",a.innerHTML=e,n?a.href=n:(a.tabindex=0,a.addEventListener("click",r)),o?o.parentNode.replaceChild(a,o):document.querySelector(".page__content").insertAdjacentElement("beforebegin",a),i=setTimeout(r,3500)}},9100:function(e,t,n){"use strict";function i(e){var t={"ä":"ae","ö":"oe","ü":"ue","á":"a","à":"a","é":"e","è":"e","ß":"ss"};return e.toString().toLowerCase().replace(/\W/g,(function(e){return t[e]||"_"})).replace(/_+/g,"_").replace(/^_|_$/g,"")}n.d(t,{x:function(){return i}})},4401:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const a=new Uint8Array(16);function r(){if(!o){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");o=crypto.getRandomValues.bind(crypto)}return o(a)}const c=[];for(let u=0;u<256;++u)c.push((u+256).toString(16).slice(1));function s(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}var d=function(e,t,n){if(i.randomUUID&&!t&&!e)return i.randomUUID();const o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return s(o)}}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,r),n.exports}r.m=o,e=[],r.O=function(t,n,i,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&i&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},r.d(o,a),o},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return({1642:"URL",4622:"Object",5989:"Element",6415:"details",6502:"IntersectionObserver",6553:"fetch"}[e]||e)+"."+{13:"3648a62a28c3562d9157",831:"3fa77f0bfc82d32941e9",841:"39c2a5d975f0f0865346",909:"c9424b5947c519bdf444",1348:"33ceb62ccaca4dad4718",1449:"c9cd6b8613fe6ed09922",1642:"dc530f098125e630df55",2160:"7a443598dd183d8dc10e",2265:"a085e2143087b65fbe92",2438:"9b400754ebede1ba8feb",2595:"25dd3a74a2fcfc32afeb",2811:"9aab0b3220af86fc47fd",2897:"385aa3257ed1df1e30b2",2907:"f2cc5d2eecad4f4f1a14",3158:"9ded61b887ea0f8adb25",3784:"2f9446cc9de53b52e8e7",3811:"e3d0e68baac8d64b0abe",3978:"215795181664aa9e0203",4255:"7a84be6c8ba3cc8fff15",4274:"efdffe916cebf2fc8937",4397:"a39bce3d4e0178126c19",4421:"0949cfbda1e865e4e49f",4622:"416e76d19a6d7c48c99e",4629:"abb1b84465e3f2cd0c19",4816:"371fd94a72cf9f2793f4",4881:"29a5ea25022ae716e6a5",4941:"54f7f624c595e3ad945f",5192:"b34558f2a7fde60a793e",5249:"2dc3048ecaa72f318909",5288:"a890351ebca163b50f8c",5776:"fabcd83d6c20f356befb",5826:"53d98cd6f27c7a780a8e",5871:"b89026f94a18c6ded303",5989:"7f4c4517c7b2c83988eb",6415:"04147108e412787ef365",6502:"62e66993139a565b4658",6505:"4f36a8a3e973bbc617c0",6553:"a5f0c75b8d95acc3c195",6584:"652e50578daeb2ebcdaf",6870:"3cfa29da5c4b42a06d8b",7284:"c2e697a0411ecf72af5e",7790:"618f125cde77aba2bc92",8386:"6009f6e041e9578f130f",8537:"ccfb7a4700e219c1d93a",8657:"6bab9f8cf41b3ac23fad",8731:"bdfe919bea6663221ebe",8740:"83f281af69cc94b2157d",8778:"540074ec8a4cca1f6119",8813:"84b34d6af465f98497e1",9470:"ccbade76f808e5d69574",9502:"90b0bf8f87a7ac4c533b",9511:"8ef153769134b8c48cd1",9721:"437fd427529ded7865f3"}[e]+".js"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i={},r.l=function(e,t,n,o){if(i[e])i[e].push(t);else{var a,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=e),i[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var o=i[e];if(delete i[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",function(){r.b=document.baseURI||self.location.href;var e={28:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(n,o){i=e[t]=[n,o]}));n.push(i[2]=o);var a=r.p+r.u(t),c=new Error;r.l(a,(function(n){if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,i[1](c)}}),"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],c=n[1],s=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(s)var u=s(r)}for(t&&t(n);d<a.length;d++)o=a[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.nc=void 0,r.O(void 0,[2142,129],(function(){return r(177)}));var c=r.O(void 0,[2142,129],(function(){return r(6931)}));c=r.O(c)}();