import{a as l}from"./chunk-ACJ55VM5.js";import"./chunk-7IPMUPM4.js";import{a}from"./chunk-2ERZUMO5.js";import{M as t,Sa as i,Ta as o,ka as d,xa as c}from"./chunk-EMXAE7AN.js";import"./chunk-P2VZOJAX.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="loadbyidspreloadeffect" class="ngde">loadByIdsPreloadEffect<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/loadByIdsPreloadEffect#loadbyidspreloadeffect"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This is the effect that queues up the ids so the dummy records can be loaded into the store while the service is retrieving the real records.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/loadByIdsPreloadEffect#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/loadByIdsPreloadEffect" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">loadByIdsPreloadEffect</a></span>(<span class="hljs-params ngde">feature: StringLiteralSource&#x3C;F>, entityName: StringLiteralSource&#x3C;E>, actions: <a href="/api/smart-ngrx/interfaces/ActionGroup" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ActionGroup</a>&#x3C;T></span>): <span class="hljs-function ngde">(<span class="hljs-params ngde">actions$?: Actions&#x3C;<span class="hljs-built_in ngde">any</span>>, zone?: NgZone</span>) =></span> <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-built_in ngde">never</span>>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/loadByIdsPreloadEffect#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;F></code></td><td class="ngde"><p class="ngde">the feature name this effect is for</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entityName<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;E></code></td><td class="ngde"><p class="ngde">the entity name this effect is for</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">actions<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionGroup&#x3C;T></code></td><td class="ngde"><p class="ngde">the action group for the source provided</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-load-by-ids-preload-effect"]],standalone:!0,features:[i([{provide:a,useExisting:e}]),d,o],decls:1,vars:0,template:function(s,h){s&1&&c(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let n=e;return n})(),f=[{path:"",component:p,title:"loadByIdsPreloadEffect"}],x=f;export{p as DynamicComponent,x as default};
