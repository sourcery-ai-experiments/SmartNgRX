import{a as l}from"./chunk-ACJ55VM5.js";import"./chunk-7IPMUPM4.js";import{a as n}from"./chunk-2ERZUMO5.js";import{M as a,Sa as c,Ta as o,ka as d,xa as i}from"./chunk-EMXAE7AN.js";import"./chunk-P2VZOJAX.js";var r=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="setstate" class="ngde">setState<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/setState#setstate"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Sets the state of the store. This grabs the current state and adds the new state to it. If the feature and entity already exist, it will overwrite that state while leaving the rest of the store alone.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/setState#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/setState" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">setState</a></span>(<span class="hljs-params ngde">feature: <span class="hljs-built_in ngde">string</span>, entity: <span class="hljs-built_in ngde">string</span>, state: T</span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/setState#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">the feature to set</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entity<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">the entity name to set</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">state<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">T</code></td><td class="ngde"><p class="ngde">the state to set</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends n{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=r,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=a({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-set-state"]],standalone:!0,features:[c([{provide:n,useExisting:e}]),d,o],decls:1,vars:0,template:function(s,f){s&1&&i(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let t=e;return t})(),h=[{path:"",component:p,title:"setState"}],b=h;export{p as DynamicComponent,b as default};
