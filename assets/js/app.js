(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return a})),n.d(t,"isMobile",(function(){return o})),n.d(t,"isDarkMode",(function(){return s})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return c})),n.d(t,"makeImagesZoomable",(function(){return r}));var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},s=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},r=function(e,t){var n=t(".js-zoomable");n.on("open",(function(t){o()&&e(t.target).parent().hasClass("kg-gallery-image")&&setTimeout((function(){var t=e(".medium-zoom-image--opened"),n=t[0].style.transform,a=n.substr(0,n.indexOf(" ")),o=parseFloat(a.substr(a.indexOf("(")+1).split(")")[0]),s=n.substr(n.indexOf(" ")+1),i=parseFloat(s.split(",")[1]),c="scale(1) translate3d(0, ".concat(i<0?o*i+i:o*i-i,"px, 0)");t.addClass("medium-zoom-image-mobile"),t[0].style.transform=c}),10)})),n.on("close",(function(){o()&&e(event.target).parent().hasClass("kg-gallery-image")&&e(".medium-zoom-image").removeClass("medium-zoom-image-mobile")}))}},16:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(0),s=n.n(o),i=n(7),c=n.n(i),r=n(8),l=n.n(r),d=(n(6),n(9)),u=n(2),m=n(11),h=n.n(m),f=n(12),g=n.n(f),p=n(1);Object(a.a)({}),s()(document).ready((function(){Object(p.isRTL)()&&s()("html").attr("dir","rtl").addClass("rtl");var e=s()("body"),t=s()(".js-header"),n=s()(".js-open-menu"),a=s()(".js-close-menu"),o=s()(".js-menu"),i=s()(".js-toggle-submenu"),r=s()(".js-submenu-option")[0],m=s()(".js-submenu"),f=s()(".js-recent-articles"),b=s()(".js-open-search"),v=s()(".js-close-search"),j=s()(".js-search"),w=s()(".js-input-search"),k=s()(".js-search-results"),C=s()(".js-no-results"),y=s()(".js-toggle-darkmode"),O=s()(".js-notification-close"),x=localStorage.getItem("theme"),S=null,_=!1;function L(){t.removeClass("submenu-is-active"),i.removeClass("active"),m.removeClass("opened").addClass("closed")}function M(){e.toggleClass("no-scroll-y")}var z=function(e){var t=s()('.js-alert[data-notification="'.concat(e,'"]'));t.addClass("opened"),setTimeout((function(){A(t)}),5e3)},A=function(e){e.removeClass("opened");var t=window.location.toString();if(t.indexOf("?")>0){var n=t.substring(0,t.indexOf("?"));window.history.replaceState({},document.title,n)}};n.click((function(){t.addClass("mobile-menu-opened"),o.addClass("opened"),M()})),a.click((function(){t.removeClass("mobile-menu-opened"),o.removeClass("opened"),M()})),i.click((function(){(_=!_)?(t.addClass("submenu-is-active"),i.addClass("active"),m.removeClass("closed").addClass("opened")):L()})),b.click((function(){j.addClass("opened"),setTimeout((function(){w.focus()}),400),M()})),v.click((function(){w.blur(),j.removeClass("opened"),M()})),w.keyup((function(){if(w.val().length>0&&S){var e=S.search(w.val()),t="";if(e.length>0){for(var n=0,a=e.length;n<a;n++)t+='\n          <article class="m-result">            <a href="'.concat(e[n].url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].title,'</h3>              <span class="m-result__date">').concat(Object(p.formatDate)(e[n].published_at),"</span>            </a>          </article>");C.hide(),k.html(t),k.show()}else k.html(""),k.hide(),C.show()}else k.html(""),k.hide(),C.hide()})),y.change((function(){y.is(":checked")?(s()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(s()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),O.click((function(){A(s()(this).parent())})),s()(window).click((function(e){_&&r&&!r.contains(e.target)&&(_=!1,L())})),x?(s()("html").attr("data-theme",x),"dark"===x&&y.attr("checked",!0)):Object(p.isDarkMode)()&&y.attr("checked",!0);var D,T,I,F,P,R,B,E=document.querySelector(".js-header");E&&new l.a(E,{tolerance:{down:10,up:20},offset:15}).init();f.length>0&&(f.on("init",(function(){Object(u.a)(".js-recent-article-title",50)})),f.slick({adaptiveHeight:!0,arrows:!1,infinite:!1,mobileFirst:!0,variableWidth:!0,rtl:Object(p.isRTL)()})),"undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?s()("[data-aos]").addClass("no-aos-animation"):h.a.init({once:!0,startEvent:"DOMContentLoaded"}),c()(".lozad",{loaded:function(e){e.classList.add("loaded")}}).observe(),Object(d.a)(".js-tooltip"),Object(u.a)(".js-article-card-title",100),Object(u.a)(".js-article-card-title-no-image",250),D=Object(p.getParameterByName)("action"),T=Object(p.getParameterByName)("stripe"),"subscribe"===D&&z("subscribe"),"signup"===D&&(window.location="".concat(ghostHost,"/signup/?action=checkout")),"checkout"===D&&z("signup"),"signin"===D&&z("signin"),"success"===T&&z("checkout"),"undefined"!=typeof ghostSearchApiKey?(I=ghostHost,F=ghostSearchApiKey,P=new GhostContentAPI({url:I,key:F,version:"v2"}),R=[],B={shouldSort:!0,threshold:0,location:0,distance:100,tokenize:!0,matchAllTokens:!1,maxPatternLength:32,minMatchCharLength:1,keys:["title","custom_excerpt","html"]},P.posts.browse({limit:"all",fields:"id, title, url, published_at, custom_excerpt, html"}).then((function(e){for(var t=0,n=e.length;t<n;t++)R.push(e[t]);S=new g.a(R,B)})).catch((function(e){console.log(e)}))):(b.css("visibility","hidden"),v.remove(),j.remove())}))}},[[16,0,1]]]);