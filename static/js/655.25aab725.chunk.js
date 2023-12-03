"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[655],{5763:function(n,t,r){r.d(t,{Z:function(){return p}});var e,u,a=r(168),i=r(5867),c=i.default.div(e||(e=(0,a.Z)(["\n  padding: 15px;\n"]))),s=i.default.p(u||(u=(0,a.Z)(["\n  font-size: 18px;\n"]))),o=r(184),p=function(n){var t=n.err;return(0,o.jsx)(c,{children:(0,o.jsxs)(s,{children:["An error occurred: ",t]})})}},5935:function(n,t,r){r.d(t,{Z:function(){return c}});var e,u=r(168),a=r(5867).default.p(e||(e=(0,u.Z)(["\n  padding: 15px;\n"]))),i=r(184),c=function(n){var t=n.item,r=n.query;return(0,i.jsxs)(a,{children:["We don't have any ",t," for this ",r||"movie"]})}},8655:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e,u,a,i=r(5861),c=r(9439),s=r(7757),o=r.n(s),p=r(2791),f=r(4635),d=r(7689),h=r(168),l=r(5867),v=l.default.ul(e||(e=(0,h.Z)(["\n  padding: 15px;\n"]))),x=l.default.h2(u||(u=(0,h.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),m=l.default.p(a||(a=(0,h.Z)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),Z=r(184),j=function(n){var t=n.reviews;return(0,Z.jsx)(v,{children:t.map((function(n){return(0,Z.jsxs)("li",{children:[(0,Z.jsxs)(x,{children:["Author: ",n.author]}),(0,Z.jsx)(m,{children:n.content})]},n.id)}))})},y=r(5935),w=r(670),b=r(5763),g=function(){var n=(0,d.UO)().movieId,t=(0,p.useState)([]),r=(0,c.Z)(t,2),e=r[0],u=r[1],a=(0,p.useState)(!1),s=(0,c.Z)(a,2),h=s[0],l=s[1],v=(0,p.useState)(""),x=(0,c.Z)(v,2),m=x[0],g=x[1],I=Boolean(e.length);return(0,p.useEffect)((function(){var t=function(){var t=(0,i.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,(0,f.q5)(n);case 4:r=t.sent,u(r),g(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),g(t.t0.message);case 12:return t.prev=12,l(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[h&&(0,Z.jsx)(w.Z,{}),I&&(0,Z.jsx)(j,{reviews:e}),m&&(0,Z.jsx)(b.Z,{err:m}),!I&&!h&&!m&&(0,Z.jsx)(y.Z,{item:"reviews"})]})}},4635:function(n,t,r){r.d(t,{Wf:function(){return f},XT:function(){return c},YJ:function(){return o},q5:function(){return h},yo:function(){return v}});var e=r(5861),u=r(7757),a=r.n(u),i=r(340);function c(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("trending/movie/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function n(t){var r,e,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:t},n.next=3,(0,i.Z)("search/movie",{params:r});case 3:return e=n.sent,u=e.data,n.abrupt("return",u.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRjNmI5NWRhNmE1NWI2MmI3YmQyY2NlMDBkZThjNCIsInN1YiI6IjY1NjRmN2Y0ZWRlYjQzMDBlM2Y4ZjA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Se99AElRac5dEFldAVBXHVj2Yn2Yvx3cf4i09wyudJc"}}]);
//# sourceMappingURL=655.25aab725.chunk.js.map