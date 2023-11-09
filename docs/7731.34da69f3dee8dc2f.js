"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7731],{7731:(u,l,s)=>{s.r(l),s.d(l,{DynamicComponent:()=>p,default:()=>j});var c=s(6331),i=s(9406),r=s(248);const a={title:"Effects Service",mdFile:"./index.md",order:2,category:s(8235).Z},h=[],f={};var n=s(1720);let p=(()=>{var e;class d extends c.a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent='<h1 id="effects-service" class="ngde">Effects Service<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/effects-service#effects-service"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">The Effects Service is the service that an effect calls to perform CRUD operations against the server. You can put any code you want in this service as long as it supports the interface and achieves the stated purpose. This allows you to retrieve data from the server in whatever way you need.</p><p class="ngde">To create an effect service, you\'ll need to inherit from the <code class="ngde">EffectService&#x3C;T></code> abstract class and implement the abstract methods. The <code class="ngde">EffectService&#x3C;T></code> abstract class is a generic class that takes the type of the entity as the generic type. This allows us to ensure that the methods you implement are returning the correct type.</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-comment ngde">// user-effects.service.ts</span>\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">HttpClient</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'@angular/common/http\'</span>;\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">Injectable</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'@angular/core\'</span>;\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { map, <span class="hljs-title class_ ngde">Observable</span>, <span class="hljs-keyword ngde">of</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'rxjs\'</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/classes/EffectService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">EffectService</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'@smart/smart-ngrx/effects/effect-service\'</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">User</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">\'./user.interface\'</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-meta ngde">@Injectable</span>()\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">UserEffectsService</span> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ inherited__ ngde"><a href="/api/smart-ngrx/classes/EffectService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">EffectService</a></span>&#x3C;<span class="hljs-title class_ ngde">Department</span>> {\n</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"><span class="hljs-keyword ngde">private</span> http: HttpClient</span>) {\n</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();\n</span><span class="line ngde">  }\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">load</span>: <span class="hljs-function ngde">() =></span> <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-title class_ ngde">User</span>[]> = <span class="hljs-function ngde">() =></span> {\n</span><span class="line ngde">    <span class="hljs-comment ngde">// some way to retrieve all the users from the server and</span>\n</span><span class="line ngde">    <span class="hljs-comment ngde">// return that list as `Observable&#x3C;User[]>`</span>\n</span><span class="line ngde">  };\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">loadByIds</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">ids: <span class="hljs-built_in ngde">string</span>[]</span>) =></span> <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-title class_ ngde">User</span>[]> = <span class="hljs-function ngde">(<span class="hljs-params ngde">ids: <span class="hljs-built_in ngde">string</span>[]</span>) =></span> {\n</span><span class="line ngde">    <span class="hljs-comment ngde">// retrieve the list of rows represented by the list of ids</span>\n</span><span class="line ngde">  };\n</span><span class="line ngde">}\n</span></code></pre><p class="ngde">Because this will be used by an effect, and the effect needs some way of knowing what service to call, we need to have some way of passing the service down into the effect. The best way to do this is by passing in an <code class="ngde">InjectionToken</code></p>',this.page=a,this.demoAssets=f}}return(e=d).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-effects-service"]],standalone:!0,features:[n._Bn([{provide:c.a,useExisting:e},h,a.providers??[]]),n.qOj,n.jDz],decls:1,vars:0,template:function(t,C){1&t&&n._UZ(0,"ng-doc-page")},dependencies:[i.z],encapsulation:2,changeDetection:0}),d})();const j=[{...(0,r.isRoute)(a.route)?a.route:{},path:"",component:p,title:"Effects Service"}]}}]);