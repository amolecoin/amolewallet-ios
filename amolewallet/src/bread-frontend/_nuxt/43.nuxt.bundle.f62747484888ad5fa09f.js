webpackJsonp([43],{361:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(52),a=n.n(r),o=n(9),i=n.n(o),s=n(8),c=n.n(s),u=n(32),l=function(){var t=c()(i.a.mark(function t(e,r){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.i(u.c)(d);case 3:return t.next=5,fetch(e);case 5:if(a=t.sent,!r(a.status)){t.next=8;break}return t.abrupt("return");case 8:t.next=0;break;case 10:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),d=250;e.default={props:["service"],data:function(){return{quote:null,amount:null,limits:null,tagline:null}},components:{"currency-input":function(){return n.e(45).then(n.bind(null,321))},"confirm-dialog":function(){return n.e(38).then(n.bind(null,347))}},watch:{service:function(){this.fetchMeta()}},created:function(){this.fetchMeta()},methods:{fetchMeta:function(){function t(){return e.apply(this,arguments)}var e=c()(i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.service.buyQuote();case 2:e=t.sent,n=e.meta,this.limits=n.limit_text,this.tagline=n.tagline;case 6:case"end":return t.stop()}},t,this)}));return t}(),buy:function(){function t(){return e.apply(this,arguments)}var e=c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.service.buyQuote({amount:this.amount,fiat_currency:{value:"USD"},execute:{value:!1}});case 2:if(this.quote=t.sent,!this.quote.error){t.next=5;break}throw new Error(this.quote.error);case 5:case"end":return t.stop()}},t,this)}));return t}(),cancel:function(){this.quote=null},confirm:function(){function t(){return e.apply(this,arguments)}var e=c()(i.a.mark(function t(){var e,n,r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.quote,this.quote=null,t.next=4,this.$http.get("/_wallet/info");case 4:return n=t.sent,r={quote:e.form.fields.find(function(t){return"quote"==t.name}),amount:{numerator:0,denominator:100,currency:"USD"},fiat_currency:{value:"USD"},execute:{value:!0},redirect:{value:"https://breadwallet.com/simplex-success/"},address:{value:n.receive_address}},t.next=8,this.service.buyQuote(r);case 8:return o=t.sent,t.next=11,fetch("/_browser",{method:"POST",headers:{"content-type":"application/json"},body:a()({url:o.links.web.href,body:o.links.web.meta.data,method:"POST",closeOn:"https://api.breadwallet.com/anybody/redirect/pending",headers:{"Content-Type":"application/x-www-form-urlencoded"}})});case 11:return t.next=13,l("/_browser",function(t){return 409!=t});case 13:this.$router.push("/buy/"+this.service.slug+"/history");case 14:case"end":return t.stop()}},t,this)}));return t}()},computed:{allowedAmount:function(){var t=this.amount;if(!t)return!1;var e=t.numerator/(t.denominator||100);return 50<=e&&e<=2e3},currencies:function(){return{USD:{symbol:"$",scale:2}}}}}},400:function(t,e,n){e=t.exports=n(4)(!0),e.push([t.i,".credit-buy[data-v-138379cd]{margin-top:11px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.purchase-details[data-v-138379cd]{background-color:#fafcfc;border-top:1px solid rgba(75,94,99,.16);border-bottom:1px solid rgba(75,94,99,.16);position:relative;padding:11px}.bits[data-v-138379cd]{color:#4b5e63}.disclaimer[data-v-138379cd]{padding:11px;color:#a3a8ad}.fee[data-v-138379cd]{position:absolute;right:0;top:0;color:#a3a8ad;padding:5.5px;width:77px;text-align:right}","",{version:3,sources:["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/buy_types/Credit.vue"],names:[],mappings:"AACA,6BAA6B,gBAAgB,oBAAoB,oBAAoB,aAAa,4BAA4B,6BAA6B,0BAA0B,qBAAqB,CACzM,AACD,mCAAmC,yBAAyB,wCAAyC,2CAA4C,kBAAkB,YAAY,CAC9K,AACD,uBAAuB,aAAa,CACnC,AACD,6BAA6B,aAAa,aAAa,CACtD,AACD,sBAAsB,kBAAkB,QAAQ,MAAM,cAAc,cAAc,WAAW,gBAAgB,CAC5G",file:"Credit.vue",sourcesContent:["\n.credit-buy[data-v-138379cd]{margin-top:11px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.purchase-details[data-v-138379cd]{background-color:#FAFCFC;border-top:1px solid rgba(75,94,99,0.16);border-bottom:1px solid rgba(75,94,99,0.16);position:relative;padding:11px\n}\n.bits[data-v-138379cd]{color:#4B5E63\n}\n.disclaimer[data-v-138379cd]{padding:11px;color:#A3A8AD\n}\n.fee[data-v-138379cd]{position:absolute;right:0;top:0;color:#A3A8AD;padding:5.5px;width:77px;text-align:right\n}\n"],sourceRoot:""}])},461:function(t,e,n){function r(t){n(516)}var a=n(1)(n(361),n(470),r,"data-v-138379cd",null);t.exports=a.exports},470:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"credit-buy"},[n("div",{staticClass:"purchase-details"},[n("currency-input",{attrs:{currencies:t.currencies},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),n("span",{staticClass:"disclaimer"},[t._v("\n      "+t._s(t.$t("buy.limits"))+": "+t._s(t.limits)+"\n    ")]),n("span",{staticClass:"disclaimer"},[t._v("\n      "+t._s(t.tagline)+"\n    ")]),n("stateful-button",{staticClass:"buy-button",attrs:{disabled:!t.allowedAmount,click:t.buy}},[t._v("\n      "+t._s(t.$t("buy-button"))+"\n    ")]),t.quote?n("confirm-dialog",{attrs:{confirm:t.confirm,title:"Purchase Details"},on:{cancel:function(e){t.cancel()}}},[t._v("\n      Are you sure you want to buy "+t._s(t._f("currency")(t.quote&&t.quote.meta&&t.quote.meta.quote.subtotal))+" worth of BTC,\n      with a fee of "+t._s(t._f("currency")(t.quote&&t.quote.meta&&t.quote.meta.quote.fee))+"?\n    ")]):t._e()],1)])},staticRenderFns:[]}},516:function(t,e,n){var r=n(400);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(5)("6bd42692",r,!0)}});