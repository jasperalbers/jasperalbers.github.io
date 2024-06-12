"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[903],{6492:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),i=n(5086),r=n(7387);const o=(0,i.createGlobalStyle)(["body{background:",";@media (prefers-color-scheme:dark){background:",";}}"],r.n.light.backgroundColor,r.n.dark.backgroundColor);var l=n(1883);function c(){const{0:e,1:t}=(0,a.useState)(!1),n=()=>{const e=window.pageYOffset;t(e>50)};return(0,a.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[]),a.createElement(s,{hasScrolled:e},a.createElement(d,null,p.map(((e,t)=>a.createElement(l.Link,{to:e.path,key:t},a.createElement(m,null,e.icon&&a.createElement("img",{src:e.icon,alt:e.label}),e.label))))))}const s=i.default.div.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-leoys2-0"})(["position:fixed;width:100%;padding:10px 0;z-index:100;transition:0.8s cubic-bezier(0.2,0.8,0.2,1);-webkit-backdrop-filter:",";backdrop-filter:",";box-shadow:",";a{color:white;font-weight:700;}@media (max-width:640px){font-size:18px;}"],(e=>e.hasScrolled?"blur(10px)":"none"),(e=>e.hasScrolled?"blur(10px)":"none"),(e=>e.hasScrolled?"0 1px 20px rgba(0, 0, 0, 0.25)":"none")),d=i.default.div.withConfig({displayName:"Header__HeaderGroup",componentId:"sc-leoys2-1"})(["z-index:101;max-width:700px;margin:0 auto;display:grid;grid-template-columns:repeat(4,auto);align-items:center;justify-content:space-between;padding:10px 30px;img{margin-right:12px;vertical-align:middle;height:20px;width:auto;}@media (max-width:500px){grid-template-columns:repeat(2,1fr);grid-gap:10px;justify-items:center;align-items:center;}"]),m=i.default.button.withConfig({displayName:"Header__HeaderButton",componentId:"sc-leoys2-2"})(["color:black;padding:12px 20px;font-size:20px;background:#ffffff;border:none;font-weight:650;border-radius:10px;outline:none;cursor:pointer;box-shadow:0 10px 20px rgba(0,0,0,0.25);transition:0.8s cubic-bezier(0.2,0.8,0.2,1);&:hover{transform:translateY(-4px);}@media (max-width:640px){font-size:16px;padding:8px 16px;}@media (prefers-color-scheme:dark){color:",";background:",";box-shadow:",";}"],r.n.dark.text1,r.n.dark.card.backgroundColor,r.n.dark.card.boxShadow),p=[{path:"/",label:"Home",icon:"/images/icons/avatar.png"},{path:"/portfolio",label:"Portfolio"},{path:"/publications",label:"Publications"},{path:"/resume",label:"Résumé"}];var u=function(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(o,null),a.createElement(c,null),a.createElement("main",null,t))}},5101:function(e,t,n){var a=n(7294),i=n(1883);t.Z=function(e){var t,n;let{description:r,title:o,children:l}=e;const{site:c}=(0,i.useStaticQuery)("63159454"),s=r||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?o+" | "+d:o)," ",a.createElement("meta",{name:"description",content:s})," ",a.createElement("meta",{property:"og:title",content:o})," ",a.createElement("meta",{property:"og:description",content:s})," ",a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"})," ",a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""})," ",a.createElement("meta",{name:"twitter:title",content:o})," ",a.createElement("meta",{name:"twitter:description",content:s})," ",l," ")}},260:function(e,t,n){n.d(t,{us:function(){return h},hw:function(){return f},OP:function(){return u},ZP:function(){return d}});var a=n(7294),i=n(1883),r=n(5086),o=n(1103);function l(){return a.createElement(c,null,a.createElement(s,{src:"/images/backgrounds/waves.svg"}))}const c=r.default.div.withConfig({displayName:"WaveBackground__Wrapper",componentId:"sc-1bf6bor-0"})(["position:absolute;top:0;left:0;width:100%;height:340px;z-index:1;"]),s=r.default.img.withConfig({displayName:"WaveBackground__Wave",componentId:"sc-1bf6bor-1"})(['filter:blur(6px);@media (prefers-color-scheme:dark){content:url("/images/backgrounds/waves-dark.svg");}']);function d(e){return a.createElement(m,null,a.createElement(l,null),a.createElement(u,null,a.createElement(o.H1,null,e.title),a.createElement(o.H2,null,e.subtitle),a.createElement(o.oh,null,e.description)))}const m=r.default.div.withConfig({displayName:"HeroSection__Wrapper",componentId:"sc-19x1i20-0"})(["position:relative;width:100%;height:300px;overflow:hidden;"]),p=(0,r.keyframes)(["0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0px);}"]),u=r.default.div.withConfig({displayName:"HeroSection__TextWrapper",componentId:"sc-19x1i20-1"})(["margin:auto;position:relative;z-index:2;padding:100px 50px;max-width:600px;display:flex;text-align:center;justify-content:center;align-items:center;flex-direction:column;> *{opacity:0;animation:"," 3s 0.1s cubic-bezier(0.2,0.8,0.2,1) forwards;}@media (max-width:500px){padding:135px 50px;}"],p),h=(0,r.default)(m).withConfig({displayName:"HeroSection__SocialMedia",componentId:"sc-19x1i20-2"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-gap:30px;justify-items:center;max-height:60px;padding:20px;a{transition:transform 0.2s ease-in-out;}a:hover{transform:translateY(-4px);}@media (max-width:550px){grid-gap:10px;}"]);function f(e){return a.createElement(i.Link,{to:e.link}," ",a.createElement(x,{src:e.image,alt:e.alt,width:"40",imageDark:e.imageDark})," ")}const x=r.default.img.withConfig({displayName:"HeroSection__SocialMediaIcon",componentId:"sc-19x1i20-3"})(["@media (prefers-color-scheme:dark){content:url(",");}"],(e=>e.imageDark))},7387:function(e,t,n){n.d(t,{n:function(){return a}});const a={light:{text1:"black",text2:"rgba(0,0,0,0.7)",primary:"#3913B8",secondary:"#2FB5FC",backgroundColor:"white",card:{backgroundColor:"rgba(255, 255, 255, 0.6)",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.25),\n      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)",backgroundColorFull:"rgba(255, 255, 255, 1)"},cardHover:{backgroundColor:"rgba(68, 66, 178, 0.1)",boxShadow:"inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2)"}},dark:{text1:"white",text2:"rgba(255,255,255,0.7)",backgroundColor:"rgba(0, 0, 0, 1)",card:{backgroundColor:"rgba(38, 38, 38, 0.98)",boxShadow:"0px 30px 60px rgba(0, 0, 0, 0.25)",backgroundColorFull:"rgba(15, 14, 71, 1)"},cardHover:{backgroundColor:"rgba(255, 255, 255, 0.1)",boxShadow:"inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)"}}}},1103:function(e,t,n){n.d(t,{A7:function(){return d},H1:function(){return r},H2:function(){return o},H3:function(){return l},H4:function(){return c},oh:function(){return s}});var a=n(5086),i=n(7387);const r=a.default.h1.withConfig({displayName:"TextStyles__H1",componentId:"sc-18331fh-0"})(["margin:0;color:black;font-size:50px;line-height:1.2;@media (max-width:500px){font-size:42px;}@media (max-width:400px){font-size:35px;}@media (prefers-color-scheme:dark){color:",";}"],i.n.dark.text1),o=a.default.h2.withConfig({displayName:"TextStyles__H2",componentId:"sc-18331fh-1"})(["margin:0;color:rgba(0,0,0,0.6);font-size:32px;line-height:1.2;@media (max-width:500px){font-size:28px;}@media (max-width:400px){font-size:24px;}@media (prefers-color-scheme:dark){color:",";}"],i.n.dark.text2),l=a.default.h3.withConfig({displayName:"TextStyles__H3",componentId:"sc-18331fh-2"})(["font-weight:bold;font-size:30px;@media (max-width:600px){font-size:24px;}@media (prefers-color-scheme:dark){color:",";}"],i.n.dark.text1),c=a.default.h4.withConfig({displayName:"TextStyles__H4",componentId:"sc-18331fh-3"})(["font-weight:bold;font-size:20px;@media (max-width:600px){font-size:17px;}@media (max-width:400px){font-size:14px;}@media (prefers-color-scheme:dark){color:",";}"],i.n.dark.text1),s=(a.default.p.withConfig({displayName:"TextStyles__BodyIntro",componentId:"sc-18331fh-4"})(["font-weight:500;font-size:24px;line-height:140%;"]),a.default.p.withConfig({displayName:"TextStyles__BodyMain",componentId:"sc-18331fh-5"})(["color:rgba(0,0,0,0.7);font-size:20px;line-height:1.5;@media (max-width:500px){font-size:17px;}@media (prefers-color-scheme:dark){color:",";}"],i.n.dark.text1)),d=a.default.p.withConfig({displayName:"TextStyles__MediumText",componentId:"sc-18331fh-6"})(["font-weight:normal;font-size:16px;line-height:130%;@media (max-width:600px){font-size:14px;}@media (prefers-color-scheme:dark){color:",";}"],i.n.dark.text1);a.default.p.withConfig({displayName:"TextStyles__Caption",componentId:"sc-18331fh-7"})(["font-weight:500;font-size:15px;line-height:18px;"]),a.default.p.withConfig({displayName:"TextStyles__Caption2",componentId:"sc-18331fh-8"})(["font-weight:600;font-size:15px;line-height:18px;text-transform:uppercase;"]),a.default.p.withConfig({displayName:"TextStyles__SmallText",componentId:"sc-18331fh-9"})(["font-weight:normal;font-size:13px;line-height:130%;"]),a.default.p.withConfig({displayName:"TextStyles__SmallText2",componentId:"sc-18331fh-10"})(["font-weight:600;font-size:13px;line-height:130%;text-transform:uppercase;"]),a.default.a.withConfig({displayName:"TextStyles__Link",componentId:"sc-18331fh-11"})(["padding:5px 5px;border:none;font-weight:650;border-radius:40px;outline:none;transition:0.3s cubic-bezier(0.2,0.8,0.2,1);cursor:pointer;transition:0.8s cubic-bezier(0.2,0.8,0.2,1);"])},8855:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return x}});var a=n(7294),i=n(5086),r=n(260),o=n(6492),l=n(5101),c=n(1103),s=n(7387);function d(e){const t=e=>{const t=e.split(":");return t.length>1?a.createElement(a.Fragment,null,a.createElement("span",{className:"bold-text"},t[0]),":"," ",t.slice(1).join(":")," "):e};return a.createElement(p,null,a.createElement("ul",null,a.createElement(u,null,a.createElement(c.H4,null,e.title),a.createElement(m,null,e.time),a.createElement(c.A7,null,e.grade&&a.createElement(a.Fragment,null,t(e.grade),a.createElement("br",null)),e.track&&a.createElement(a.Fragment,null,t(e.track),a.createElement("br",null)),e.text&&a.createElement(a.Fragment,null,t(e.text),a.createElement("br",null)),e.supervisor&&a.createElement(a.Fragment,null,t(e.supervisor),a.createElement("br",null))),a.createElement(c.A7,null,a.createElement("i",null,e.place)))),a.createElement("br",null))}const m=i.default.div.withConfig({displayName:"BulletPoint__Time",componentId:"sc-s47bkl-0"})(["color:#61ad71;font-size:15px;font-weight:380;"]),p=i.default.div.withConfig({displayName:"BulletPoint__Wrapper",componentId:"sc-s47bkl-1"})(["p .bold-text{font-weight:bold;}"]),u=i.default.li.withConfig({displayName:"BulletPoint__Li",componentId:"sc-s47bkl-2"})(["color:black;@media (prefers-color-scheme:dark){color:white;}"]);var h=JSON.parse('{"v":{"f3":[{"title":"PhD in Computational Neuroscience 🧠","time":"since 12.2019","text":"Working title: Simulation and benchmarking of large-scale and spatially organized cortical network models","supervisor":"Supervisors: Prof. Markus Diesmann, Prof. Sacha J. van Albada","place":"IAS-6, Forschungszentrum Jülich, Jülich, Germany"},{"title":"Research Stay 🇺🇸","time":"10.2022 – 03.2023","text":"Collaborating with Stefan Mihalas, Ph.D.","place":"Allen Institute for Brain Science, Seattle, USA"},{"title":"M.Sc. in Physics 🪐","time":"10.2016 – 09.2019","grade":"Grade: 1.0","track":"Track of Study: Quantum Field Theories and Gauge Theories","text":"Thesis: Physics-Driven Implementation of Neural Networks within Einstein-Boltzmann Solvers","supervisor":"Supervisor: Prof. Julien Lesgourgues","place":"RWTH Aachen University, Aachen, Germany"},{"title":"Exchange Semester 🇳🇴","time":"01.2017 – 06.2017","text":"Funded by an Erasmus+ Scholarship","place":"NTNU, Trondheim, Norway"},{"title":"B.Sc. in Physics 🔭","time":"10.2013 – 09.2016","grade":"Grade: 1.0","text":"Thesis: Fitting the Galactic Center Excess with Simplified Models for Dark Matter","supervisor":"Supervisor: Prof. Michael Krämer","place":"RWTH Aachen University, Aachen, Germany"}],"b8":[{"title":"Teaching Assistant: Theoretical Neuroscience","time":"04.2021 – 06.2024","place":"RWTH Aachen University, Aachen, Germany"},{"title":"Teaching Assistant: Computational Neuroscience","time":"04.2021 – 06.2024","place":"University of Cologne, Cologne, Germany"},{"title":"Teaching Assistant: Statistical Physics","time":"04.2021 – 06.2024","place":"RWTH Aachen University, Aachen, Germany"},{"title":"Teaching Assistant: Classical Mechanics, Special Relativity","time":"04.2021 – 06.2024","place":"RWTH Aachen University, Aachen, Germany"}],"OB":[{"title":"DAAD scholarship","text":"German Academic Exchange Service","time":"09.2022 – 03.2023"},{"title":"Deutschlandstipendium","text":"Dr. Jost Henkel Stiftung","time":"09.2017 – 08.2018"},{"title":"Deutschlandstipendium","text":"Siemens AG","time":"01.2017 – 08.2017"},{"title":"Dean\'s List of RWTH Aachen University","text":"Ranking in the top five percent of a class in an academic year","time":"2014, 2015, 2016"}],"nb":[{"title":"Languages","text":"German (native), English (business proficient), French (elementary)"},{"title":"Programming","text":"Python (data analysis and processing, scientific computing), C++ and Rust (elementary scientific computing), High-Performance Computing"}],"Tn":[{"title":"KI macht Schule e.V.","time":"since 04.2020","text":"Designing interactive course material and giving workshops in German schools to support pupils in gaining an intuitive understanding of the working mechanisms of AI and discussing AI’s impact on society."},{"title":"Representative at the Scientific and Technical Council","time":"01.2022 – 01.2024","text":"Providing advice to the executive board of Research Center Jülich; issuing recommendations concerning research and human resources policy, participating in the appointment of the directors of the institutes."}]}}');const f=()=>a.createElement(l.Z,{title:"Publications"});var x=function(){return a.createElement(o.Z,null,a.createElement(r.ZP,{title:"Résumé",description:"My life until now!"}),a.createElement(g,null,a.createElement(b,null,a.createElement(c.H3,null,"🎓 Education"),h.v.f3.map((e=>a.createElement(d,{title:e.title,time:e.time,place:e.place,text:e.text,grade:e.grade,supervisor:e.supervisor,track:e.track})))),a.createElement(b,null,a.createElement(c.H3,null,"🏆 Awards and Scholarships"),h.v.OB.map((e=>a.createElement(d,{title:e.title,time:e.time,text:e.text})))),a.createElement(b,null,a.createElement(c.H3,null,"🔨 Work Experience"),h.v.b8.map((e=>a.createElement(d,{title:e.title,time:e.time,place:e.place})))),a.createElement(b,null,a.createElement(c.H3,null,"✨ Skills"),h.v.nb.map((e=>a.createElement(d,{title:e.title,text:e.text})))),a.createElement(b,null,a.createElement(c.H3,null,"👥 Voluntary Engagement"),h.v.Tn.map((e=>a.createElement(d,{title:e.title,text:e.text,time:e.time}))))))};const g=i.default.div.withConfig({displayName:"resume__Resume",componentId:"sc-9xvamb-0"})(["display:flex;flex-direction:column;flex-wrap:wrap;margin:50px 0;gap:30px;max-height:3000px;@media (max-width:1250px){max-height:100%;}"]),b=i.default.div.withConfig({displayName:"resume__ResumeSection",componentId:"sc-9xvamb-1"})(['margin:0px auto 50px auto;position:relative;overflow:hidden;border-radius:20px;box-shadow:0 20px 40px rgba(0,0,0,0.25);padding:10px 30px 10px 30px;width:500px;&::before,&::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;box-shadow:0 20px 40px rgba(0,0,0,0.25);border-radius:20px;pointer-events:none;}@media (max-width:650px){width:75%;}@media (prefers-color-scheme:dark){background:',";box-shadow:",";}"],s.n.dark.card.backgroundColor,s.n.dark.card.boxShadow)}}]);
//# sourceMappingURL=component---src-pages-resume-js-34085d1c66a54e1281c9.js.map