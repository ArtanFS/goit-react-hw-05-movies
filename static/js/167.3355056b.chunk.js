"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[167],{3167:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,u,c,i=r(5861),s=r(9439),o=r(7757),p=r.n(o),f=r(2791),d=r(4635),l=r(7689),h=r(168),x=r(5867),v=x.default.ul(e||(e=(0,h.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),m=x.default.li(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),Z=x.default.h2(u||(u=(0,h.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 18px;\n"]))),y=x.default.p(c||(c=(0,h.Z)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),j=r(184),g=function(n){var t=n.cast;return(0,j.jsx)(v,{children:t.map((function(n){return(0,j.jsxs)(m,{children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.profile_path),alt:n.name,width:"100",height:"150"}),(0,j.jsxs)("div",{children:[(0,j.jsx)(Z,{children:n.name}),(0,j.jsxs)(y,{children:["Character: ",n.character]})]})]},n.id)}))})},w=r(5935),b=r(670),I=r(5763),k=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)([]),r=(0,s.Z)(t,2),e=r[0],a=r[1],u=(0,f.useState)(!1),c=(0,s.Z)(u,2),o=c[0],h=c[1],x=(0,f.useState)(""),v=(0,s.Z)(x,2),m=v[0],Z=v[1],y=Boolean(e.length);return(0,f.useEffect)((function(){var t=function(){var t=(0,i.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,d.yo)(n);case 4:r=t.sent,a(r),Z(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(t.t0.message);case 12:return t.prev=12,h(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,j.jsxs)(j.Fragment,{children:[o&&(0,j.jsx)(b.Z,{}),y&&(0,j.jsx)(g,{cast:e}),m&&(0,j.jsx)(I.Z,{err:m}),!y&&!o&&!m&&(0,j.jsx)(w.Z,{item:"actors"})]})}},5763:function(n,t,r){r.d(t,{Z:function(){return p}});var e,a,u=r(168),c=r(5867),i=c.default.div(e||(e=(0,u.Z)(["\n  padding: 15px;\n"]))),s=c.default.p(a||(a=(0,u.Z)(["\n  font-size: 18px;\n"]))),o=r(184),p=function(n){var t=n.err;return(0,o.jsx)(i,{children:(0,o.jsxs)(s,{children:["An error occurred: ",t]})})}},5935:function(n,t,r){r.d(t,{Z:function(){return i}});var e,a=r(168),u=r(5867).default.p(e||(e=(0,a.Z)(["\n  padding: 15px;\n"]))),c=r(184),i=function(n){var t=n.item,r=n.query;return(0,c.jsxs)(u,{children:["We don't have any ",t," for this ",r||"movie"]})}},4635:function(n,t,r){r.d(t,{Wf:function(){return f},XT:function(){return i},YJ:function(){return o},q5:function(){return l},yo:function(){return x}});var e=r(5861),a=r(7757),u=r.n(a),c=r(340);function i(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:t},n.next=3,(0,c.Z)("search/movie",{params:r});case 3:return e=n.sent,a=e.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRjNmI5NWRhNmE1NWI2MmI3YmQyY2NlMDBkZThjNCIsInN1YiI6IjY1NjRmN2Y0ZWRlYjQzMDBlM2Y4ZjA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Se99AElRac5dEFldAVBXHVj2Yn2Yvx3cf4i09wyudJc"}}]);
//# sourceMappingURL=167.3355056b.chunk.js.map