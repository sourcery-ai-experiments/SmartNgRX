import{a as h}from"./chunk-CGH4GANM.js";import"./chunk-NCOWMHCX.js";import{a as g}from"./chunk-TD4XB5UG.js";import"./chunk-NGTZT3PE.js";import{a as t}from"./chunk-MHNQVTJN.js";import{L as o,Qa as r,Ra as d,Ub as v,ia as c,va as p}from"./chunk-3EY2YW7E.js";import{a as l,b as i,g as j}from"./chunk-JPKLQMV2.js";var y=j(v());var w={title:"Retrieving Rows",mdFile:"./index.md",order:1,category:h},e=w;var u=[];var k={},m=k;var S=`<h1 id="retrieving-rows" class="ngde">Retrieving Rows<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/crud-support/retrieving#retrieving-rows"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><h2 id="introduction" class="ngde">Introduction<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/crud-support/retrieving#introduction"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">SmartNgRX expects every row within an entity that has children to have an array of IDs that point to the children. By using the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></code> function, you will automatically get the children of the row you are retrieving when you access the array element. You will not need to dispatch any actions for this to happen. It will just work.</p><p class="ngde">See the <a href="/using-smart-ng-rx/smart-selectors" class="ngde">Smart Selectors</a> section for more information.</p><h2 id="effects-service" class="ngde">Effects Service<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/crud-support/retrieving#effects-service"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">What you will need to provide is the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/EffectService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">EffectService</a></code> that will retrieve the rows from the server. You will need to implement the <code class="ngde">loadByIds</code> method, which will be called with the list of IDs the code has determined it does not yet have or have been marked as dirty and it needs to render on the screen some place.</p><p class="ngde">Keep in mind that any time you access an array element directly, you will trigger the retrieval process for that row. This is by design. If you want to retrieve the ID and not the row, you can use the array's <code class="ngde">rawArray</code> property. You might use this if you are iterating through the array for the purposes of virtual scrolling as we've done in the example code.</p><h2 id="sample-code" class="ngde">Sample Code<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/crud-support/retrieving#sample-code"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Here is a sample implementation of a <code class="ngde">loadByIds</code> method from the SmartNgRX Demo application:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">loadByIds</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">ids: <span class="hljs-built_in ngde">string</span>[]</span>) =></span> <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-title class_ ngde">Location</span>[]> = (<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">  ids: </span><span class="hljs-built_in ngde">string</span><span class="hljs-params ngde">[],</span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>) => {
</span><span class="line ngde">  <span class="hljs-keyword ngde">return</span> <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">http</span>.<span class="hljs-property ngde">post</span>&#x3C;<span class="hljs-title class_ ngde">Location</span>[]>(<span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">apiLocation</span>, ids);
</span><span class="line ngde">};
</span></code></pre><p class="ngde">This code assumes that everything you need for the row is available from the server.</p><p class="ngde">You might notice that we are using a POST instead of a GET to retrieve the data. If you prefer, you can use a GET. We've chosen to use a POST because we can send a list of IDs to the server and we want that list of IDs to be as large as needed and not limited by the URL size restrictions inherent in using GET.</p><h2 id="retrieving-the-top-level-store" class="ngde">Retrieving the top level store<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/crud-support/retrieving#retrieving-the-top-level-store"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">The obvious question you might ask is, "if everything has a parent, how can I retrieve the top level data?" The answer is that you can set the <code class="ngde">isInitialRow</code> field to <code class="ngde">true</code> in the entity definition. This is a special marker that tells SmartNgRX that this row has no parent and should be retrieved when the entity is loaded.</p><p class="ngde">You'll need to specify the loadByIds method to retrieve the top level data. This will be the ids of the child fields you'll need to retrieve when the child data is requested.</p><p class="ngde">In the demo project, we've created a <code class="ngde">Top</code> Entity that has no parent.</p><p class="ngde">Here is a typical <code class="ngde">Top</code> entity definition from the demo project:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">const</span> <span class="hljs-attr ngde">standardTopDefinition</span>: <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/SmartEntityDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">SmartEntityDefinition</a></span>&#x3C;<span class="hljs-title class_ ngde">Top</span>> = {
</span><span class="line ngde">  <span class="hljs-attr ngde">entityName</span>: <span class="hljs-string ngde">'top'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">effectServiceToken</span>: topEffectsServiceToken,
</span><span class="line ngde">  <span class="hljs-attr ngde">isInitialRow</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">defaultRow</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">id</span>) =></span> ({
</span><span class="line ngde">    id,
</span><span class="line ngde">    <span class="hljs-attr ngde">locations</span>: [],
</span><span class="line ngde">    <span class="hljs-attr ngde">isDirty</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">  }),
</span><span class="line ngde">};
</span></code></pre><p class="ngde">It will retrieve the locations ids. You can have your top level entity retrieve as many children as you need.</p><p class="ngde">To select the locations, our code looks like this:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-comment ngde">// First we use a standard selector to retrieve the top entity</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">const</span> selectTopEntities = <span class="hljs-title function_ ngde">createSelector</span>(selectTreeStandardState, <span class="hljs-function ngde">(<span class="hljs-params ngde">state</span>) =></span> {
</span><span class="line ngde">  <span class="hljs-keyword ngde">return</span> state.<span class="hljs-property ngde">top</span>;
</span><span class="line ngde">});
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-comment ngde">// then we use a smart selector to retrieve the top row and the locations</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">const</span> selectTopLocations = <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></span>(selectTopEntities, [
</span><span class="line ngde">  {
</span><span class="line ngde">    <span class="hljs-attr ngde">childFeature</span>: <span class="hljs-string ngde">'tree-standard'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">childEntity</span>: <span class="hljs-string ngde">'locations'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">parentField</span>: <span class="hljs-string ngde">'locations'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">parentFeature</span>: <span class="hljs-string ngde">'tree-standard'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">parentEntity</span>: <span class="hljs-string ngde">'top'</span>,
</span><span class="line ngde">    <span class="hljs-attr ngde">childSelector</span>: selectLocationsDepartments,
</span><span class="line ngde">  },
</span><span class="line ngde">]);
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-comment ngde">// Finally, we create a standard selector to pick the locations out of the</span>
</span><span class="line ngde"><span class="hljs-comment ngde">// top smart selector</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">const</span> selectLocations = <span class="hljs-title function_ ngde">createSelector</span>(selectTopLocations, <span class="hljs-function ngde">(<span class="hljs-params ngde">tops</span>) =></span> {
</span><span class="line ngde">  <span class="hljs-keyword ngde">return</span> (tops.<span class="hljs-property ngde">ids</span>.<span class="hljs-property ngde">length</span> === <span class="hljs-number ngde">1</span> ? tops.<span class="hljs-property ngde">entities</span>[tops.<span class="hljs-property ngde">ids</span>[<span class="hljs-number ngde">0</span>]]!.<span class="hljs-property ngde">locations</span> : []) <span class="hljs-keyword ngde">as</span> <span class="hljs-title class_ ngde">Location</span>[];
</span><span class="line ngde">});
</span></code></pre><p class="ngde">By setting up the code in this way, you'll never have to dispatch an action to retrieve the top level data. This is all handled internally by SmartNgRX.</p>`,x=(()=>{let s=class s extends t{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=S,this.editSourceFileUrl="https://github.com/DaveMBush/SmartNgRX/edit/main/apps/documentation/src/app/using-smart-ng-rx/crud-support/retrieving/index.md?message=docs(retrieving): describe your changes here...",this.page=e,this.demoAssets=m}};s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=o({type:s,selectors:[["ng-doc-page-using-smart-ng-rx-crud-support-retrieving"]],standalone:!0,features:[r([{provide:t,useExisting:s},u,e.providers??[]]),c,d],decls:1,vars:0,template:function(a,R){a&1&&p(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0});let n=s;return n})(),T=[i(l({},(0,y.isRoute)(e.route)?e.route:{}),{path:"",component:x,title:"Retrieving Rows"})],O=T;export{x as DynamicComponent,O as default};
