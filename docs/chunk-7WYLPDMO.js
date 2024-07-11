import{a as o}from"./chunk-TD4XB5UG.js";import"./chunk-NGTZT3PE.js";import{a as e}from"./chunk-MHNQVTJN.js";import{L as t,Qa as d,Ra as i,ia as c,va as l}from"./chunk-3EY2YW7E.js";import"./chunk-JPKLQMV2.js";var p=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="castto" class="ngde">castTo<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/castTo#castto"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Casts a value to a given type. This is instead of using:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">interface</span> <span class="hljs-title class_ ngde">Foo</span> {
</span><span class="line ngde"><span class="hljs-attr ngde">bar</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">}
</span><span class="line ngde"><span class="hljs-keyword ngde">const</span> <span class="hljs-attr ngde">foo</span>: <span class="hljs-title class_ ngde">Foo</span> = { <span class="hljs-attr ngde">bar</span>: <span class="hljs-string ngde">'baz'</span> };
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-comment ngde">// cast foo to a Record&#x3C;string, string> so we</span>
</span><span class="line ngde"><span class="hljs-comment ngde">// can access bar as a string index</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">const</span> bar = foo <span class="hljs-keyword ngde">as</span> <span class="hljs-built_in ngde">unknown</span> <span class="hljs-keyword ngde">as</span> <span class="hljs-title class_ ngde">Record</span>&#x3C;<span class="hljs-built_in ngde">string</span>, <span class="hljs-built_in ngde">string</span>>;
</span><span class="line ngde"><span class="hljs-keyword ngde">const</span> barVar = bar[<span class="hljs-string ngde">'bar'</span>];
</span></code></pre><h2 id="usage" class="ngde">Usage:<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/castTo#usage"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">interface</span> <span class="hljs-title class_ ngde">Foo</span> {
</span><span class="line ngde"><span class="hljs-attr ngde">bar</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">}
</span><span class="line ngde"><span class="hljs-keyword ngde">const</span> <span class="hljs-attr ngde">foo</span>: <span class="hljs-title class_ ngde">Foo</span> = { <span class="hljs-attr ngde">bar</span>: <span class="hljs-string ngde">'baz'</span> };
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-comment ngde">// cast foo to a Record&#x3C;string, string> so we</span>
</span><span class="line ngde"><span class="hljs-comment ngde">// can access bar as a string index</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">const</span> bar = <a href="/api/smart-ngrx/functions/castTo" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">castTo</a>&#x3C;<span class="hljs-title class_ ngde">Record</span>&#x3C;<span class="hljs-built_in ngde">string</span>, <span class="hljs-built_in ngde">string</span>>>(foo);
</span><span class="line ngde"><span class="hljs-keyword ngde">const</span> barVar = bar[<span class="hljs-string ngde">'bar'</span>];
</span></code></pre></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/castTo#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/castTo" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">castTo</a></span>(<span class="hljs-params ngde">value: <span class="hljs-built_in ngde">unknown</span></span>): T;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/castTo#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">value<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">unknown</code></td><td class="ngde"><p class="ngde">the value to cast</p></td></tr></tbody></table></div></section>`,r=(()=>{let s=class s extends e{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/libs/smart-ngrx/src/common/cast-to.function.ts?message=docs(smart-ngrx): describe your changes here...#L1",this.viewSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/blob/release/libs/smart-ngrx/src/common/cast-to.function.ts#L1",this.pageContent=p,this.demo=void 0,this.demoAssets=void 0}};s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=t({type:s,selectors:[["ng-doc-page-api-smart-ngrx-functions-cast-to"]],standalone:!0,features:[d([{provide:e,useExisting:s}]),c,i],decls:1,vars:0,template:function(a,u){a&1&&l(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let n=s;return n})(),h=[{path:"",component:r,title:"castTo"}],j=h;export{r as DynamicComponent,j as default};
