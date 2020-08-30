function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){r(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,r,c){var i=o.URL||o.webkitURL,l=document.createElement("a");l.download=r=r||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?a(l):n(l.href)?e(t,r,c):a(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,r){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),o);else if(n(t))e(t,o,r);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){a(c)}))}}:function(t,n,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var c="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||c&&i)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},s.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,b=u.createObjectURL(t);r?r.location=b:location.href=b,r=null,setTimeout((function(){u.revokeObjectURL(b)}),4e4)}});o.saveAs=r.saveAs=r,t.exports=r})?a.apply(e,[]):a)||(t.exports=o)},j1ZV:function(t,e,n){"use strict";n.r(e),n.d(e,"ComponentsModule",(function(){return Q}));var a,o=n("tyNb"),r=n("lJxs"),c=n("aAC7"),i=n("3Pt+"),l=n("fXoL"),s=n("vkgz"),u=n("2Vo4"),b=n("qc5V"),f=((a=function(){function t(e){_classCallCheck(this,t),this.apiService=e,this.localDataSubject=new u.a(null),this._localData=this.localDataSubject.asObservable()}return _createClass(t,[{key:"fetchData",value:function(){var t=this;return this.apiService.get("/timeseries.json").pipe(Object(s.a)((function(e){t.localDataSubject.next(e)})))}},{key:"clearData",value:function(){this.localDataSubject.next(null)}},{key:"getAllData",value:function(){return this._localData}},{key:"getSummaryNumbers",value:function(){return this._localData.pipe(Object(r.a)((function(t){var e={confirmed:0,deaths:0,recovered:0,date:""};return t&&Object.keys(t).forEach((function(n){if(t[n]){var a=t[n][t[n].length-1];e.date=a.date,e.confirmed=e.confirmed+a.confirmed,e.deaths=e.deaths+a.deaths,e.recovered=e.recovered+a.recovered}})),e})))}},{key:"getListCountries",value:function(){return this._localData.pipe(Object(r.a)((function(t){return t?Object.keys(t):[]})))}},{key:"getByCountryName",value:function(t){return this._localData.pipe(Object(r.a)((function(e){if(e&&e[t])return _toConsumableArray(e[t])})))}}]),t}()).\u0275fac=function(t){return new(t||a)(l.Xb(b.a))},a.\u0275prov=l.Jb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),d=n("/t3+"),p=n("NFeN"),m=n("kmnG"),h=n("d3UM"),y=n("ofXK"),v=n("Wp6s"),g=n("FKr1"),C=n("sYmb");function O(t,e){if(1&t&&(l.Tb(0,"mat-option",15),l.uc(1),l.Sb()),2&t){var n=e.$implicit;l.jc("value",n.id),l.Cb(1),l.wc(" ",n.text," ")}}var S,_=((S=function(){function t(e,n){_classCallCheck(this,t),this.covidDataStoreService=e,this.appSettingsService=n,this.languages=c.c,this.langControl=new i.b(c.b)}return _createClass(t,[{key:"ngOnInit",value:function(){this.totalConfirmed$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(r.a)((function(t){return t.confirmed.toLocaleString()}))),this.totalRecovered$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(r.a)((function(t){return t.recovered.toLocaleString()}))),this.totalDeaths$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(r.a)((function(t){return t.deaths.toLocaleString()}))),this.lastUpdateDate$=this.covidDataStoreService.getSummaryNumbers().pipe(Object(r.a)((function(t){return t.date})))}},{key:"onChangeLang",value:function(t){t&&t.value&&this.appSettingsService.setLanguage(t.value)}}]),t}()).\u0275fac=function(t){return new(t||S)(l.Nb(f),l.Nb(c.a))},S.\u0275cmp=l.Hb({type:S,selectors:[["app-components"]],decls:45,vars:23,consts:[[1,"header"],[1,"brand"],["src","assets/images/large-icon.png"],[1,"fill-remaining-space"],[1,"summary-wrap"],["title","Confirmed",1,"text-orange"],[1,"number"],["title","Deaths",1,"text-red"],["title","Recovered",1,"text-green"],[1,"info"],[1,"lang-wrap"],[3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["href","https://github.com/pomber/covid19"],["href","https://github.com/hackalone786/"],[3,"value"]],template:function(t,e){1&t&&(l.Tb(0,"mat-toolbar",0),l.Tb(1,"span",1),l.Ob(2,"img",2),l.uc(3," Covid19 Chart by Kartikey "),l.Sb(),l.Ob(4,"span",3),l.Tb(5,"div",4),l.Tb(6,"mat-icon",5),l.uc(7,"sentiment_dissatisfied"),l.Sb(),l.Tb(8,"span",6),l.uc(9),l.ec(10,"async"),l.Sb(),l.Tb(11,"mat-icon",7),l.uc(12,"sentiment_very_dissatisfied"),l.Sb(),l.Tb(13,"span",6),l.uc(14),l.ec(15,"async"),l.Sb(),l.Tb(16,"mat-icon",8),l.uc(17,"sentiment_very_satisfied"),l.Sb(),l.Tb(18,"span",6),l.uc(19),l.ec(20,"async"),l.Sb(),l.Sb(),l.Sb(),l.Tb(21,"mat-toolbar",9),l.Tb(22,"span"),l.uc(23),l.ec(24,"translate"),l.ec(25,"async"),l.Sb(),l.Ob(26,"span",3),l.Tb(27,"div",10),l.Tb(28,"mat-form-field"),l.Tb(29,"mat-select",11),l.bc("selectionChange",(function(t){return e.onChangeLang(t)})),l.tc(30,O,2,2,"mat-option",12),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(31,"mat-card"),l.Ob(32,"router-outlet"),l.Sb(),l.Tb(33,"mat-toolbar",9),l.Tb(34,"span"),l.uc(35),l.ec(36,"translate"),l.Tb(37,"a",13),l.uc(38,""),l.Sb(),l.Sb(),l.Ob(39,"span",3),l.Tb(40,"span"),l.uc(41),l.ec(42,"translate"),l.Tb(43,"a",14),l.uc(44,"@hackalone786"),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.Cb(9),l.vc(l.fc(10,9,e.totalConfirmed$)),l.Cb(5),l.vc(l.fc(15,11,e.totalDeaths$)),l.Cb(5),l.vc(l.fc(20,13,e.totalRecovered$)),l.Cb(4),l.xc("",l.fc(24,15,"ROOT.LATEST_DATA_DATE"),": ",l.fc(25,17,e.lastUpdateDate$),""),l.Cb(6),l.jc("formControl",e.langControl),l.Cb(1),l.jc("ngForOf",e.languages),l.Cb(5),l.wc("",l.fc(36,19,"ROOT.DATA_INFO")," "),l.Cb(6),l.wc("",l.fc(42,21,"ROOT.FOLLOW_ME")," "))},directives:[d.a,p.a,m.b,h.a,i.h,i.c,y.k,v.a,o.b,g.f],pipes:[y.b,C.c],styles:[".header[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #cdcdcd}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:1}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-left:3px;margin-right:10px}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-orange[_ngcontent-%COMP%]{color:purple}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-red[_ngcontent-%COMP%]{color:red}.header[_ngcontent-%COMP%]   .summary-wrap[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%]{color:green}@media (max-width:768px){.header[_ngcontent-%COMP%]{font-size:1em;flex-direction:column}}.info[_ngcontent-%COMP%]{font-size:11px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;height:40px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.lang-wrap[_ngcontent-%COMP%]     .mat-form-field-infix{width:100px}"]}),S),w=n("JX91"),T=n("Iab2"),D=n("cHiH"),j=n("jaxi"),M=n("qFsG"),k=n("/1cH"),x=n("qPpl"),A=n("bTqV"),E=n("+0xr");function P(t,e){if(1&t&&(l.Tb(0,"mat-option",25),l.uc(1),l.Sb()),2&t){var n=e.$implicit;l.jc("value",n),l.Cb(1),l.wc(" ",n," ")}}function R(t,e){1&t&&(l.Tb(0,"th",26),l.uc(1),l.ec(2,"translate"),l.Sb()),2&t&&(l.Cb(1),l.wc(" ",l.fc(2,1,"HOME.DATE")," "))}function L(t,e){if(1&t&&(l.Tb(0,"td",27),l.uc(1),l.ec(2,"date"),l.Sb()),2&t){var n=e.$implicit;l.Cb(1),l.wc(" ",l.gc(2,1,n.date,"dd/MM/yyyy")," ")}}function H(t,e){1&t&&(l.Tb(0,"th",26),l.uc(1),l.ec(2,"translate"),l.Sb()),2&t&&(l.Cb(1),l.wc(" ",l.fc(2,1,"HOME.CONFIRMED")," "))}function $(t,e){if(1&t&&(l.Tb(0,"td",27),l.uc(1),l.Sb()),2&t){var n=e.$implicit;l.Cb(1),l.wc(" ",n.confirmed," ")}}function B(t,e){1&t&&(l.Tb(0,"th",26),l.uc(1),l.ec(2,"translate"),l.Sb()),2&t&&(l.Cb(1),l.wc(" ",l.fc(2,1,"HOME.RECOVERED")," "))}function N(t,e){if(1&t&&(l.Tb(0,"td",27),l.uc(1),l.Sb()),2&t){var n=e.$implicit;l.Cb(1),l.wc(" ",n.recovered," ")}}function I(t,e){1&t&&(l.Tb(0,"th",26),l.uc(1),l.ec(2,"translate"),l.Sb()),2&t&&(l.Cb(1),l.wc(" ",l.fc(2,1,"HOME.DEATHS")," "))}function F(t,e){if(1&t&&(l.Tb(0,"td",27),l.uc(1),l.Sb()),2&t){var n=e.$implicit;l.Cb(1),l.wc(" ",n.deaths," ")}}function U(t,e){1&t&&l.Ob(0,"tr",28)}function V(t,e){1&t&&l.Ob(0,"tr",29)}var W,X,q,K=[{path:"",component:_,children:[{path:"home",component:(W=function(){function t(e){_classCallCheck(this,t),this.covidDataStoreService=e,this.selectedCountry="Vietnam",this.countryControl=new i.b(this.selectedCountry),this.displayedColumns=["date","confirmed","recovered","deaths"],this.dataType="confirmed"}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.covidDataStoreService.fetchData().subscribe(),this.covidDataStoreService.getListCountries().subscribe((function(e){t.countries=e})),this.allData$=this.covidDataStoreService.getAllData(),this.allData$.subscribe((function(e){t._allData=e})),this.countriesOpts$=this.countryControl.valueChanges.pipe(Object(w.a)(""),Object(r.a)((function(e){return t._filter(e)}))),this._handleLoadDataByCountry(this.selectedCountry)}},{key:"_filter",value:function(t){var e=t.toLowerCase();return this.countries.filter((function(t){return t.toLowerCase().includes(e)}))}},{key:"onSelectCountry",value:function(t){t&&t.option&&t.option.value&&(this.selectedCountry=t.option.value,this._handleLoadDataByCountry(t.option.value))}},{key:"exportCSV",value:function(){if(this.selectedCountry&&this._dataByCountry&&this._dataByCountry.length>0){var t=Object.keys(this._dataByCountry[0]),e=[];this._dataByCountry.forEach((function(t){e.push(_toConsumableArray(Object.values(t)))}));var n=[t.join(","),e.join("\n")].join("\n"),a=new Blob([n],{type:"text/csv;charset=utf-8"});Object(T.saveAs)(a,"covid19_".concat(this.selectedCountry,"_").concat((new Date).getTime(),".csv"))}}},{key:"exportWorldCSV",value:function(){var t=this;if(this._allData){var e=Object.keys(this._allData),n=["country"].concat(_toConsumableArray(Object.keys(this._allData.US[0]))),a=[];e.forEach((function(e){var n=e;if(n.indexOf("Korea, South")>-1&&(n="South Korea"),t._allData[e]){var o=t._allData[e];a.push([n].concat(_toConsumableArray(Object.values(o[o.length-1]))))}}));var o=[n.join(","),a.join("\n")].join("\n"),r=new Blob([o],{type:"text/csv;charset=utf-8"});Object(T.saveAs)(r,"covid19_World_".concat((new Date).getTime(),".csv"))}}},{key:"_handleLoadDataByCountry",value:function(t){var e=this;this.dataByCountry$=this.covidDataStoreService.getByCountryName(t).pipe(Object(r.a)((function(t){return t&&t.length>0?t.sort((function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()})):t}))).pipe(Object(s.a)((function(t){e._dataByCountry=t})))}}]),t}(),W.\u0275fac=function(t){return new(t||W)(l.Nb(f))},W.\u0275cmp=l.Hb({type:W,selectors:[["app-home"]],decls:50,vars:36,consts:[[3,"chartData","dataType"],[1,"types-data-buttons"],["name","dataType",3,"ngModel","ngModelChange"],["value","confirmed"],["value","deaths"],["value","recovered"],[1,"example-form"],[1,"example-full-width"],["type","text","matInput","",3,"placeholder","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"chartData"],[1,"table-buttons"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","secondary",3,"click"],["mat-table","",1,"mat-elevation-z8","full-width",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","confirmed"],["matColumnDef","recovered"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(l.Tb(0,"div"),l.Ob(1,"app-world-map-chart",0),l.ec(2,"async"),l.Tb(3,"div",1),l.Tb(4,"mat-button-toggle-group",2),l.bc("ngModelChange",(function(t){return e.dataType=t})),l.Tb(5,"mat-button-toggle",3),l.uc(6),l.ec(7,"translate"),l.Sb(),l.Tb(8,"mat-button-toggle",4),l.uc(9),l.ec(10,"translate"),l.Sb(),l.Tb(11,"mat-button-toggle",5),l.uc(12),l.ec(13,"translate"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Ob(14,"hr"),l.Tb(15,"form",6),l.Tb(16,"mat-form-field",7),l.Ob(17,"input",8),l.ec(18,"translate"),l.Tb(19,"mat-autocomplete",9,10),l.bc("optionSelected",(function(t){return e.onSelectCountry(t)})),l.tc(21,P,2,2,"mat-option",11),l.ec(22,"async"),l.Sb(),l.Sb(),l.Sb(),l.Ob(23,"hr"),l.Tb(24,"div"),l.Ob(25,"app-multi-data-chart",12),l.ec(26,"async"),l.Sb(),l.Tb(27,"div",13),l.Tb(28,"button",14),l.bc("click",(function(){return e.exportCSV()})),l.uc(29),l.ec(30,"translate"),l.Sb(),l.Tb(31,"button",15),l.bc("click",(function(){return e.exportWorldCSV()})),l.uc(32),l.ec(33,"translate"),l.Sb(),l.Sb(),l.Tb(34,"table",16),l.ec(35,"async"),l.Rb(36,17),l.tc(37,R,3,3,"th",18),l.tc(38,L,3,4,"td",19),l.Qb(),l.Rb(39,20),l.tc(40,H,3,3,"th",18),l.tc(41,$,2,1,"td",19),l.Qb(),l.Rb(42,21),l.tc(43,B,3,3,"th",18),l.tc(44,N,2,1,"td",19),l.Qb(),l.Rb(45,22),l.tc(46,I,3,3,"th",18),l.tc(47,F,2,1,"td",19),l.Qb(),l.tc(48,U,1,0,"tr",23),l.tc(49,V,1,0,"tr",24),l.Sb()),2&t){var n=l.mc(20);l.Cb(1),l.jc("chartData",l.fc(2,16,e.allData$))("dataType",e.dataType),l.Cb(3),l.jc("ngModel",e.dataType),l.Cb(2),l.vc(l.fc(7,18,"HOME.CONFIRMED")),l.Cb(3),l.vc(l.fc(10,20,"HOME.DEATHS")),l.Cb(3),l.vc(l.fc(13,22,"HOME.RECOVERED")),l.Cb(5),l.kc("placeholder",l.fc(18,24,"HOME.SELECT")),l.jc("formControl",e.countryControl)("matAutocomplete",n),l.Cb(4),l.jc("ngForOf",l.fc(22,26,e.countriesOpts$)),l.Cb(4),l.jc("chartData",l.fc(26,28,e.dataByCountry$)),l.Cb(4),l.vc(l.fc(30,30,"HOME.EXPORT_COUNTRY")),l.Cb(3),l.vc(l.fc(33,32,"HOME.EXPORT_WORLD")),l.Cb(2),l.jc("dataSource",l.fc(35,34,e.dataByCountry$)),l.Cb(14),l.jc("matHeaderRowDef",e.displayedColumns),l.Cb(1),l.jc("matRowDefColumns",e.displayedColumns)}},directives:[D.a,j.b,i.h,i.k,j.a,i.m,i.i,i.j,m.b,M.a,i.a,k.c,i.c,k.a,y.k,x.a,A.a,E.j,E.c,E.e,E.b,E.g,E.i,g.f,E.d,E.a,E.f,E.h],pipes:[y.b,C.c,y.e],styles:[".full-width[_ngcontent-%COMP%]{width:100%;color:#1eff00}.align-center[_ngcontent-%COMP%]{text-align:center}.types-data-buttons[_ngcontent-%COMP%]{text-align:center;font-size:14px}.types-data-buttons[_ngcontent-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:35px}.table-buttons[_ngcontent-%COMP%]{margin-bottom:5px}.table-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:5px}"]}),W)},{path:"",redirectTo:"home",pathMatch:"full"}]}],z=((X=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:X}),X.\u0275inj=l.Kb({factory:function(t){return new(t||X)},imports:[[o.a.forChild(K)],o.a]}),X),J=n("PCNd"),Q=((q=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:q}),q.\u0275inj=l.Kb({factory:function(t){return new(t||q)},imports:[[J.a,z]]}),q)}}]);