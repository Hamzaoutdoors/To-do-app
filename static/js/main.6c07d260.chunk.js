(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{10:function(t,e,n){t.exports={item:"TodoItem_item__1Q0lr",checkbox:"TodoItem_checkbox__1fBq2",textInput:"TodoItem_textInput__2LNz4"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),a=n(13),i=n.n(a),r=n(12),s=n(7),d=n(2),l=n(3),u=n(5),j=n(4),p=n(23),b=n(14),h=n(10),m=n.n(h),O=n(0),f=function(t){var e=Object(o.useState)(!1),n=Object(b.a)(e,2),c=n[0],a=n[1],i=t.todo,r=t.handleChangeProps,s=t.deleteTodoProps,d=t.setUpdate,l=i.title,u=i.completed,j=i.id,p={},h={};c?p.display="none":h.display="none";return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("li",{className:m.a.item,children:[Object(O.jsxs)("div",{onDoubleClick:function(){a((function(t){return!t}))},style:p,children:[Object(O.jsx)("input",{type:"checkbox",className:m.a.checkbox,checked:u,onChange:function(){return r(j)}}),Object(O.jsx)("button",{type:"button",onClick:function(){return s(j)},children:"Delete"}),Object(O.jsx)("span",{style:u?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(O.jsx)("input",{type:"text",className:m.a.textInput,style:h,value:l,onChange:function(t){d(t.target.value,j)},onKeyDown:function(t){"Enter"===t.key&&a((function(t){return!t}))}})]})})},x=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).state={},o}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.todos,n=t.handleChangeProps,o=t.deleteTodoProps,c=t.setUpdate;return Object(O.jsx)("ul",{children:e.map((function(t){return Object(O.jsx)(f,{todo:t,handleChangeProps:n,deleteTodoProps:o,setUpdate:c},t.id)}))})}}]),n}(c.a.Component),v=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(O.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})})},g=n(9),y=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).onChange=function(t){o.setState(Object(g.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){var e=o.props.addTodoProps;t.preventDefault(),o.state.title.trim()?(e(o.state.title),o.setState({title:""})):alert("Please write item")},o.state={title:""},o}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.title;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(O.jsx)("input",{type:"text",placeholder:"Add Todo...",value:t,onChange:this.onChange,name:"title",className:"input-text"}),Object(O.jsx)("button",{type:"button",className:"input-submit",children:"Submit"})]})}}]),n}(o.Component),C=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).handleChange=function(t){o.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}}))},o.delTodo=function(t){o.setState((function(e){return{todos:Object(r.a)(e.todos.filter((function(e){return e.id!==t})))}}))},o.addTodoItem=function(t){var e={id:Object(p.a)(),title:t,completed:!1};o.setState((function(t){return{todos:[].concat(Object(r.a)(t.todos),[e])}}))},o.setUpdate=function(t,e){o.setState((function(n){return{todos:n.todos.map((function(n){return n.id===e?Object(s.a)(Object(s.a)({},n),{},{title:t}):n}))}}))},o.state={todos:[{id:Object(p.a)(),title:"Setup development environment",completed:!0},{id:Object(p.a)(),title:"Develop website and add content",completed:!1},{id:Object(p.a)(),title:"Deploy to live server",completed:!1}]},o}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.todos;return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"inner",children:[Object(O.jsx)(v,{}),Object(O.jsx)(y,{addTodoProps:this.addTodoItem}),Object(O.jsx)(x,{todos:t,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo,setUpdate:this.setUpdate})]})})}}]),n}(o.Component);n(20);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6c07d260.chunk.js.map