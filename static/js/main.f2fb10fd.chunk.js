(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(5),i=n.n(c),o=(n(15),n(8)),s=n(3),l=n(6),u=n(7),d=n(10),b=n(9),m=n(19),j=n(4),h=n.n(j),f=n(0);var p=function(t){var e=t.name,n=t.number,a=t.onAddContact,r=t.onSetUserInfo;return Object(f.jsxs)("form",{onSubmit:a,action:"",className:h.a.input,children:[Object(f.jsxs)("label",{htmlFor:"",children:[Object(f.jsx)("p",{children:"Name"}),Object(f.jsx)("input",{onInput:r,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{htmlFor:"",children:[Object(f.jsx)("p",{children:"Number"}),Object(f.jsx)("input",{onInput:r,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:h.a.submitBtn,children:"Add contact"})]})};var O=function(t){var e=t.onSetFilter,n=t.filretValue;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Filter"}),Object(f.jsx)("input",{type:"text",name:"filter",onInput:e,value:n})]})})};var x=function(t){var e=t.onDeleteContact,n=t.id,a=t.name,r=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{children:[a,": ",r]}),Object(f.jsx)("button",{onClick:e,id:n,children:"delete"})]})};var v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(f.jsx)(x,{onDeleteContact:n,id:e,name:a,number:r},e)}))})};var C=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}))},S=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.handleSetUserInfo=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleAddContact=function(e){if(e.preventDefault(),t.state.contacts.some((function(e){return e.name===t.state.name})))alert("".concat(t.state.name," is already in contacts"));else{var n={id:Object(m.a)(),name:t.state.name,number:t.state.number};t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n]),name:"",number:""}}))}},t.handleDeleteContacts=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e.target.id}))})},t.handleChangeFilter=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=C(this.state.contacts,this.state.filter);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{name:this.state.name,number:this.state.number,onAddContact:this.handleAddContact,onSetUserInfo:this.handleSetUserInfo}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(O,{filretValue:this.state.filter,onSetFilter:this.handleChangeFilter}),Object(f.jsx)(v,{onDeleteContact:this.handleDeleteContacts,contacts:t})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={input:"contactForm_input__1kPMm",submitBtn:"contactForm_submitBtn__3SGpt"}}},[[17,1,2]]]);
//# sourceMappingURL=main.f2fb10fd.chunk.js.map