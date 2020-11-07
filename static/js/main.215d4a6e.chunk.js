(this.webpackJsonpproject_corona=this.webpackJsonpproject_corona||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__1688g",card:"Cards_card__1Bj8n",infected:"Cards_infected__2hDfX",recovered:"Cards_recovered__15Sas",deaths:"Cards_deaths__1Vecy"}},207:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(72),s=a.n(o),i=a(6),u=a.n(i),d=a(11),l=a(73),j=a(19),p=a(81),f=a(80),h=a(225),b=a(229),v=a(226),x=a(227),m=a(33),O=a.n(m),g=a(14),y=a.n(g),C=a(34),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,o=t.lastUpdate;return a?Object(n.jsx)("div",{className:y.a.container,children:Object(n.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(y.a.card,y.a.infected),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"INFECTED"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(y.a.card,y.a.recovered),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"RECOVERED"}),Object(n.jsxs)(x.a,{variant:"h5",children:[" ",Object(n.jsx)(O.a,{start:0,end:c.value,duration:2.5,separator:","})]}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(y.a.card,y.a.deaths),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"DEATHS"}),Object(n.jsxs)(x.a,{variant:"h5",children:[" ",Object(n.jsx)(O.a,{start:0,end:r.value,duration:2.5,separator:","})]}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading.."},D=a(18),S=a(35),k=a.n(S),N="https://covid19.mathdro.id/api",E=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(46),U=a(78),A=a.n(U),J=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(r.useState)([]),l=Object(D.a)(i,2),j=l[0],p=l[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=j.length?Object(n.jsx)(B.Line,{data:{labels:j.map((function(e){return e.date})),datasets:[{data:j.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:j.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(250, 0, 0, 0.5)",fill:!0}]}}):null;console.log(a,c,o);var h=a?Object(n.jsx)(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(n.jsx)("div",{className:A.a.container,children:s?h:f})},R=a(230),L=a(228),M=a(79),P=a.n(M),Q=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(D.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(n.jsx)(R.a,{className:P.a.formControl,children:Object(n.jsxs)(L.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)})),";"]})})},T=a(47),q=a.n(T),F=a.p+"static/media/image.9e5d4fc7.png",G=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:a=e.sent,n.setState({data:a,country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{},country:""},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(n.jsxs)("div",{className:q.a.container,children:[Object(n.jsx)("img",{className:q.a.image,src:F,alt:"COVID-19"}),Object(n.jsx)(w,{data:t}),Object(n.jsx)(Q,{handleCountryChange:this.handleCountryChange}),Object(n.jsx)(J,{data:t,country:a})]})}}]),a}(c.a.Component);s.a.render(Object(n.jsx)(G,{}),document.getElementById("root"))},47:function(e,t,a){e.exports={container:"App_container__3ZdQw",image:"App_image__2yq5Q"}},78:function(e,t,a){e.exports={container:"Chart_container__3MUgJ"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2lD-3"}}},[[207,1,2]]]);
//# sourceMappingURL=main.215d4a6e.chunk.js.map