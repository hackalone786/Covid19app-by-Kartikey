(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){c(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,c,r){var i=o.URL||o.webkitURL,s=document.createElement("a");s.download=c=c||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):n(s.href)?e(t,c,r):a(s,s.target="_blank")):(s.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,c){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),o);else if(n(t))e(t,o,c);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){a(r)}))}}:function(t,n,a,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var r="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&i)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},l.readAsDataURL(t)}else{var b=o.URL||o.webkitURL,u=b.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout((function(){b.revokeObjectURL(u)}),4e4)}});o.saveAs=c.saveAs=c,t.exports=c})?a.apply(e,[]):a)||(t.exports=o)},j1ZV:function(t,e,n){"use strict";n.r(e),n.d(e,"ComponentsModule",(function(){return q}));var a=n("tyNb"),o=n("lJxs"),c=n("aAC7"),r=n("3Pt+"),i=n("fXoL"),s=n("vkgz"),l=n("2Vo4"),b=n("qc5V");let u=(()=>{class t{constructor(t){this.apiService=t,this.localDataSubject=new l.a(null),this._localData=this.localDataSubject.asObservable()}fetchData(){return this.apiService.get("/timeseries.json").pipe(Object(s.a)(t=>{this.localDataSubject.next(t)}))}clearData(){this.localDataSubject.next(null)}getAllData(){return this._localData}getSummaryNumbers(){return this._localData.pipe(Object(o.a)(t=>{const e={confirmed:0,deaths:0,recovered:0,date:""};return t&&Object.keys(t).forEach(n=>{if(t[n]){const a=t[n][t[n].length-1];e.date=a.date,e.confirmed=e.confirmed+a.confirmed,e.deaths=e.deaths+a.deaths,e.recovered=e.recovered+a.recovered}}),e}))}getListCountries(){return this._localData.pipe(Object(o.a)(t=>t?Object.keys(t):[]))}getByCountryName(t){return this._localData.pipe(Object(o.a)(e=>{if(e&&e[t])return[...e[t]]}))}}return t.\u0275fac=function(e){return new(e||t)(i.Xb(b.a))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n("/t3+"),p=n("NFeN"),m=n("kmnG"),f=n("d3UM"),h=n("ofXK"),g=n("Wp6s"),C=n("FKr1"),v=n("sYmb");function y(t,e){if(1&t&&(i.Tb(0,"mat-option",15),i.uc(1),i.Sb()),2&t){const t=e.$implicit;i.jc("value",t.id),i.Cb(1),i.wc(" ",t.text," ")}}let O=(()=>{class t{constructor(t,e){this.covidDataStoreService=t,this.appSettingsService=e,this.languages=c.c,this.langControl=new r.b(c.b)}ngOnInit(){this.totalConfirmed$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(o.a)(t=>t.confirmed.toLocaleString())),this.totalRecovered$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(o.a)(t=>t.recovered.toLocaleString())),this.totalDeaths$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(o.a)(t=>t.deaths.toLocaleString())),this.lastUpdateDate$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(o.a)(t=>t.date))}onChangeLang(t){t&&t.value&&this.appSettingsService.setLanguage(t.value)}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(u),i.Nb(c.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-components"]],decls:45,vars:23,consts:[[1,"header"],[1,"brand"],["src","assets/images/large-icon.png"],[1,"fill-remaining-space"],[1,"summary-wrap"],["title","Confirmed",1,"text-orange"],[1,"number"],["title","Deaths",1,"text-red"],["title","Recovered",1,"text-green"],[1,"info"],[1,"lang-wrap"],[3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["href","https://github.com/pomber/covid19"],["href","https://github.com/hackalone786/"],[3,"value"]],template:function(t,e){1&t&&(i.Tb(0,"mat-toolbar",0),i.Tb(1,"span",1),i.Ob(2,"img",2),i.uc(3," Covid19 Chart by Kartikey "),i.Sb(),i.Ob(4,"span",3),i.Tb(5,"div",4),i.Tb(6,"mat-icon",5),i.uc(7,"sentiment_dissatisfied"),i.Sb(),i.Tb(8,"span",6),i.uc(9),i.ec(10,"async"),i.Sb(),i.Tb(11,"mat-icon",7),i.uc(12,"sentiment_very_dissatisfied"),i.Sb(),i.Tb(13,"span",6),i.uc(14),i.ec(15,"async"),i.Sb(),i.Tb(16,"mat-icon",8),i.uc(17,"sentiment_very_satisfied"),i.Sb(),i.Tb(18,"span",6),i.uc(19),i.ec(20,"async"),i.Sb(),i.Sb(),i.Sb(),i.Tb(21,"mat-toolbar",9),i.Tb(22,"span"),i.uc(23),i.ec(24,"translate"),i.ec(25,"async"),i.Sb(),i.Ob(26,"span",3),i.Tb(27,"div",10),i.Tb(28,"mat-form-field"),i.Tb(29,"mat-select",11),i.bc("selectionChange",(function(t){return e.onChangeLang(t)})),i.tc(30,y,2,2,"mat-option",12),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(31,"mat-card"),i.Ob(32,"router-outlet"),i.Sb(),i.Tb(33,"mat-toolbar",9),i.Tb(34,"span"),i.uc(35),i.ec(36,"translate"),i.Tb(37,"a",13),i.uc(38,""),i.Sb(),i.Sb(),i.Ob(39,"span",3),i.Tb(40,"span"),i.uc(41),i.ec(42,"translate"),i.Tb(43,"a",14),i.uc(44,"@"),i.Sb(),i.Sb(),i.Sb()),2&t&&(i.Cb(9),i.vc(i.fc(10,9,e.totalConfirmed$)),i.Cb(5),i.vc(i.fc(15,11,e.totalDeaths$)),i.Cb(5),i.vc(i.fc(20,13,e.totalRecovered$)),i.Cb(4),i.xc("",i.fc(24,15,"ROOT.LATEST_DATA_DATE"),": ",i.fc(25,17,e.lastUpdateDate$),""),i.Cb(6),i.jc("formControl",e.langControl),i.Cb(1),i.jc("ngForOf",e.languages),i.Cb(5),i.wc("",i.fc(36,19,"ROOT.DATA_INFO")," "),i.Cb(6),i.wc("",i.fc(42,21,"ROOT.FOLLOW_ME")," "))},directives:[d.a,p.a,m.b,f.a,r.h,r.c,h.k,g.a,a.b,C.f],pipes:[h.b,v.c],styles:[".header[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #cdcdcd}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:1}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:3px;margin-right:10px}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-orange[_ngcontent-%COMP%]{color:purple}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:red}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:green}@media (max-width:768px){.header[_ngcontent-%COMP%]{font-size:1em;flex-direction:column}}.info[_ngcontent-%COMP%]{font-size:11px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;height:40px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.lang-wrap[_ngcontent-%COMP%]     .mat-form-field-infix{width:100px}"]}),t})();var S=n("JX91"),w=n("Iab2"),T=n("cHiH"),D=n("jaxi"),_=n("qFsG"),j=n("/1cH"),M=n("qPpl"),x=n("bTqV"),E=n("+0xr");function R(t,e){if(1&t&&(i.Tb(0,"mat-option",25),i.uc(1),i.Sb()),2&t){const t=e.$implicit;i.jc("value",t),i.Cb(1),i.wc(" ",t," ")}}function P(t,e){1&t&&(i.Tb(0,"th",26),i.uc(1),i.ec(2,"translate"),i.Sb()),2&t&&(i.Cb(1),i.wc(" ",i.fc(2,1,"HOME.DATE")," "))}function k(t,e){if(1&t&&(i.Tb(0,"td",27),i.uc(1),i.ec(2,"date"),i.Sb()),2&t){const t=e.$implicit;i.Cb(1),i.wc(" ",i.gc(2,1,t.date,"dd/MM/yyyy")," ")}}function L(t,e){1&t&&(i.Tb(0,"th",26),i.uc(1),i.ec(2,"translate"),i.Sb()),2&t&&(i.Cb(1),i.wc(" ",i.fc(2,1,"HOME.CONFIRMED")," "))}function A(t,e){if(1&t&&(i.Tb(0,"td",27),i.uc(1),i.Sb()),2&t){const t=e.$implicit;i.Cb(1),i.wc(" ",t.confirmed," ")}}function H(t,e){1&t&&(i.Tb(0,"th",26),i.uc(1),i.ec(2,"translate"),i.Sb()),2&t&&(i.Cb(1),i.wc(" ",i.fc(2,1,"HOME.RECOVERED")," "))}function $(t,e){if(1&t&&(i.Tb(0,"td",27),i.uc(1),i.Sb()),2&t){const t=e.$implicit;i.Cb(1),i.wc(" ",t.recovered," ")}}function B(t,e){1&t&&(i.Tb(0,"th",26),i.uc(1),i.ec(2,"translate"),i.Sb()),2&t&&(i.Cb(1),i.wc(" ",i.fc(2,1,"HOME.DEATHS")," "))}function N(t,e){if(1&t&&(i.Tb(0,"td",27),i.uc(1),i.Sb()),2&t){const t=e.$implicit;i.Cb(1),i.wc(" ",t.deaths," ")}}function F(t,e){1&t&&i.Ob(0,"tr",28)}function U(t,e){1&t&&i.Ob(0,"tr",29)}const V=[{path:"",component:O,children:[{path:"home",component:(()=>{class t{constructor(t){this.covidDataStoreService=t,this.selectedCountry="Vietnam",this.countryControl=new r.b(this.selectedCountry),this.displayedColumns=["date","confirmed","recovered","deaths"],this.dataType="confirmed"}ngOnInit(){this.covidDataStoreService.fetchData().subscribe(),this.covidDataStoreService.getListCountries().subscribe(t=>{this.countries=t}),this.allData$=this.covidDataStoreService.getAllData(),this.allData$.subscribe(t=>{this._allData=t}),this.countriesOpts$=this.countryControl.valueChanges.pipe(Object(S.a)(""),Object(o.a)(t=>this._filter(t))),this._handleLoadDataByCountry(this.selectedCountry)}_filter(t){const e=t.toLowerCase();return this.countries.filter(t=>t.toLowerCase().includes(e))}onSelectCountry(t){t&&t.option&&t.option.value&&(this.selectedCountry=t.option.value,this._handleLoadDataByCountry(t.option.value))}exportCSV(){if(this.selectedCountry&&this._dataByCountry&&this._dataByCountry.length>0){const t=Object.keys(this._dataByCountry[0]),e=[];this._dataByCountry.forEach(t=>{e.push([...Object.values(t)])});const n=[t.join(","),e.join("\n")].join("\n"),a=new Blob([n],{type:"text/csv;charset=utf-8"});Object(w.saveAs)(a,`covid19_${this.selectedCountry}_${(new Date).getTime()}.csv`)}}exportWorldCSV(){if(this._allData){const t=Object.keys(this._allData),e=["country",...Object.keys(this._allData.US[0])],n=[];t.forEach(t=>{let e=t;if(e.indexOf("Korea, South")>-1&&(e="South Korea"),this._allData[t]){const a=this._allData[t];n.push([e,...Object.values(a[a.length-1])])}});const a=[e.join(","),n.join("\n")].join("\n"),o=new Blob([a],{type:"text/csv;charset=utf-8"});Object(w.saveAs)(o,`covid19_World_${(new Date).getTime()}.csv`)}}_handleLoadDataByCountry(t){this.dataByCountry$=this.covidDataStoreService.getByCountryName(t).pipe(Object(o.a)(t=>t&&t.length>0?t.sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime()):t)).pipe(Object(s.a)(t=>{this._dataByCountry=t}))}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(u))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-home"]],decls:50,vars:36,consts:[[3,"chartData","dataType"],[1,"types-data-buttons"],["name","dataType",3,"ngModel","ngModelChange"],["value","confirmed"],["value","deaths"],["value","recovered"],[1,"example-form"],[1,"example-full-width"],["type","text","matInput","",3,"placeholder","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"chartData"],[1,"table-buttons"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","secondary",3,"click"],["mat-table","",1,"mat-elevation-z8","full-width",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","confirmed"],["matColumnDef","recovered"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(i.Tb(0,"div"),i.Ob(1,"app-world-map-chart",0),i.ec(2,"async"),i.Tb(3,"div",1),i.Tb(4,"mat-button-toggle-group",2),i.bc("ngModelChange",(function(t){return e.dataType=t})),i.Tb(5,"mat-button-toggle",3),i.uc(6),i.ec(7,"translate"),i.Sb(),i.Tb(8,"mat-button-toggle",4),i.uc(9),i.ec(10,"translate"),i.Sb(),i.Tb(11,"mat-button-toggle",5),i.uc(12),i.ec(13,"translate"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Ob(14,"hr"),i.Tb(15,"form",6),i.Tb(16,"mat-form-field",7),i.Ob(17,"input",8),i.ec(18,"translate"),i.Tb(19,"mat-autocomplete",9,10),i.bc("optionSelected",(function(t){return e.onSelectCountry(t)})),i.tc(21,R,2,2,"mat-option",11),i.ec(22,"async"),i.Sb(),i.Sb(),i.Sb(),i.Ob(23,"hr"),i.Tb(24,"div"),i.Ob(25,"app-multi-data-chart",12),i.ec(26,"async"),i.Sb(),i.Tb(27,"div",13),i.Tb(28,"button",14),i.bc("click",(function(){return e.exportCSV()})),i.uc(29),i.ec(30,"translate"),i.Sb(),i.Tb(31,"button",15),i.bc("click",(function(){return e.exportWorldCSV()})),i.uc(32),i.ec(33,"translate"),i.Sb(),i.Sb(),i.Tb(34,"table",16),i.ec(35,"async"),i.Rb(36,17),i.tc(37,P,3,3,"th",18),i.tc(38,k,3,4,"td",19),i.Qb(),i.Rb(39,20),i.tc(40,L,3,3,"th",18),i.tc(41,A,2,1,"td",19),i.Qb(),i.Rb(42,21),i.tc(43,H,3,3,"th",18),i.tc(44,$,2,1,"td",19),i.Qb(),i.Rb(45,22),i.tc(46,B,3,3,"th",18),i.tc(47,N,2,1,"td",19),i.Qb(),i.tc(48,F,1,0,"tr",23),i.tc(49,U,1,0,"tr",24),i.Sb()),2&t){const t=i.mc(20);i.Cb(1),i.jc("chartData",i.fc(2,16,e.allData$))("dataType",e.dataType),i.Cb(3),i.jc("ngModel",e.dataType),i.Cb(2),i.vc(i.fc(7,18,"HOME.CONFIRMED")),i.Cb(3),i.vc(i.fc(10,20,"HOME.DEATHS")),i.Cb(3),i.vc(i.fc(13,22,"HOME.RECOVERED")),i.Cb(5),i.kc("placeholder",i.fc(18,24,"HOME.SELECT")),i.jc("formControl",e.countryControl)("matAutocomplete",t),i.Cb(4),i.jc("ngForOf",i.fc(22,26,e.countriesOpts$)),i.Cb(4),i.jc("chartData",i.fc(26,28,e.dataByCountry$)),i.Cb(4),i.vc(i.fc(30,30,"HOME.EXPORT_COUNTRY")),i.Cb(3),i.vc(i.fc(33,32,"HOME.EXPORT_WORLD")),i.Cb(2),i.jc("dataSource",i.fc(35,34,e.dataByCountry$)),i.Cb(14),i.jc("matHeaderRowDef",e.displayedColumns),i.Cb(1),i.jc("matRowDefColumns",e.displayedColumns)}},directives:[T.a,D.b,r.h,r.k,D.a,r.m,r.i,r.j,m.b,_.a,r.a,j.c,r.c,j.a,h.k,M.a,x.a,E.j,E.c,E.e,E.b,E.g,E.i,C.f,E.d,E.a,E.f,E.h],pipes:[h.b,v.c,h.e],styles:[".full-width[_ngcontent-%COMP%]{width:100%;color:#1eff00}.align-center[_ngcontent-%COMP%]{text-align:center}.types-data-buttons[_ngcontent-%COMP%]{text-align:center;font-size:14px}.types-data-buttons[_ngcontent-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:35px}.table-buttons[_ngcontent-%COMP%]{margin-bottom:5px}.table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:5px}"]}),t})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let I=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(e){return new(e||t)},imports:[[a.a.forChild(V)],a.a]}),t})();var X=n("PCNd");let q=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(e){return new(e||t)},imports:[[X.a,I]]}),t})()}}]);