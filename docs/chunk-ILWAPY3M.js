import{a as h}from"./chunk-NCOWMHCX.js";import{a as g}from"./chunk-ACJ55VM5.js";import"./chunk-7IPMUPM4.js";import{a}from"./chunk-2ERZUMO5.js";import{M as r,Sa as d,Ta as p,Tb as x,ka as l,xa as i}from"./chunk-EMXAE7AN.js";import{a as c,b as o,g as S}from"./chunk-P2VZOJAX.js";var u=S(x());var k={title:"Smart Selector",mdFile:"./index.md",order:8,category:h},s=k;var m=[];var w={},f=w;var j=`<h1 id="smart-selector" class="ngde">Smart Selector<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/smart-selector#smart-selector"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">And now, we can use the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/ChildDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ChildDefinition</a></code> interface to create a selector that will retrieve the child entity from the parent entity. We can use this selector in our components to retrieve the child entity from the store.</p><p class="ngde">Note that the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></code> function takes an array of <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/ChildDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ChildDefinition</a></code> objects. This allows us to create a selector that will retrieve multiple child entities from the parent entity. That is, one row may point to multiple children. By passing the array you can account for each of them with one call.</p><p class="ngde">In the case where your <code class="ngde">User</code> row might have some child field named, <code class="ngde">roles</code> your <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></code> call might look like this:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">const</span> selectUserChildren = <a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a>&#x3C;<span class="hljs-title class_ ngde">Location</span>>(selectUser, [
</span><span class="line ngde">  {
</span><span class="line ngde">    <span class="hljs-attr ngde">childFeature</span>: <span class="hljs-string ngde">'shared'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">childEntity</span>: <span class="hljs-string ngde">'roles'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">parentField</span>: <span class="hljs-string ngde">'roles'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">parentFeature</span>: <span class="hljs-string ngde">'shared'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">parentEntity</span>: <span class="hljs-string ngde">'users'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">childSelector</span>: <a href="/api/smart-ngrx/functions/castTo" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">castTo</a>&#x3C;<span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/type-aliases/SmartNgRXRowBaseSelector" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">SmartNgRXRowBaseSelector</a></span>>(selectRoles),
</span><span class="line ngde">  },
</span><span class="line ngde">]);
</span></code></pre><p class="ngde">For now, the first parameter to <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></code> expects a selector that returns the parent entity. Eventually, we'd like for this parameter to accept any valid selector it can be used with existing code that does not use NgRX Entities.</p>`,D=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=j,this.page=s,this.demoAssets=f}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-smart-selector"]],standalone:!0,features:[d([{provide:a,useExisting:e},m,s.providers??[]]),l,p],decls:1,vars:0,template:function(n,C){n&1&&i(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0});let t=e;return t})(),R=[o(c({},(0,u.isRoute)(s.route)?s.route:{}),{path:"",component:D,title:"Smart Selector"})],L=R;export{D as DynamicComponent,L as default};
