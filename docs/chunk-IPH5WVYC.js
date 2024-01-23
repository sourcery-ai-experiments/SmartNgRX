import{a as l}from"./chunk-EX7AWHW4.js";import"./chunk-3IFCZJP4.js";import{a}from"./chunk-AG5QLLJG.js";import{M as t,Qa as o,Ra as c,ia as d,wa as i}from"./chunk-ESTVDDOP.js";import"./chunk-P2VZOJAX.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="store" class="ngde">store<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/store#store"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Internal function used to provide and retrieve a global store that is needed by code that does not have DI.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/store#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/store" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">store</a></span>(<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">  storeParam?: Store&#x3C;</span><span class="hljs-built_in ngde">object</span>> | <span class="hljs-literal ngde">undefined</span><span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde">Store</span>&#x3C;<span class="hljs-built_in ngde">object</span>> | <span class="hljs-literal ngde">undefined</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/store#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">storeParam<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Store&#x3C;object> | undefined</code></td><td class="ngde"><p class="ngde">This is an optional parameter. If it is there, we set the store. Otherwise, we use what is already set.</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-store"]],standalone:!0,features:[o([{provide:a,useExisting:e}]),d,c],decls:1,vars:0,template:function(s,f){s&1&&i(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"store"}],b=h;export{p as DynamicComponent,b as default};
