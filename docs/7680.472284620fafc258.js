"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7680],{7680:(f,o,e)=>{e.r(o),e.d(o,{DynamicComponent:()=>c,default:()=>y});var i=e(5950),l=e(808),g=e(9485);const t={title:"Registration",mdFile:"./index.md",order:5,category:e(5113).Z},h=[],u={};var n=e(21);let c=(()=>{var s;class r extends i.a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent='<h1 id="registration" class="ngde">Registration<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/registration#registration"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">Now that we have all the pieces in place, we can register our definitions with Smart NgRX so that they can be used by the library.</p><p class="ngde">We register our definitions by feature. By making even your common NgRX entities feature specific, all your NgRX code looks the same and is easy to move to another feature as needed.</p><p class="ngde">The following is how we would register our User entity with Smart NgRX:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde">@NgModule</span>({\n</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>\n</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [<span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/provideSmartFeatureEntities" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideSmartFeatureEntities</a></span>(<span class="hljs-string ngde">\'shared\'</span>, [usersDefinition])],\n</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>\n</span><span class="line ngde">})\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SharedModule</span> {}\n</span></code></pre><p class="ngde">If there are other entities you want to register with this feature, you would add them to the array of entity definitions.</p>',this.page=t,this.demoAssets=u}}return(s=r).\u0275fac=function(a){return new(a||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["ng-doc-page-using-smart-ng-rx-registration"]],standalone:!0,features:[n._Bn([{provide:i.a,useExisting:s},h,t.providers??[]]),n.qOj,n.jDz],decls:1,vars:0,template:function(a,D){1&a&&n._UZ(0,"ng-doc-page")},dependencies:[l.z],encapsulation:2,changeDetection:0}),r})();const y=[{...(0,g.isRoute)(t.route)?t.route:{},path:"",component:c,title:"Registration"}]}}]);