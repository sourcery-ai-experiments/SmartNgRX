import{a as o}from"./chunk-TD4XB5UG.js";import"./chunk-NGTZT3PE.js";import{a}from"./chunk-MHNQVTJN.js";import{L as t,Qa as i,Ra as r,ia as d,va as c}from"./chunk-3EY2YW7E.js";import"./chunk-JPKLQMV2.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="removeidfromfeatureparents" class="ngde">removeIdFromFeatureParents<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/removeIdFromFeatureParents#removeidfromfeatureparents"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Used by delete to remove the id from the parent's child field and return the list of parentIds that were affected.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/removeIdFromFeatureParents#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/removeIdFromFeatureParents" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">removeIdFromFeatureParents</a></span>(<span class="hljs-params ngde">entities: Dictionary&#x3C;<a href="/api/smart-ngrx/interfaces/SmartNgRXRowBase" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">SmartNgRXRowBase</a>>, service: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>, parentService: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>, id: <span class="hljs-built_in ngde">string</span></span>): <span class="hljs-built_in ngde">string</span>[];
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/removeIdFromFeatureParents#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">entities<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Dictionary&#x3C;SmartNgRXRowBase></code></td><td class="ngde"><p class="ngde">the entities to look in</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">service<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a></code></td><td class="ngde"><p class="ngde">the service for this row. We use this to grab the feature and entity names to lookup additional information that we need</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">parentService<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a></code></td><td class="ngde"><p class="ngde">the parent service that we will call to report items from parent</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">id<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">the id of the row to delete</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/actions/remove-id-from-feature-parents.function.ts?message=docs(smart-ngrx): describe your changes here...#L8",this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/actions/remove-id-from-feature-parents.function.ts#L8",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-remove-id-from-feature-parents"]],standalone:!0,features:[i([{provide:a,useExisting:e}]),d,r],decls:1,vars:0,template:function(n,m){n&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let s=e;return s})(),h=[{path:"",component:p,title:"removeIdFromFeatureParents"}],v=h;export{p as DynamicComponent,v as default};
