import{a as r}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a}from"./chunk-RVP6FOET.js";import{L as t,Qa as c,Ra as o,ia as d,va as i}from"./chunk-ECT43PI4.js";import"./chunk-JPKLQMV2.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="rowproxy" class="ngde">rowProxy<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/rowProxy#rowproxy"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Wraps a row in a proxy that will take care of editing the row and firing off the appropriate actions (via the services) to update the store and the server.</p><p class="ngde">Note: this function will attempt to make the keys in the row writeable so if you are relying on NgRX to ensure these are not mutated, you will need to find some other way to do that.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/rowProxy#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/rowProxy" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">rowProxy</a></span>(<span class="hljs-params ngde">row: T, service: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>&#x3C;T, <span class="hljs-built_in ngde">string</span>, <span class="hljs-built_in ngde">string</span>>, parentService: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>&#x3C;P, <span class="hljs-built_in ngde">string</span>, <span class="hljs-built_in ngde">string</span>></span>): <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/RowProxyDelete" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowProxyDelete</a></span> &#x26; T;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/rowProxy#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">row<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">T</code></td><td class="ngde"><p class="ngde">the row to wrap</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">service<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionService&#x3C;T, string, string></code></td><td class="ngde"><p class="ngde">the service that will handle updating the row</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">parentService<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionService&#x3C;P, string, string></code></td><td class="ngde"><p class="ngde">the service that will handle updating the parent row</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-row-proxy"]],standalone:!0,features:[c([{provide:a,useExisting:e}]),d,o],decls:1,vars:0,template:function(s,f){s&1&&i(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"rowProxy"}],m=h;export{p as DynamicComponent,m as default};
