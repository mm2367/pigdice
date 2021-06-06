(this["webpackJsonppig-dice"]=this["webpackJsonppig-dice"]||[]).push([[0],{51:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(9),l=c.n(r),i=c(20),a=c(5),o={rules:{ruleOne:"If neither die show a 1, the sum of both dice is added to their turn total,\n            and the player\u2019s turn continues unless they choose to \u201chold\u201d",ruleOneA:" A \u201chold\u201d will end their turn and apply the sum of all rolls from that\n            turn (the \u201cturn score\u201d) to their \u201ctotal score\u201d (generally represents\n            the score accrued across turns - read on. . . )",ruleTwo:" If the player rolls a 1 on either die, they add nothing to their total score\n            and it becomes the next player\u2019s turn",ruleThree:"If BOTH dice show 1\u2019s (\u201csnake eyes\u201d), the player scores nothing on their\n            turn, their total score goes to 0, and their turn ends",ruleFour:"If any double (matching die except for \u201csnake eyes\u201d) is rolled, the sum of\n            the dice rolled is added to the turn total, as with any roll, but the player\n            does not have the option to \u201chold\u201d and must roll again."},holdButtonText:{doublesHold:"Hold is disabled after rolling doubles",winnerDeclared:"Game is Over.Please Start New Game"},diceFeedback:{snakeEyes:"Oh No! You rolled Snake Eyes",oneRolled:"Oh No! You rolled a One"}},d=c(25),j=c.n(d),u=c(26),h=c(3),b=function(e){return Object(h.jsxs)("div",{className:"welcome container my-5 py-5",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(h.jsx)(j.a,{icon:u.a,color:"pink",width:60,height:60}),Object(h.jsx)("h1",{className:"d-flex justify-content-center align-items-center my-4",children:"Let's Play Pig Dice"}),Object(h.jsx)(j.a,{icon:u.a,color:"pink",width:60,height:60})]}),Object(h.jsx)("h2",{className:"text-center",children:"Rules"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:o.rules.ruleOne}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:o.rules.ruleOneA})}),Object(h.jsx)("li",{children:o.rules.ruleTwo}),Object(h.jsx)("li",{children:o.rules.ruleThree}),Object(h.jsx)("li",{children:o.rules.ruleFour})]}),Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(i.b,{className:"btn btn-primary d-flex align-items-center justify-content-center my-3",to:"pigdice",children:"Let's Play!"})})]})},x=c(19),O=c(11),f=c(33),m=c(14),p=function(e){var t={one:m.c,two:m.f,three:m.e,four:m.b,five:m.a,six:m.d};return console.log(e.rolling),Object(h.jsx)(f.a,{className:"Die m-5 ".concat(e.rolling&&"Die-shaking"),icon:e.face?t[e.face]:m.c,size:"10x"})},v=c(35),g=c.n(v),y=c(23),N=function(e){for(var t=[],c=0;c<e.players.length;c++)t.push(Object(h.jsxs)("div",{className:"w-50 player-heading player-heading_player-one text-center"+"".concat(e.players[c].isActive?" active":""),children:[Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(h.jsx)("div",{children:"Player ".concat(c+1," :")}),Object(h.jsx)("div",{className:"ml-2",children:e.players[c].score})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-center subtitle",children:[Object(h.jsx)("div",{children:"Current Score: "}),Object(h.jsx)("div",{className:"ml-2",children:e.players[c].isActive?e.turnScore:0})]}),Object(h.jsx)("div",{className:"message-placeholder subtitle",children:e.players[(c+1)%e.players.length].isActive&&e.diceFeedback})]}));return Object(h.jsx)("div",{className:"mt-5 d-flex px-5 align-items-center text-uppercase",children:t})},w=function(e){var t;e.winnerBoard&&e.winnerBoard.length>0&&(t=e.winnerBoard.sort((function(e,t){return t.totalScore-e.totalScore})).map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:["Player ",e.id+1]}),Object(h.jsx)("td",{children:e.totalScore})]})})));return Object(h.jsxs)("div",{className:"game-score-board "+e.className,children:[Object(h.jsx)("h3",{className:"text-center",children:"Game Score Board"}),Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"w-100",children:[Object(h.jsx)("thead",{className:"text-center",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Players"}),Object(h.jsx)("th",{children:"Total Score"})]})}),Object(h.jsx)("tbody",{className:"text-center",children:t})]})})]})},S=c(34),k=c.n(S),A=c(18),E=function(e){return r.createPortal(Object(h.jsxs)(A.a,{show:e.show,children:[Object(h.jsx)(A.a.Header,{children:Object(h.jsx)(A.a.Title,{children:"Rules"})}),Object(h.jsx)(A.a.Body,{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:o.rules.ruleOne}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:o.rules.ruleOneA})}),Object(h.jsx)("li",{children:o.rules.ruleTwo}),Object(h.jsx)("li",{children:o.rules.ruleThree}),Object(h.jsx)("li",{children:o.rules.ruleFour})]})})]}),document.body)},T=function(e){var t=n.useState(["one","one"]),c=Object(O.a)(t,2),s=c[0],r=c[1],l=n.useState(!1),i=Object(O.a)(l,2),a=i[0],d=i[1],j=n.useState(0),u=Object(O.a)(j,2),b=u[0],f=u[1],m=n.useState(0),v=Object(O.a)(m,2),S=v[0],A=v[1],T=n.useState(null),P=Object(O.a)(T,2),B=P[0],F=P[1],C=n.useState(""),D=Object(O.a)(C,2),H=D[0],I=D[1],R=n.useState(!1),M=Object(O.a)(R,2),L=M[0],G=M[1],J=n.useState(2),V=Object(O.a)(J,2),Y=V[0],z=V[1],W=n.useState([]),_=Object(O.a)(W,2),q=_[0],K=_[1],Q=n.useState([{id:0,score:0,isActive:!0},{id:1,score:0,isActive:!0}]),U=Object(O.a)(Q,2),X=U[0],Z=U[1];console.log(a);var $={one:1,two:2,three:3,four:4,five:5,six:6},ee=["one","two","three","four","five","six"];n.useEffect((function(){for(var e=[],t=0;t<Y;t++)e.push({id:t,score:0,isActive:0===t});Z(e)}),[Y]);var te=function(e){a&&e.target&&"fade modal show"===e.target.className&&(console.log(e.target.className),console.log("hello"),d(!1))};n.useEffect((function(){return document.addEventListener("click",te),function(){return document.removeEventListener("click",te)}}));var ce=function(e,t){var c=Object(x.a)(X);1===e&&1===t?(c[S%c.length].score=0,I(o.diceFeedback.snakeEyes),ne(c,!1)):1===t||1===e?(I(o.diceFeedback.oneRolled),ne(c,!1)):I(""),Z(c)},ne=function(e,t){var c=Object(x.a)(e),n=q?Object(x.a)(q):[];A(c.filter((function(e){return e.isActive}))[0].id),c.forEach((function(e){e.isActive&&t?(e.score+=b,e.isActive=!1,e.score>=10&&function(e,t){var c;F(e),t.forEach((function(t,n){t.id===e.id&&(c=n)})),void 0!==c?t[c].totalScore+=e.score:t.push({id:e.id,totalScore:e.score}),K(t)}(e,n)):e.id===(S+1)%c.length&&(e.isActive=!0)})),t&&I(""),c[S%c.length].isActive=!1,A(S+1),f(0),Z(c)},se=function(){var e=Object(x.a)(X);F(null),X.forEach((function(e){e.score=0,e.isActive=0===e.id})),f(0),r(["one","one"]),I(""),A(0),Z(e)},re=s[0]===s[1]&&"one"!==s[0]||null!==B;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container pig-dice",children:[Object(h.jsx)("h1",{className:"text-center text-uppercase",children:B?"Player ".concat(B.id+1," Wins!"):"Pig Dice"}),Object(h.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(h.jsxs)("label",{children:["Enter Number of Players (2-4):",Object(h.jsx)("input",{type:"number",max:4,min:2,defaultValue:2,name:"numberOfPlayers",onChange:function(e){return function(e){z(parseInt(e.target.value)),se()}(e)}}),Object(h.jsx)(y.a,{id:"rules",place:"bottom",effect:"solid",children:"View Rules"}),Object(h.jsx)("span",{className:"launch-icon ml-2","data-tip":"rules","data-for":"rules",onClick:function(e){d(!a)},children:Object(h.jsx)(k.a,{})})]})}),Object(h.jsx)(N,{players:X,turnScore:b,diceFeedback:H}),Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(h.jsx)(p,{face:s[0],rolling:L}),Object(h.jsx)(p,{face:s[1],rolling:L})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(h.jsx)("button",{className:"mx-4",disabled:null!==B,onClick:function(){return function(){console.log("rolling"),G(!0);var e=[ee[Math.floor(Math.random()*ee.length)],ee[Math.floor(Math.random()*ee.length)]];r(e);var t=$[e[0]],c=$[e[1]];f(b+t+c),ce(t,c),setTimeout((function(){G(!1)}),1e3)}()},children:"Roll"}),Object(h.jsx)(g.a,{htmlColor:"#E18D96","data-tip":"refresh","data-for":"refresh",onClick:function(){return se()}}),Object(h.jsx)(y.a,{id:"refresh",place:"bottom",effect:"solid",children:"Start new game"}),Object(h.jsxs)("div",{"data-tip":"disabled-hold","data-for":"disabled-hold",children:[re?Object(h.jsx)(y.a,{id:"disabled-hold",place:"bottom",effect:"solid",children:B?o.holdButtonText.winnerDeclared:o.holdButtonText.doublesHold}):Object(h.jsx)("div",{}),Object(h.jsx)("button",{className:"mx-4",onClick:function(){return ne(X,!0)},disabled:re,children:"Hold"})]})]}),Object(h.jsx)(w,{className:"mt-5",winnerBoard:q})]}),Object(h.jsx)(E,{show:a})]})},P=function(){return Object(h.jsxs)(i.a,{basename:"/",children:[Object(h.jsx)(a.c,{}),Object(h.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(h.jsx)(a.a,{exact:!0,path:"/pigdice",component:T})]})};c(51),c(52),c(53);l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4d44af42.chunk.js.map