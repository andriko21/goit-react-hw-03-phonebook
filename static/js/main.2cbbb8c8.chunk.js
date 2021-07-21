(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={input:"Filter_input__21XaQ"}},19:function(t,e,n){},2:function(t,e,n){t.exports={container:"Form_container__2wqKv",addContact__container:"Form_addContact__container__1OSKX",input:"Form_input__3srpZ",button:"Form_button__2FSKD"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=n(9),o=n(4),u=n(5),l=n(7),m=n(6),b=n(21),d=n(11),j=n(2),h=n.n(j),p=n(0),O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onCHangeInput=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.onSubmit=function(e){if(e.preventDefault(),t.props.contacts.some((function(t){return t.name.toLowerCase()===e.currentTarget.name.value.toLowerCase()})))return alert("".concat(e.currentTarget.name.value," is already registered"));var n={name:e.currentTarget.name.value,number:e.currentTarget.number.value,id:Object(b.a)()};t.props.addContactItem(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:h.a.container,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsxs)("div",{className:h.a.addContact__container,children:[Object(p.jsx)("h2",{children:"Name"}),Object(p.jsxs)("form",{className:h.a.form,onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onCHangeInput}),Object(p.jsx)("h3",{children:"Number"}),Object(p.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onCHangeInput}),Object(p.jsx)("button",{type:"submit",className:h.a.button,children:"add contact"})]})]})]})}}]),n}(a.Component),f=n(3),_=n.n(f),v=function(t){var e=t.itemsRender,n=t.deleteItem;return Object(p.jsxs)("div",{className:_.a.contacts__container,children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(p.jsxs)("li",{className:_.a.item,children:[Object(p.jsxs)("p",{className:_.a.userName,children:[e,": "]}),Object(p.jsx)("p",{children:c}),Object(p.jsx)("button",{type:"button",className:_.a.button,onClick:function(){return n(a)},children:"delete"})]},a)}))})]})},C=n(12),x=n.n(C),g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Find contacts by name"}),Object(p.jsx)("input",{className:x.a.input,value:e,onChange:n})]})},N=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:Object(i.a)(t.props.contacts),filter:""},t.addContact=function(e){t.setState({contacts:[e].concat(Object(i.a)(t.state.contacts))})},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleItems=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.changeFilter,n=this.addContact;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{addContactItem:n,contacts:this.state.contacts}),Object(p.jsx)(g,{value:t,onChange:e}),Object(p.jsx)(v,{itemsRender:this.visibleItems(),deleteItem:this.deleteContact})]})}}]),n}(a.Component);N.defaultProps={contacts:[{id:Object(b.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(b.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(b.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(b.a)(),name:"Annie Copeland",number:"227-91-26"}]};n(19);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__1_vQU",item:"ContactList_item__2O0mh",button:"ContactList_button__TXmwW",userName:"ContactList_userName__1CweM"}}},[[20,1,2]]]);
//# sourceMappingURL=main.2cbbb8c8.chunk.js.map