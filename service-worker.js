if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(l.map((e=>d[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-efd7f1cb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7f70c7745be6af6422bb204fbd698d75"},{url:"api/global-options.html",revision:"3d0d88aa8c7dc64497575fe2376484d5"},{url:"api/index.html",revision:"cf1d7ebfb2cd63a71405be563f161189"},{url:"api/loadMore.html",revision:"395ae43b7c3aa2e15e674ff11a0c490e"},{url:"api/pagination.html",revision:"498f1ea23b8f93146f2ce4b8802a7403"},{url:"assets/css/styles.407a6251.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/387.b87fd05d.js",revision:null},{url:"assets/js/43.b28b12a0.js",revision:null},{url:"assets/js/626.6793e23c.js",revision:null},{url:"assets/js/app.2bf37ec7.js",revision:null},{url:"assets/js/runtime~app.4fe49d37.js",revision:null},{url:"assets/js/v-0b36a592.8b023ce5.js",revision:null},{url:"assets/js/v-1324f911.7b12490d.js",revision:null},{url:"assets/js/v-141987ca.c24e3fcd.js",revision:null},{url:"assets/js/v-1c7b2593.a220e309.js",revision:null},{url:"assets/js/v-36c665f0.8cab1fb8.js",revision:null},{url:"assets/js/v-3706649a.715bddda.js",revision:null},{url:"assets/js/v-4b535f1b.70d94a64.js",revision:null},{url:"assets/js/v-4bd15160.c9073253.js",revision:null},{url:"assets/js/v-57ea1ccf.5417b5a4.js",revision:null},{url:"assets/js/v-5d1e647b.15b4c2fb.js",revision:null},{url:"assets/js/v-62cf96d0.3bac63c1.js",revision:null},{url:"assets/js/v-6937fa4e.544d7cc6.js",revision:null},{url:"assets/js/v-6fa8152f.7a536c9d.js",revision:null},{url:"assets/js/v-73517d5d.93b639cd.js",revision:null},{url:"assets/js/v-744497ce.3dd3e71b.js",revision:null},{url:"assets/js/v-74534cee.2906479b.js",revision:null},{url:"assets/js/v-7bceba84.c4514ee3.js",revision:null},{url:"assets/js/v-7f1d6617.562794aa.js",revision:null},{url:"assets/js/v-8daa1a0e.e09c0bff.js",revision:null},{url:"assets/js/v-964bff12.f5429d79.js",revision:null},{url:"assets/js/v-aa9f2af0.3dfb9b34.js",revision:null},{url:"assets/js/v-b06bec6e.dff582b1.js",revision:null},{url:"assets/js/v-bb9fcf52.1ffbb5f0.js",revision:null},{url:"assets/js/v-d0112c92.8476d4cf.js",revision:null},{url:"assets/js/v-d1efe634.a6e662e4.js",revision:null},{url:"assets/js/v-e260681e.c4b2a0e3.js",revision:null},{url:"assets/js/v-e7e57ac2.2d8aea85.js",revision:null},{url:"demo/polling.html",revision:"a1f610ede9ecc35dfac84b68aca6a56e"},{url:"demo/refreshOnFocus.html",revision:"a1f610ede9ecc35dfac84b68aca6a56e"},{url:"donation/Alipay.jpeg",revision:"f21a87a24b6a61fe94079e29e0766df8"},{url:"donation/WeChat.jpeg",revision:"b65a2596ce49069f7bedc7b5659646dc"},{url:"guide/documentation/cacheKey.html",revision:"1e0a7d10bfcf985a4999d86d9fa42976"},{url:"guide/documentation/dataFetching.html",revision:"c9ea5cd9b1953e67c7357508a1de017c"},{url:"guide/documentation/debounce.html",revision:"de2768a8187d5d955c7604b593ad1d3f"},{url:"guide/documentation/errorRetry.html",revision:"b94c4fa832a0040fecc0eeea79eaa135"},{url:"guide/documentation/globalOptions.html",revision:"08540b74193b2aa23d6289cda5d283d1"},{url:"guide/documentation/loadingDelay.html",revision:"8922f1a371f7edb566ed2dd2d5025d32"},{url:"guide/documentation/loadMore.html",revision:"15370f2a355d7a60355e8dec21d568fc"},{url:"guide/documentation/manual.html",revision:"2e553f8dbf13bf7f1914da77e031aaf9"},{url:"guide/documentation/mutation.html",revision:"d298b225ab7f131aee7d72c6b643e6b4"},{url:"guide/documentation/pagination.html",revision:"0103725409093bb9b5a9946452c38dc3"},{url:"guide/documentation/polling.html",revision:"9d51e828e9e3f252abbf4b7d06466a03"},{url:"guide/documentation/ready.html",revision:"e807546df94aff94e19071817898a435"},{url:"guide/documentation/refreshDeps.html",revision:"d148cb6d7ddc96e55f9b713b4588a2cb"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"be6d41e1d6eb0f62a1e5807f4168c988"},{url:"guide/documentation/throttle.html",revision:"74673c992bc85b17d2e934137b78a2ea"},{url:"guide/gettingStarted.html",revision:"1cd66c6a20ebf5a98b631286aee012ab"},{url:"guide/introduction.html",revision:"fa27397dee14552ff0457141aa9dc23a"},{url:"guide/migration.html",revision:"8caa86ab51ba563a64085c84f58b8b1e"},{url:"index.html",revision:"812b171a1093862c79ffcdcb2cc9eb47"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"},{url:"sponsor/index.html",revision:"8ba78ef7db2f5d5b7798c4803a778bf7"}],{})}));
