"use strict";var precacheConfig=[["/scl-season-4/index.html","25910123d53f3c1a2ef1d8d84fd4da51"],["/scl-season-4/static/css/main.8a19c420.css","232bba1c233a9bdc7ed94417e0c035a0"],["/scl-season-4/static/js/main.77cd3051.js","8fd3ed584594f54b8479894cfbaca8a3"],["/scl-season-4/static/media/balcony-blurred.b48765f9.png","b48765f96e4371f9e78e6330202a951f"],["/scl-season-4/static/media/balcony.dc54615e.png","dc54615e846cdeb5a41c4f71a2197826"],["/scl-season-4/static/media/ballroom-blurred.f7876924.png","f78769242fb5c0ec2f775f959c8ee8cd"],["/scl-season-4/static/media/ballroom.5dbb6034.png","5dbb6034397025f4d0e54d833cf76973"],["/scl-season-4/static/media/courtyard-blurred.a4b56e11.png","a4b56e119a5a50f45b4b75b430094205"],["/scl-season-4/static/media/courtyard.713a8bf4.png","713a8bf41eb05bbc9b716747c4d96083"],["/scl-season-4/static/media/gallery-blurred.be2214c3.png","be2214c3b2c065a094500829abea74e3"],["/scl-season-4/static/media/gallery.a1052b9c.png","a1052b9c10f97508539be000f30390a4"],["/scl-season-4/static/media/high-rise-blurred.307ef4f6.png","307ef4f6e791b6c5e9b9b6ecfcb4daf2"],["/scl-season-4/static/media/high-rise.f8af0079.png","f8af0079c158b50e2962f117dc155563"],["/scl-season-4/static/media/library-blurred.9361235e.png","9361235ed229ef69084a9930dec18552"],["/scl-season-4/static/media/library.26bdfb2f.png","26bdfb2fa3c63277ea26327dcc68b332"],["/scl-season-4/static/media/moderne-blurred.77c8e6fa.png","77c8e6fa9d8d72295786b1dba966b60d"],["/scl-season-4/static/media/moderne.bb76d5f0.png","bb76d5f0a5aef8da7a46004164bfd385"],["/scl-season-4/static/media/pub-blurred.29cb2054.png","29cb205402fe1e2604c0ff87b20c03a3"],["/scl-season-4/static/media/pub.017beaa8.png","017beaa880b8eceb3689538e2d4338c7"],["/scl-season-4/static/media/scl_badge_bronze.f3570c98.svg","f3570c980f2a215c2a7d9e51fe4c4b0d"],["/scl-season-4/static/media/scl_badge_challenger.0dab3afc.svg","0dab3afcdac32bc73ba9ade5301562e5"],["/scl-season-4/static/media/scl_badge_copper.8ee1af24.svg","8ee1af24f0516043d90319947ec1e467"],["/scl-season-4/static/media/scl_badge_diamond.61d4a75a.svg","61d4a75aeae930413444115bf09d2942"],["/scl-season-4/static/media/scl_badge_gold.191423fe.svg","191423fe01b9f9fe11dede02af4cd736"],["/scl-season-4/static/media/scl_badge_iron.34980e68.svg","34980e68d51d20f382b150da226723e1"],["/scl-season-4/static/media/scl_badge_platinum.10d3f1f9.svg","10d3f1f9cabe63f5d30f85b6a4b88da3"],["/scl-season-4/static/media/scl_badge_silver.9be7a1b8.svg","9be7a1b8965abc1d712ec6379876ef55"],["/scl-season-4/static/media/sclmanager_logo.09f8612f.svg","09f8612f418bb223aab499ee4d5e3499"],["/scl-season-4/static/media/terrace-blurred.f77412d3.png","f77412d3c43efbe1acd9dd41c63c1c41"],["/scl-season-4/static/media/veranda-blurred.38f1c428.png","38f1c428410a32c5e033dcfcb8d36738"],["/scl-season-4/static/media/veranda.cb03b8f2.png","cb03b8f263df06f472e57624b40f8f62"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,s,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return s.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!s.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,s=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,t),e=urlsToCacheKeys.has(s));var c="/scl-season-4/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(s=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(s)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});