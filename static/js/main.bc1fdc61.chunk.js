(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(13),i=a.n(r),s=(a(23),a(3)),l=a(4),c=a(6),m=a(5),u=a(9),p=a.n(u),d=(a(27),a(14)),g=a.n(d),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},o.a.createElement("i",{className:e.className})))}));return o.a.createElement("header",{id:"home",style:{marginBottom:"50vh"}},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav",style:{marginLeft:"5vw"}},o.a.createElement("li",{className:"current"},o.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement(g.a,null,o.a.createElement("h1",{className:"responsive-headline"},e),o.a.createElement("hr",null),o.a.createElement("ul",{className:"social"},t)))))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:e.className})))}));return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e)),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),y=a(17);var v=function(e){var t=o.a.useState(!1),a=Object(y.a)(t,2),n=a[0],r=a[1],i=o.a.useRef();return o.a.useEffect((function(){var e=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(r(!0),e.unobserve(i.current))}))}));return e.observe(i.current),function(){return e.unobserve(i.current)}}),[]),o.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:i},e.children)},E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"calculateAge",value:function(e){var t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}},{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,t=(this.props.data.phone,this.props.data.email,this.props.data.resumedownload);this.calculateAge(new Date("March 16, 2001 00:00:00"))}return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row",style:{marginBottom:"50vh"}},o.a.createElement(v,null,o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:e,alt:"Michael Li"})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h1",{style:{color:"white",marginBottom:50}},"About Me"),o.a.createElement("p",{style:{fontSize:"medium"}},"I'm a software programmer and musician at Brown University studying computer science and music. Some of my projects are kept here."),o.a.createElement("p",null,o.a.createElement("a",{href:"opinions.html"},"Some opinions I have about music"),o.a.createElement("br",null)),o.a.createElement("div",{className:"columns download"},o.a.createElement("p",null,o.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:"button"},o.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.education.map((function(e){return o.a.createElement(v,null,o.a.createElement("div",{key:e.school,style:{marginBottom:"20vh"}},o.a.createElement("h3",null,e.school),o.a.createElement("p",{className:"infotwo"},e.degree," ",o.a.createElement("span",{style:{marginLeft:5,marginRight:7}},"\u2022"),o.a.createElement("em",{className:"date"},e.graduated)),o.a.createElement("p",{className:"info"},e.description)))})),t=this.props.data.work.map((function(e){return o.a.createElement(v,null,o.a.createElement("div",{key:e.company,style:{marginBottom:"10vh"}},o.a.createElement("h3",null,e.company),o.a.createElement("p",{className:"infotwo"},e.title,o.a.createElement("span",{style:{marginLeft:7,marginRight:7}},"\u2022")," ",o.a.createElement("em",{className:"date"},e.years)),o.a.createElement("p",{className:"info"},e.description)))}));this.props.data.mskills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return o.a.createElement("li",{key:e.name},o.a.createElement("span",{style:{width:200},className:t}),o.a.createElement("em",null,e.name))})),this.props.data.cskills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return o.a.createElement("li",{key:e.name},o.a.createElement("span",{style:{width:200},className:t}),o.a.createElement("em",null,e.name))}))}return o.a.createElement("section",{id:"resume"},o.a.createElement(v,null,o.a.createElement("h1",null,"Education")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"row item",style:{marginBottom:"50vh"}},o.a.createElement("div",{className:"twelve columns"},e))),o.a.createElement(v,null,o.a.createElement("h1",null,"Experience")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},t)))}}]),a}(n.Component),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.csProjects.map((function(e){var t="images/portfolio/"+e.image;return o.a.createElement("div",{key:e.title,className:"columns portfolio-item"},o.a.createElement(v,null,o.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noreferrer noopener"},o.a.createElement("img",{alt:e.title,className:"portfolioimg",src:t}),o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"portfolio-item-meta"},o.a.createElement("h5",{style:{marginBottom:"1vh"}},e.title),o.a.createElement("p",{className:"info"},e.category))))))})).reverse(),t=this.props.data.musicProjects.map((function(e){var t="images/portfolio/"+e.image;return o.a.createElement("div",{key:e.title,className:"columns portfolio-item"},o.a.createElement(v,null,o.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noreferrer noopener"},o.a.createElement("img",{alt:e.title,className:"portfolioimg",src:t}),o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"portfolio-item-meta"},o.a.createElement("h5",{style:{marginBottom:"1vh"}},e.title),o.a.createElement("p",{className:"info"},e.category))))))})).reverse();return o.a.createElement("section",{id:"portfolio"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},o.a.createElement(v,null,o.a.createElement("h1",null,"Software Projects")),e)),o.a.createElement("div",{className:"row",style:{marginBottom:"20vh"}},o.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},o.a.createElement(v,null,o.a.createElement("h1",{style:{marginTop:"10vh"}}," Music Projects ")),t)))}}]),a}(n.Component),N=a(7),k=a(16),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).setGA=function(){p.a.initialize("G-FZQGHMXF1K"),p.a.send("pageview")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setGA()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,{color:"#04d9ff",num:10,type:"cobweb",bg:!0}),o.a.createElement(h,{data:N.main}),o.a.createElement(E,{data:N.main}),o.a.createElement(b,{data:N.resume}),o.a.createElement(w,{data:N.portfolio}),o.a.createElement(f,{data:N.main}))}}]),a}(n.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");A?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()},7:function(e){e.exports=JSON.parse('{"main":{"name":"Michael Li","image":"profilepic.jpg","bio":"I\'m a ","email":"michael_s_li@brown.edu","phone":"908-902-6082","address":{"street":"(Your Street)","city":"(Your City)","state":"(Your State)","zip":"(Your Zip/Postal Code)"},"website":"","resumedownload":"portfolio/Li_Michael_Resume.pdf","social":[{"name":"linkedin","url":"https://www.linkedin.com/in/michael-li-14a4908b/","className":"fa fa-linkedin"},{"name":"github","url":"http://github.com/maikully","className":"fa fa-github"}]},"resume":{"education":[{"school":"Brown University","degree":"Sc.B. Computer Science and Music","graduated":"May 2023","description":"Studying music theory and composition and computer programming."},{"school":"High Technology High School","degree":"High School Diploma","graduated":"June 2019","description":"STEM-based magnet high school in Lincroft, New Jersey."}],"work":[{"company":"Capital One","title":"Software Engineer Intern (TIP)","years":"Jun - Aug 2022","description":"Led a full-stack intern project to develop an internal tool to assist in generating configuration files/pre-set file structures and reading and writing from databases. Used React and Flask with Python to develop the application, which uses questionnaires to programmatically generate/use configuration data."},{"company":"Merck","title":"Machine Learning Intern","years":"Jun - Aug 2021","description":"Used Camelot library to write a Python OCR script that parses data from English and Chinese PDFs into organized Excel spreadsheets. Researched and tested various PDF table extraction tools (Camelot, pdfplumber, Azure Form Recognizer) in virtual Python environment."},{"company":"Brown University IT Service Center","title":"Student Manager","years":"Feb 2021 - present","description":"Answers IT help tickets and chats as a member of the ITSC at Brown University. Troubleshoots technology used around campus and provides technical support to both staff and students. Manages shifts and logistics for other technical assistants."},{"company":"Abacus Counselling","title":"Website Designer","years":"Aug 2020","description":"Created website for Abacus Counselling, a consultation service for student in Sri Lanka applying to American universities."},{"company":"re:Bloom","title":"Website Designer","years":"Jun 2020","description":"Contributed to creating a website for re:Bloom in React."},{"company":"New Jersey Performing Arts Center","title":"Research Intern","years":"Feb - May 2019","description":"Intern at NJPAC, doing data entry and analysis of past and potential donors."},{"company":"QuantHouse","title":"Computer Networking Intern","years":"May - Aug 2018","description":"Paid summer internship at a data center, helping to inventory and migrate over one hundred server machines."}],"cskills":[{"name":"Java"},{"name":"Python"},{"name":"C"},{"name":"HTML"},{"name":"CSS"},{"name":"JS"},{"name":"React"},{"name":"Jenkins"},{"name":"Docker"},{"name":"Machine Learning"},{"name":"Deep Learning"},{"name":"AWS"},{"name":"SQL"},{"name":"x86-64 Assembly"},{"name":"LaTeX/LilyPond"}],"mskills":[{"name":"Music Theory"},{"name":"Violin"},{"name":"Guitar"},{"name":"Conducting"},{"name":"Logic"},{"name":"Reaper"},{"name":"Ableton Live"},{"name":"Adobe Photoshop"},{"name":"Adobe Premiere Pro"},{"name":"Adobe Audition"}]},"portfolio":{"csProjects":[{"title":"ChordConstructor","category":"A program that, given a key and roman numeral selected by the user, displays and sounds the chord on a treble clef staff.","url":"https://github.com/maikully/chord-constructor","image":"chord.jpg"},{"title":"Spothouse","category":"A webapp that allows a group of people to share and vote on a Spotify queue.","url":"https://spothouse-app.herokuapp.com/","image":"logo.png"},{"title":"JPEG Deblocker","category":"A convolutional neural network designed to remove blocking artifacts from JPEG images.","url":"https://github.com/OrenKohavi/DeepLearning-FinalProject/","image":"deblock.png"},{"title":"LOL Outcome Predictor","category":"A deep learning model that can predict the outcome of a League of Legends game based on the characters the players choose. ","url":"https://github.com/maikully/LOLOutcomePredictor","image":"lolop.png"},{"title":"Tablator","category":"A webapp that uses a DP algorithm to find the three best guitar fingering paths for a input sequence of notes or midi file, and displays their tabs.","url":"https://tablator.herokuapp.com","image":"tablator.png"}],"musicProjects":[{"title":"Pop Song","category":"A short \\"pop song\\" written for my intro music theory class (NB: many of the chord symbols are outdated)","url":"portfolio/pop_song.pdf","image":"popsong.jpg"},{"title":"Sonata Exposition","category":"A piano sonata exposition written for my intro music theory class","url":"portfolio/sonata.pdf","image":"sonata.jpg"},{"title":"Tanabata Song","category":"An SATB arrangement of the Japanese folk song \\"Tanabata\\"","url":"portfolio/Tanabata.mp3","image":"tanabata.jpg"},{"title":"In a Sentimental Mood","category":"An arrangement of the jazz standard \\"In a Sentimental Mood\\" for melodica and strings of varyingly low octaves","url":"portfolio/sentimental.mp3","image":"sentimental.jpg"},{"title":"Rainbow Funtime","category":"My first project for my intro to composition class, a short two-movement piece for solo flute","url":"portfolio/RainbowFuntime.pdf","image":"RainbowFuntime.jpg"},{"title":"Crossing the Bar","category":"My second project for my intro to composition class, a song for soparano and piano set to text by Alfred, Lord Tennyson","url":"portfolio/CrossingTheBar.mp3","image":"CrossingTheBar.jpg"},{"title":"Wormwood","category":"My final project for my intro to production class, a slowcore/shoegaze song","url":"portfolio/wormwood.mp3","image":"Wormwood.jpg"},{"title":"midterm","category":"Midterm project for my recording and sound design class. Used midi synths and recorded guitar and bass.","url":"portfolio/midterm.wav","image":"midterm.jpg"},{"title":"it\'s coming","category":"My final project for my recording and sound design class, a sort-of atonal rock song. Used midi guitar + recorded guitar and bass","url":"portfolio/it\'s coming.wav","image":"its_coming.jpg"},{"title":"Rainbow Funtime 2","category":"The latest development in the rainbow funtime saga","url":"portfolio/Rainbow Funtime 2.wav","image":"rainbowfuntime2.png"},{"title":"random house","category":"A go at house music, made in Logic","url":"portfolio/random_house.wav","image":"random_house.png"},{"title":"composition 3","category":"A go at ambient music, made in Logic","url":"portfolio/composition_3.mp3","image":"composition_3.png"}]}}')}},[[18,1,2]]]);
//# sourceMappingURL=main.bc1fdc61.chunk.js.map