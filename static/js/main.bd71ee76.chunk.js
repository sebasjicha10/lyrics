(this.webpackJsonplyrics=this.webpackJsonplyrics||[]).push([[0],{24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),r=c.n(a),n=c(17),i=c.n(n),l=(c(24),c(6)),j=c.n(l),o=c(18),b=c(3),d=c(4),h=c(7),O=function(e){var t,c=e.setLyricsSearch,r=Object(a.useState)({artist:"",song:""}),n=Object(b.a)(r,2),i=n[0],l=n[1],j=Object(a.useState)(!1),o=Object(b.a)(j,2),O=o[0],m=o[1],x=i.artist,u=i.song,f=function(e){l(Object(h.a)(Object(h.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(s.jsxs)("div",{className:"bg-info",children:[O?Object(s.jsx)("p",{className:"alert alert-danger text-center p-2",children:"All Fields are Mandatory"}):null,Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==x.trim()&&""!==u.trim()?(m(!1),c(i)):m(!0)},className:"col card text-white bg-transparent mb-5 pt-5 pb-2",children:Object(s.jsxs)("fieldset",{children:[Object(s.jsx)("legend",{className:"text-center",children:"Song Lyrics Browser"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Artist"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"artist",placeholder:"Artist's Name",onChange:f,value:x})]})}),Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Song"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"song",placeholder:"Song's Name",onChange:f,value:u})]})})]}),Object(s.jsx)("button",(t={type:"submit"},Object(d.a)(t,"type","submit"),Object(d.a)(t,"className","btn btn-primary float-right"),Object(d.a)(t,"children","Search"),t))]})})})})]})},m=function(e){var t=e.lyrics;return 0===t.length?null:Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)("h2",{children:"Lyrics"}),Object(s.jsx)("p",{className:"lyrics",children:t})]})},x=function(e){var t=e.info;if(0===Object.keys(t).length)return null;var c=t.strArtistThumb,a=t.strGenre,r=t.strBiographyEN;return Object(s.jsxs)("div",{className:"card border-ligth",children:[Object(s.jsx)("div",{className:"card-header bg-primary text-light font-weigth-bold",children:"Artist Information"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("img",{src:c,alt:"Artist Logo"}),Object(s.jsxs)("p",{className:"card-text",children:["Genre: ",a]}),Object(s.jsx)("h2",{className:"card-text",children:"Biography:"}),Object(s.jsx)("p",{className:"card-text",children:r}),Object(s.jsxs)("p",{className:"card-text",children:[Object(s.jsx)("a",{href:"https://".concat(t.strFacebook),target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-facebook"})}),Object(s.jsx)("a",{href:"https://".concat(t.strTwitter),target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-twitter"})}),Object(s.jsx)("a",{href:"".concat(t.strLastFMChart),target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-lastfm"})})]})]})]})},u=c(8),f=c.n(u);var p=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),i=Object(b.a)(n,2),l=i[0],d=i[1],h=Object(a.useState)({}),u=Object(b.a)(h,2),p=u[0],g=u[1];return Object(a.useEffect)((function(){0!==Object.keys(c).length&&function(){var e=Object(o.a)(j.a.mark((function e(){var t,s,a,r,n,i,l,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.artist,s=c.song,a="https://api.lyrics.ovh/v1/".concat(t,"/").concat(s),r="https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),e.next=5,Promise.all([f()(a),f()(r)]);case 5:n=e.sent,i=Object(b.a)(n,2),l=i[0],o=i[1],console.log(l.data),d(l.data.lyrics),g(o.data.artists[0]);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]),Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)(O,{setLyricsSearch:r}),Object(s.jsx)("div",{className:"container mt-5",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsx)(x,{info:p})}),Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsx)(m,{lyrics:l})})]})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.bd71ee76.chunk.js.map