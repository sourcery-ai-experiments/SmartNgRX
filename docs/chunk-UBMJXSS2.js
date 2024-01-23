import{a as g}from"./chunk-NCOWMHCX.js";import{a as p}from"./chunk-EX7AWHW4.js";import"./chunk-3IFCZJP4.js";import{a as i}from"./chunk-AG5QLLJG.js";import{M as r,Qa as l,Qb as P,Ra as h,ia as c,wa as d}from"./chunk-ESTVDDOP.js";import{a as s,b as a,g as x}from"./chunk-P2VZOJAX.js";var f=x(P());var w={title:"ProxyChild",mdFile:"./index.md",order:7,category:g},t=w;var m=[];var C={},u=C;var D=`<h1 id="proxychild" class="ngde">ProxyChild<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/proxy-child#proxychild"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">Now that we've setup our state management, the last step is being able to get the data out of the store and into our components where we can see them. This is where Smart Selectors come in.</p><p class="ngde">But before we can create a selector, we need to understand the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/ProxyChild" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ProxyChild</a></code> interface. It has the following components, as outlined in the API documentation:</p><ul class="ngde"><li class="ngde"><p class="ngde">childFeature - The name of the feature the child entity was registered with. We need to supply this and the childFieldName so that the code can lookup information about the entity we've already supplied from <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/provideSmartFeatureEntities" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideSmartFeatureEntities</a></code>.</p></li><li class="ngde"><p class="ngde">childEntity - The name of the child entity.</p></li><li class="ngde"><p class="ngde">childSelector - the selector we use to retrieve the information for the child. The childSelector is an EntityState selector. This allows us to lookup an ID in the entity quickly.</p></li><li class="ngde"><p class="ngde">parentField - the name of the field in the parent entity that contains the IDs of the children.</p></li></ul>`,S=(()=>{let e=class e extends i{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=D,this.page=t,this.demoAssets=u}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-proxy-child"]],standalone:!0,features:[l([{provide:i,useExisting:e},m,t.providers??[]]),c,h],decls:1,vars:0,template:function(n,v){n&1&&d(0,"ng-doc-page")},dependencies:[p],encapsulation:2,changeDetection:0});let o=e;return o})(),N=[a(s({},(0,f.isRoute)(t.route)?t.route:{}),{path:"",component:S,title:"ProxyChild"})],b=N;export{S as DynamicComponent,b as default};
