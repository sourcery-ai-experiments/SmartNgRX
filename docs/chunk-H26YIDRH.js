import{a as l}from"./chunk-BXNM6JGC.js";import"./chunk-PLMEWMPA.js";import{a as t}from"./chunk-BRFVUSOP.js";import{Ba as i,Ca as o,K as n,da as d,na as c}from"./chunk-OM4NYFKY.js";import"./chunk-RS6LHQUM.js";var g='<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Class">Class</span></div><span class="ng-doc-modifier ngde" indexable="false" data-content="abstract">abstract</span><h1 id="effectservice" class="ngde">EffectService<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/EffectService#effectservice"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This is the abstract class that all services the Effects use must implement.</p></section><section class="ngde"><h2 id="properties" class="ngde">Properties<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/EffectService#properties"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-properties-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-properties-table-name ngde">Name</th><th class="ng-doc-properties-table-type ngde">Type</th><th class="ng-doc-properties-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="load" data-slugtype="member" id="load" class="ngde"><td indexable="false" class="ngde"><span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Abstract" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="abstract">a</span> </span>load<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">() => Observable&#x3C;T[]></code></td><td class="ngde"><p class="ngde">Used to load ALL the rows from the server for the given entity.</p></td></tr><tr data-slug="loadByIds" data-slugtype="member" id="loadByIds" class="ngde"><td indexable="false" class="ngde"><span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Abstract" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="abstract">a</span> </span>loadByIds<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">(ids: string[]) => Observable&#x3C;T[]></code></td><td class="ngde"><p class="ngde">Loads the rows represented by the array of ids passed in.</p></td></tr></tbody></table></div></section>',p=(()=>{let e=class e extends t{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n({type:e,selectors:[["ng-doc-page-api-smart-ngrx-classes-effect-service"]],standalone:!0,features:[i([{provide:t,useExisting:e}]),d,o],decls:1,vars:0,template:function(a,b){a&1&&c(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let s=e;return s})(),f=[{path:"",component:p,title:"EffectService"}],u=f;export{p as DynamicComponent,u as default};
