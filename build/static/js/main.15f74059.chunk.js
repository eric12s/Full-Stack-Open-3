(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=(n(20),n(4)),l=n(2),i=function(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}))},m=function(e){var t=e.handleSubmit,n=e.newName,a=e.setNewName,o=e.newNumber,c=e.setNewNumber;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var t=e.person,n=e.handleDelete;return r.a.createElement("li",null,t.name+" "+t.number," ",r.a.createElement("button",{onClick:function(){return t.id,void(window.confirm("Delete ".concat(t.name))&&n(t.id))}},"delete"))},s=function(e){var t=e.persons,n=e.filter,a=e.handleDelete,o=t.filter((function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())}));return r.a.createElement("ul",null,o.map((function(e){return r.a.createElement(f,{person:e,key:e.name,handleDelete:a})})))},d=n(3),h=n.n(d),b="http://localhost:3001/api",p=function(){return h.a.get("".concat(b,"/persons")).then((function(e){return e.data}))},E=function(e){return h.a.post("".concat(b,"/person"),e).then((function(e){return e.data}))},g=function(e,t){return h.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(b,"/persons/").concat(e)).then((function(e){return e.data}))},w=function(e){var t=e.message,n={color:e.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===t?null:r.a.createElement("div",{style:n},t)},j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),d=f[0],h=f[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),O=j[0],N=j[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],C=k[1],D=Object(a.useState)(null),T=Object(l.a)(D,2),A=T[0],B=T[1],F=Object(a.useState)("green"),J=Object(l.a)(F,2),L=J[0],x=J[1];Object(a.useEffect)((function(){p().then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:A,color:L}),r.a.createElement(i,{filter:y,setFilter:C}),r.a.createElement("h3",null,"Add a note"),r.a.createElement(m,{handleSubmit:function(e){e.preventDefault();var t=n.filter((function(e){return e.name===d}));t.length>0?window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&g(t[0].id,Object(u.a)(Object(u.a)({},t[0]),{},{number:O})).then((function(e){o(n.map((function(n){return n.name!==t[0].name?n:e}))),B("The number of ".concat(d," is changed")),x("green"),setTimeout((function(){B(null)}),5e3)})).catch((function(e){console.log(e),B("information of ".concat(d," has already been removed from server")),x("red"),setTimeout((function(){B(null)}),5e3),o(n.filter((function(e){return e.name!==d})))})):(E({name:d,number:O}).then((function(e){return o(n.concat(e))})).catch((function(e){return console.log(e)})),B("Added ".concat(d)),x("green"),setTimeout((function(){B(null)}),5e3)),N(""),h("")},newName:d,setNewName:h,newNumber:O,setNewNumber:N}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(s,{persons:n,filter:y,handleDelete:function(e){v(e).then((function(t){o(n.filter((function(t){return t.id!==e})))})).catch((function(e){return console.log(e)}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.15f74059.chunk.js.map