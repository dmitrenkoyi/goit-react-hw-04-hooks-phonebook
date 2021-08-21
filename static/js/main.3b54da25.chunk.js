(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={Container:"Container_Container__2C_Ge"}},12:function(e,t,n){e.exports={Section:"Section_Section__3KoHb"}},13:function(e,t,n){e.exports={Filter:"Filter_Filter__1BQZV"}},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),o=n.n(r),i=n(14),s=n(2),u=n(10),l=n.n(u),b=n(11),j=n.n(b),d=n(0),m=function(e){var t=e.children;return Object(d.jsx)("div",{className:j.a.Container,children:t})},h=n(12),f=n.n(h),O=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{className:f.a.Section,children:[Object(d.jsx)("h2",{children:t}),n]})},x=n(7),p=n.n(x),v=function(e){var t=e.contacts,n=e.onSubmit,a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],i=r[1],u=Object(c.useState)(""),l=Object(s.a)(u,2),b=l[0],j=l[1],m=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":j(c);break;default:return}};return Object(d.jsxs)("form",{className:p.a.Form,onSubmit:function(e){var c;(e.preventDefault(),c=o,t.some((function(e){return e.name===c})))?alert("".concat(o," is already in contacts")):(n(o,b),i(""),j(""))},children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",name:"name",value:o,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",value:b,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",className:p.a.Btn,children:"Add contact"})]})},C=n(8),_=n.n(C),S=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(d.jsx)("ul",{className:_.a.List,children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(d.jsxs)("li",{children:[c,": ",a,Object(d.jsx)("button",{className:_.a.Btn,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},g=n(13),N=n.n(g),w=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{className:N.a.Filter,children:["Find contacts by name",Object(d.jsx)("input",{type:"text",value:t,onChange:n})]})},k=function(e,t){var n=Object(c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]},B=(n(28),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),F=function(){var e=k("contacts",B),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),u=o[0],b=o[1];return Object(d.jsxs)(m,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(O,{title:"Create contact",children:Object(d.jsx)(v,{contacts:n,onSubmit:function(e,t){var n={id:l.a.generate(),name:e,number:t};a((function(e){return[n].concat(Object(i.a)(e))}))}})}),Object(d.jsxs)(O,{title:"Contacts",children:[Object(d.jsx)(w,{value:u,onChange:function(e){b(e.currentTarget.value)}}),Object(d.jsx)(S,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){a(n.filter((function(t){return t.id!==e})))}})]})]})};n(29);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={Form:"FormContacts_Form__2H-WB",Btn:"FormContacts_Btn__2N_EX"}},8:function(e,t,n){e.exports={List:"ContactsList_List__e2vH2",Btn:"ContactsList_Btn__1s241"}}},[[30,1,2]]]);
//# sourceMappingURL=main.3b54da25.chunk.js.map