(this.webpackJsonpsneakertopiav2=this.webpackJsonpsneakertopiav2||[]).push([[0],{10:function(e,s,c){e.exports={container:"HomePage_container__3-fhh",headcontainer:"HomePage_headcontainer__1t5mS",insidecontainer:"HomePage_insidecontainer__3EsFB",nav:"HomePage_nav__28a0i",arrow:"HomePage_arrow__297BZ",box:"HomePage_box__1ook8",dropdown:"HomePage_dropdown__32NS9",dd_content:"HomePage_dd_content__3aMXr",active:"HomePage_active__3v4qD",filter_cards:"HomePage_filter_cards__3qBNW",cards:"HomePage_cards__CwDGr",sideMenu:"HomePage_sideMenu__xRMWi"}},16:function(e,s,c){e.exports={container:"NavBar_container__3QzhA",rightnav:"NavBar_rightnav__kOdSS",menu:"NavBar_menu__2thuT"}},19:function(e,s,c){e.exports={card:"ProductCard_card__2Fm8N",img:"ProductCard_img__3j9LW",desp:"ProductCard_desp__1EkHh"}},2:function(e,s,c){e.exports={container:"ProductDetails_container__A_ho3",product_cover:"ProductDetails_product_cover__2YfhP",blank:"ProductDetails_blank__2gOF3",name:"ProductDetails_name__11412",scroll:"ProductDetails_scroll__3YDLt",cover:"ProductDetails_cover__kwJEx",slider:"ProductDetails_slider__26jZx",prev:"ProductDetails_prev__3b60f",next:"ProductDetails_next__2Ymn_",slides:"ProductDetails_slides__1jQ9I",colors:"ProductDetails_colors__15NRy",top:"ProductDetails_top__lGDIP",bottom:"ProductDetails_bottom__1g-Jj",product_details:"ProductDetails_product_details__PUKfK",desp:"ProductDetails_desp__2XirG",points:"ProductDetails_points__3U4-m",col:"ProductDetails_col__2Hzfg",row:"ProductDetails_row__1mS7U",buyfrom:"ProductDetails_buyfrom__1TAZ3",paycards:"ProductDetails_paycards__18gev",card:"ProductDetails_card__2qvxG",left:"ProductDetails_left__1pVOt",right:"ProductDetails_right__3yKmC",img:"ProductDetails_img__i1UFX",buy:"ProductDetails_buy__3NI3T",aboutdesigner:"ProductDetails_aboutdesigner__-2kAb",explore:"ProductDetails_explore__29Q-H",cards:"ProductDetails_cards__3j5Vk"}},20:function(e,s,c){e.exports={container:"Compare_container__ntzJq",desp:"Compare_desp__1_Mt5",cards:"Compare_cards__DJr2j"}},27:function(e,s,c){e.exports={container:"SearchBar_container__2EGW6"}},32:function(e,s,c){},4:function(e,s,c){e.exports={container:"CompareCard_container__lkLdE",img:"CompareCard_img__27zsX",desp:"CompareCard_desp__2foTg",row:"CompareCard_row__1aKFa",col:"CompareCard_col__3kX95",checked:"CompareCard_checked__G9MmX",colors:"CompareCard_colors__1Ca5Z"}},42:function(e,s,c){},43:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),i=c(24),r=c.n(i),n=(c(32),c(18)),l=c(3),d=c(12),o=c(5),j=c(11),b=c(19),h=c.n(b),m=c(0),O=function(){return Object(m.jsxs)(j.b,{to:"/details",className:h.a.card,children:[Object(m.jsx)("div",{className:h.a.img,children:Object(m.jsx)("img",{alt:"",src:"images/sneaker 1 1.png"})}),Object(m.jsxs)("div",{className:h.a.desp,children:[Object(m.jsx)("h2",{children:"Air Max pegasus 37"}),Object(m.jsx)("p",{children:"Mens Running Shoes"})]})]})},x=c(27),u=c.n(x),g=function(){var e=Object(a.useState)({search:""}),s=Object(d.a)(e,2),c=s[0],t=s[1],i=Object(o.f)();return Object(m.jsx)("div",{className:u.a.container,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.push("/?".concat(c.search))},children:[Object(m.jsx)("input",{type:"text",placeholder:"Search",value:c.search,onChange:function(e){return t(Object(l.a)(Object(l.a)({},c),{},{search:e.target.value}))}}),Object(m.jsxs)("button",{type:"submit",children:[Object(m.jsx)("img",{alt:"",src:"images/search icon.svg"}),"SEARCH"]})]})})},_=c(10),v=c.n(_),p=Object(o.g)((function(e){var s=e.location,c={search:s.search?decodeURI(s.search.substr(1)):null,sortby:"All Categories",date:null,category:null},i=t.a.useState(c),r=Object(d.a)(i,2),o=r[0],j=r[1],b=t.a.useState({sortby:!1,filter:!1}),h=Object(d.a)(b,2),x=h[0],u=h[1];return Object(a.useEffect)((function(){window.scrollTo(0,0),j(Object(l.a)(Object(l.a)({},o),{},{search:s.search?decodeURI(s.search.substr(1)):null})),o.search&&document.getElementById("search").scrollIntoView()}),[s,o.search]),Object(m.jsxs)("div",{className:v.a.container,children:[Object(m.jsx)("div",{className:v.a.headcontainer,children:Object(m.jsxs)("div",{className:v.a.insidecontainer,children:[Object(m.jsx)("h1",{children:"FIND THE PERFECT PAIR"}),Object(m.jsx)("p",{children:"Stay on top of the ever-changing sneaker and streetwear markets using our super-powered search engine and comparison tool."}),Object(m.jsx)(g,{})]})}),Object(m.jsx)("div",{id:"search",children:o.search?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:v.a.nav,children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{onClick:function(){return u(Object(l.a)(Object(l.a)({},x),{},{filter:!x.filter}))},children:[Object(m.jsx)("span",{children:x.filter?"Hide Filters":"Show Filters"}),Object(m.jsx)("img",{alt:"",className:"".concat(v.a.arrow," fuckingarrow"),src:"images/Caret.png",style:{transform:x.filter?"rotate(0deg)":null}}),"\u2003 \u2003 \u2003"," ",Object(m.jsx)("span",{style:{color:"black",display:x.filter?"inline-block":"none"},onClick:function(){return j(c)},children:"Reset"})]}),Object(m.jsxs)("li",{children:['Showing Results for "',o.search,'"']}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:v.a.box,children:[Object(m.jsxs)("div",{className:v.a.dropdown,onClick:function(){return u(Object(l.a)(Object(l.a)({},x),{},{sortby:!x.sortby}))},children:[Object(m.jsx)("span",{children:"Sort by"}),Object(m.jsx)("h3",{children:o.sortby}),Object(m.jsx)("img",{alt:"",src:"images/Caret.png"})]}),Object(m.jsx)("div",{className:v.a.dd_content,style:x.sortby?{display:"block"}:{display:"none"},children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){j(Object(l.a)(Object(l.a)({},o),{},{sortby:"Popular"})),u(Object(l.a)(Object(l.a)({},x),{},{sortby:!1}))},children:"Popular"}),Object(m.jsx)("li",{onClick:function(){j(Object(l.a)(Object(l.a)({},o),{},{sortby:"New"})),u(Object(l.a)(Object(l.a)({},x),{},{sortby:!1}))},children:"New"}),Object(m.jsx)("li",{onClick:function(){j(Object(l.a)(Object(l.a)({},o),{},{sortby:"Avaiablity"})),u(Object(l.a)(Object(l.a)({},x),{},{sortby:!1}))},children:"Availablity"}),Object(m.jsx)("li",{onClick:function(){j(Object(l.a)(Object(l.a)({},o),{},{sortby:"Price (low-high)"})),u(Object(l.a)(Object(l.a)({},x),{},{sortby:!1}))},children:"Price (low-high)"}),Object(m.jsx)("li",{onClick:function(){j(Object(l.a)(Object(l.a)({},o),{},{sortby:"Price (high-low)"})),u(Object(l.a)(Object(l.a)({},x),{},{sortby:!1}))},children:"Price (high-low)"})]})})]})})]})}),Object(m.jsxs)("div",{className:v.a.filter_cards,children:[x.filter?Object(m.jsx)("div",{className:v.a.sideMenu}):null,Object(m.jsx)("div",{className:"".concat(v.a.cards," ").concat(x.filter?v.a.cardsWithFilter:null),children:Object(n.a)(Array(24)).map((function(e,s){return Object(m.jsx)(O,{},s)}))})]})]}):null})]})})),N=(c(42),c(4)),f=c.n(N),y=function(){return Object(m.jsxs)(j.b,{to:"/details",className:f.a.container,children:[Object(m.jsx)("div",{className:f.a.img,children:Object(m.jsx)("img",{alt:"",src:"images/air-max-90-flyease - Copy.png"})}),Object(m.jsxs)("div",{className:f.a.desp,children:[Object(m.jsx)("h3",{children:"Air Max pegasus 37"}),Object(m.jsxs)("div",{className:f.a.row,children:[Object(m.jsx)("div",{className:f.a.col,children:"Ratings"}),Object(m.jsxs)("div",{className:f.a.col,children:[Object(m.jsx)("span",{className:"".concat(f.a.checked," fa fa-star")}),Object(m.jsx)("span",{className:"".concat(f.a.checked," fa fa-star")}),Object(m.jsx)("span",{className:"".concat(f.a.checked," fa fa-star")}),Object(m.jsx)("span",{className:"".concat(f.a.checked," fa fa-star")}),Object(m.jsx)("span",{className:"".concat(f.a.checked," fa fa-star")})]})]}),Object(m.jsxs)("div",{className:f.a.row,children:[Object(m.jsx)("div",{className:f.a.col,children:"Price"}),Object(m.jsx)("div",{className:f.a.col,children:"$249"})]}),Object(m.jsxs)("div",{className:f.a.row,children:[Object(m.jsx)("div",{className:f.a.col,children:"Expert Score"}),Object(m.jsx)("div",{className:f.a.col,children:"4.9"})]}),Object(m.jsxs)("div",{className:f.a.row,children:[Object(m.jsx)("div",{className:f.a.col,children:"Sizes"}),Object(m.jsx)("div",{className:f.a.col,children:"S | M | L"})]}),Object(m.jsxs)("div",{className:f.a.row,children:[Object(m.jsx)("div",{className:f.a.col,children:"Colors"}),Object(m.jsxs)("div",{className:f.a.col,children:[Object(m.jsx)("span",{className:f.a.colors,style:{background:"black"}}),Object(m.jsx)("span",{className:f.a.colors,style:{background:"white"}}),Object(m.jsx)("span",{className:f.a.colors,style:{background:"#38BFF9"}}),Object(m.jsx)("span",{className:f.a.colors,style:{background:"#F93872"}})]})]})]})]})},w=c(20),k=c.n(w),P=function(){var e=Object(a.useState)(document.documentElement.clientWidth>700),s=Object(d.a)(e,2),c=s[0],t=s[1];Object(a.useEffect)((function(){return window.scrollTo(0,0),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]);var i=function(){var e=document.documentElement.clientWidth;e>700?t(!0):e<=700&&t(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:k.a.container,children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:k.a.desp,children:[Object(m.jsx)("h1",{children:"COMPARE"}),Object(m.jsx)("p",{children:"Stay on top of the ever-changing sneaker and streetwear markets using our super-powered search engine and comparison tool."})]})]}),Object(m.jsxs)("div",{className:k.a.cards,children:[Object(m.jsx)(y,{}),Object(m.jsx)(y,{}),c?Object(m.jsx)(y,{}):null]})]})},A=c(2),C=c.n(A),D={id:1,title:"Nike AIR",price:"99.5",model:"Air Jordan",release_date:"2021-08-20",sku:"DJ1034 200",upper_material:"Tan",score:"4.3",sizes:[8,9,10,11,12,13,14,15],colors:["pink","red","green","black"],images:["images/Air Edge 274.png","images/Air Edge 274.png","images/Air Edge 274.png","images/Air Edge 274.png","images/Air Edge 274.png","images/Air Edge 274.png","images/Air Edge 274.png"],detail:"The Aleali May x women\u2019s Air Jordan 14 Retro Low SP \u2018Fortune\u2019 reunites Jordan Brand with the LA-based model and stylist for a fifth collaboration. Inspired by May\u2019s personal heritage and cultural experiences, the low-top is treated to a luxe makeover, highlighted by a tan suede upper with contrasting hits of black on the collar and tongue.",designer:{name:"Tinker Haterfield",image:"images/Mask Group.svg",detail:"Hatfield was the lead designer of Air Jordans III through XV, XX, and XX3. Additionally, Hatfield co-designed Air Jordans 2010 and XXX. Phil Knight credits the Air Jordan III with saving Nike."},comments:[{id:1,name:"Dorothy Parker",img:"images/Mask Group.svg",date:"Today at 12:05",comment:"This is probably one of the best shoes i\u2019ve seen, i definetly recommend it to everyone!"},{id:2,name:"Dorothy Parker",img:"images/Mask Group.svg",date:"Today at 12:05",comment:"This is probably one of the best shoes i\u2019ve seen, i definetly recommend it to everyone!"}]},E=function(){Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=t.a.useState(D.images[0]),s=Object(d.a)(e,2),c=s[0],i=s[1],r=document.getElementsByClassName("slide");return Object(m.jsxs)("div",{className:C.a.container,children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:C.a.product_cover,children:[Object(m.jsxs)("div",{className:C.a.blank,children:[Object(m.jsxs)("div",{className:C.a.name,children:[Object(m.jsx)("h5",{children:"Men's Shoe"}),Object(m.jsx)("h2",{children:"Nike Air Edge 270"}),Object(m.jsx)("p",{children:"The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens."})]}),Object(m.jsx)("div",{className:C.a.scroll,children:"Scroll Down"})]}),Object(m.jsxs)("div",{className:C.a.cover,children:[Object(m.jsx)("div",{className:C.a.cover,children:Object(m.jsx)("img",{alt:"",src:c})}),Object(m.jsxs)("div",{className:C.a.slider,children:[Object(m.jsxs)("div",{className:C.a.prev,onClick:function(){r[0].scrollLeft-=200},children:[Object(m.jsx)("h3",{children:"PREV"}),Object(m.jsx)("img",{alt:"",src:"images/Group 14.svg"})]}),Object(m.jsx)("div",{className:C.a.slides,children:Object(m.jsx)("ul",{className:"slide",children:D.images.map((function(e,s){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{alt:"",src:e,onClick:function(e){return i(e.target.src)}})},s)}))})}),Object(m.jsxs)("div",{className:C.a.next,onClick:function(){r[0].scrollLeft+=200},children:[Object(m.jsx)("h3",{children:"NEXT"}),Object(m.jsx)("img",{alt:"",src:"images/Group 2.svg"})]})]})]}),Object(m.jsxs)("div",{className:C.a.colors,children:[Object(m.jsxs)("div",{className:C.a.top,children:[Object(m.jsx)("h5",{children:"COLOR OPTIONS"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"White"}),Object(m.jsx)("li",{children:"Blue"}),Object(m.jsx)("li",{children:"Green"}),Object(m.jsx)("li",{children:"Red"})]})]}),Object(m.jsx)("div",{className:C.a.bottom,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("img",{alt:"",src:"images/facebook-fill 1.svg"})}),Object(m.jsx)("li",{children:Object(m.jsx)("img",{alt:"",src:"images/instagram-fill 1.svg"})}),Object(m.jsx)("li",{children:Object(m.jsx)("img",{alt:"",src:"images/twitter-fill 1.svg"})})]})})]})]}),Object(m.jsxs)("div",{className:C.a.product_details,children:[Object(m.jsxs)("div",{className:C.a.desp,children:[Object(m.jsx)("h3",{children:"PRODUCT DETAILS"}),Object(m.jsx)("p",{children:"The Aleali May x women\u2019s Air Jordan 14 Retro Low SP \u2018Fortune\u2019 reunites Jordan Brand with the LA-based model and stylist for a fifth collaboration. Inspired by May\u2019s personal heritage and cultural experiences, the low-top is treated to a luxe makeover, highlighted by a tan suede upper with contrasting hits of black on the collar and tongue. The midsole is enlivened with jade accents and a metallic gold shank plate, both of which nod to May\u2019s first ever piece of jewelry \u2014 a bracelet that was gifted by her grandmother."}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})})]}),Object(m.jsxs)("div",{className:C.a.points,children:[Object(m.jsxs)("div",{className:C.a.col,children:[Object(m.jsx)("div",{className:C.a.row,children:"BRAND"}),Object(m.jsx)("div",{className:C.a.row,children:"Air Jordan"})]}),Object(m.jsxs)("div",{className:C.a.col,children:[Object(m.jsx)("div",{className:C.a.row,children:"RELEASE DATE"}),Object(m.jsx)("div",{className:C.a.row,children:"2021-08-20"})]}),Object(m.jsxs)("div",{className:C.a.col,children:[Object(m.jsx)("div",{className:C.a.row,children:"SKU"}),Object(m.jsx)("div",{className:C.a.row,children:"DJ1034 200"})]}),Object(m.jsxs)("div",{className:C.a.col,children:[Object(m.jsx)("div",{className:C.a.row,children:"Upper material"}),Object(m.jsx)("div",{className:C.a.row,children:"Sudede"})]}),Object(m.jsxs)("div",{className:C.a.col,children:[Object(m.jsx)("div",{className:C.a.row,children:"Main color"}),Object(m.jsx)("div",{className:C.a.row,children:"Tan"})]})]}),Object(m.jsxs)("div",{className:C.a.buyfrom,children:[Object(m.jsx)("h4",{children:"BUY FROM"}),Object(m.jsxs)("div",{className:C.a.paycards,children:[Object(m.jsxs)("div",{className:C.a.card,children:[Object(m.jsxs)("div",{className:C.a.top,children:[Object(m.jsxs)("div",{className:C.a.left,children:[Object(m.jsx)("span",{}),Object(m.jsx)("p",{children:"Available"})]}),Object(m.jsx)("div",{className:C.a.right,children:"$99.5"})]}),Object(m.jsx)("div",{className:C.a.img,children:Object(m.jsx)("img",{alt:"",src:"images/image 7.png"})}),Object(m.jsx)("div",{className:C.a.buy,children:Object(m.jsx)("button",{children:"BUY"})})]}),Object(m.jsxs)("div",{className:C.a.card,children:[Object(m.jsxs)("div",{className:C.a.top,children:[Object(m.jsxs)("div",{className:C.a.left,children:[Object(m.jsx)("span",{}),Object(m.jsx)("p",{children:"Available"})]}),Object(m.jsx)("div",{className:C.a.right,children:"$99.5"})]}),Object(m.jsx)("div",{className:C.a.img,children:Object(m.jsx)("img",{alt:"",src:"images/image 5.png"})}),Object(m.jsx)("div",{className:C.a.buy,children:Object(m.jsx)("button",{children:"BUY"})})]}),Object(m.jsxs)("div",{className:C.a.card,children:[Object(m.jsxs)("div",{className:C.a.top,children:[Object(m.jsxs)("div",{className:C.a.left,children:[Object(m.jsx)("span",{}),Object(m.jsx)("p",{children:"Available"})]}),Object(m.jsx)("div",{className:C.a.right,children:"$99.5"})]}),Object(m.jsx)("div",{className:C.a.img,children:Object(m.jsx)("img",{alt:"",src:"images/image 4.png"})}),Object(m.jsx)("div",{className:C.a.buy,children:Object(m.jsx)("button",{children:"BUY"})})]}),Object(m.jsxs)("div",{className:C.a.card,children:[Object(m.jsxs)("div",{className:C.a.top,children:[Object(m.jsxs)("div",{className:C.a.left,children:[Object(m.jsx)("span",{}),Object(m.jsx)("p",{children:"Available"})]}),Object(m.jsx)("div",{className:C.a.right,children:"$99.5"})]}),Object(m.jsx)("div",{className:C.a.img,children:Object(m.jsx)("img",{alt:"",src:"images/image 6.png"})}),Object(m.jsx)("div",{className:C.a.buy,children:Object(m.jsx)("button",{children:"BUY"})})]})]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:C.a.aboutdesigner,children:[Object(m.jsx)("h4",{children:"ABout THE DESIGNER"}),Object(m.jsx)("h3",{children:"Tinker Haterfield"}),Object(m.jsx)("p",{children:"Hatfield was the lead designer of Air Jordans III through XV, XX, and XX3. Additionally, Hatfield co-designed Air Jordans 2010 and XXX. Phil Knight credits the Air Jordan III with saving Nike."})]})]}),Object(m.jsxs)("div",{className:C.a.explore,children:[Object(m.jsx)("h3",{children:"EXPLORE OTHERS"}),Object(m.jsx)("div",{className:C.a.cards,children:Object(n.a)(Array(6)).map((function(){return Object(m.jsx)(O,{})}))})]})]})},S=c(16),T=c.n(S),I=function(){return Object(m.jsxs)("div",{className:T.a.container,children:[Object(m.jsx)(j.b,{to:"/",className:T.a.logo,children:Object(m.jsx)("img",{alt:"",src:"images/image 1.svg"})}),Object(m.jsxs)("div",{className:T.a.rightnav,children:[Object(m.jsx)(j.b,{to:"/compare",children:Object(m.jsx)("h3",{children:"COMPARE"})}),Object(m.jsx)("div",{className:T.a.menu,children:Object(m.jsx)("img",{alt:"",src:"images/whitedots.svg"})})]})]})};var H=function(){return Object(m.jsxs)(j.a,{base:!0,children:[Object(m.jsx)(I,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:p}),Object(m.jsx)(o.a,{exact:!0,path:"/compare",component:P}),Object(m.jsx)(o.a,{exact:!0,path:"/details",component:E}),Object(m.jsx)(o.a,{children:Object(m.jsx)("h3",{style:{textAlign:"center"},children:"Are you lost baby girl?"})})]})]})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,i=s.getLCP,r=s.getTTFB;c(e),a(e),t(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(t.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),R()}},[[43,1,2]]]);