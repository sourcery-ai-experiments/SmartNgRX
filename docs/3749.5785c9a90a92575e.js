"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3749],{3749:(r,c,s)=>{s.r(c),s.d(c,{DynamicComponent:()=>l,default:()=>g});var t=s(9649),p=s(5789),e=s(7514);let l=(()=>{var n;class i extends t.a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent='<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">dynamic-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="bufferaction" class="ngde">bufferAction<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/dynamic-ngrx/functions/bufferAction#bufferaction"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This is an internal function that is used by the Effects to buffer IDs of an action coming into an effect so that we can dispatch them independently but send them to the server in a single request.</p><p class="ngde">NOTE: bufferAction assumes an array of ids is passed to the action it is buffering.</p><h2 id="usage" class="ngde">Usage:<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/dynamic-ngrx/functions/bufferAction#usage"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"> load$ = <span class="hljs-title function_ ngde">createEffect</span>(\n</span><span class="line ngde">      (<span class="hljs-params ngde"></span>\n</span><span class="line ngde"><span class="hljs-params ngde">        actions$ = inject(Actions),</span>\n</span><span class="line ngde"><span class="hljs-params ngde">        actionService = inject(effectServiceToken)</span>\n</span><span class="line ngde"><span class="hljs-params ngde">      </span>) => {\n</span><span class="line ngde">        <span class="hljs-keyword ngde">return</span> actions$.<span class="hljs-title function_ ngde">pipe</span>(\n</span><span class="line ngde">          <span class="hljs-title function_ ngde">ofType</span>(actions.<span class="hljs-property ngde">loadByIds</span>),\n</span><span class="line ngde">          <span class="hljs-title function_ ngde"><a href="/api/dynamic-ngrx/functions/bufferAction" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">bufferAction</a></span>(), <span class="hljs-comment ngde">// &#x3C;--- buffer the ids</span>\n</span><span class="line ngde">          <span class="hljs-title function_ ngde">mergeMap</span>(<span class="hljs-function ngde">(<span class="hljs-params ngde">ids</span>) =></span> actionService.<span class="hljs-title function_ ngde">loadByIds</span>(ids)),\n</span><span class="line ngde">          <span class="hljs-title function_ ngde">map</span>(<span class="hljs-function ngde">(<span class="hljs-params ngde">rows</span>) =></span> actions.<span class="hljs-title function_ ngde">loadByIdsSuccess</span>({ rows }))\n</span><span class="line ngde">        );\n</span><span class="line ngde">      },\n</span><span class="line ngde">      { <span class="hljs-attr ngde">functional</span>: <span class="hljs-literal ngde">true</span> }\n</span><span class="line ngde">    );\n</span></code></pre></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/dynamic-ngrx/functions/bufferAction#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/dynamic-ngrx/functions/bufferAction" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">bufferAction</a></span>(<span class="hljs-params ngde"></span>\n</span><span class="line ngde"><span class="hljs-params ngde">  bufferTime: </span><span class="hljs-built_in ngde">number</span> = <span class="hljs-number ngde">1</span><span class="hljs-params ngde"></span>\n</span><span class="line ngde"><span class="hljs-params ngde"></span>): <span class="hljs-function ngde">(<span class="hljs-params ngde">source: Observable&#x3C;Action></span>) =></span> <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-built_in ngde">string</span>[]>;\n</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/dynamic-ngrx/functions/bufferAction#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">bufferTime<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">number</code></td><td class="ngde"><p class="ngde">The time to buffer the ids before sending them to the server. The default is 1ms which only allow the buffer to last until the thread frees up and is probably all we will ever need.</p></td></tr></tbody></table></div></section>',this.demo=void 0,this.demoAssets=void 0}}return(n=i).\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-doc-page-api-dynamic-ngrx-functions-buffer-action"]],standalone:!0,features:[e._Bn([{provide:t.a,useExisting:n}]),e.qOj,e.jDz],decls:1,vars:0,template:function(a,f){1&a&&e._UZ(0,"ng-doc-page")},dependencies:[p.z],encapsulation:2,changeDetection:0}),i})();const g=[{path:"",component:l,title:"bufferAction"}]}}]);