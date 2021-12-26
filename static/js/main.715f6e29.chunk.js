(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(6),o=n.n(c),i=n(9),r=(n(15),n(10)),u=n(2),l=n(7),p=n(8),d=new(function(){function e(t){Object(l.a)(this,e),this._cardsUrl=t.baseUrl+"/cards",this._userUrl=t.baseUrl+"/users/me",this._likesUrl=t.baseUrl+"/cards/likes/",this._headers=t.headers}return Object(p.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._userUrl,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:this._headers}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e,t){return fetch(this._userUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch(this._cardsUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this._cardsUrl+"/"+e,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch(this._likesUrl+e,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch(this._likesUrl+e,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch(this._userUrl+"/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"bd192512-52fc-48cd-9611-18a277475c8c","Content-Type":"application/json"}}),_=n.p+"static/media/logo.5f3664ca.svg",h=n(1);var b=function(){return Object(h.jsx)("header",{className:"header page__header",children:Object(h.jsx)("img",{src:_,alt:"\u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},j=s.a.createContext();var m=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,o=s.a.useContext(j),i=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id}));return Object(h.jsxs)("li",{className:"element",children:[Object(h.jsx)("button",{className:"button button_type_image",type:"button",onClick:function(){n(t)}}),i&&Object(h.jsx)("button",{className:"button button_type_delete","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button",onClick:function(){c(t)}}),Object(h.jsx)("img",{className:"element__image",src:t.link,alt:t.name}),Object(h.jsxs)("div",{className:"element__group",children:[Object(h.jsx)("h2",{className:"element__title",children:t.name}),Object(h.jsxs)("div",{className:"element__like-group",children:[Object(h.jsx)("button",{className:"button button_type_like ".concat(r&&"button_active"),"aria-label":"\u041b\u0430\u0439\u043a",type:"button",onClick:function(){a(t)}}),Object(h.jsx)("p",{className:"element__likes",children:t.likes.length})]})]})]})};var f=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,c=e.onCardClick,o=e.cards,i=e.onCardLike,r=e.onCardDelete,u=s.a.useContext(j);return Object(h.jsxs)("main",{className:"content",children:[Object(h.jsxs)("section",{className:"profile",children:[Object(h.jsxs)("div",{className:"profile__container",children:[Object(h.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar",src:u.avatar}),Object(h.jsx)("button",{className:"profile__avatar-button",onClick:t}),Object(h.jsxs)("div",{className:"profile__info",children:[Object(h.jsx)("h1",{className:"profile__name",children:u.name}),Object(h.jsx)("p",{className:"profile__status",children:u.about}),Object(h.jsx)("button",{className:"button button_type_edit","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",type:"button",onClick:n})]})]}),Object(h.jsx)("button",{className:"button button_type_add","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button",onClick:a})]}),Object(h.jsx)("section",{className:"content__section",children:Object(h.jsx)("ul",{className:"elements",children:o.map((function(e){return Object(h.jsx)(m,{card:e,onCardClick:c,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var O=function(){return Object(h.jsx)("footer",{className:"footer page__footer",children:Object(h.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var x=function(e){var t=e.title,n=e.name,a=e.isOpen,s=e.buttonText,c=e.onClose,o=e.children,i=e.onSubmit;return Object(h.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(a&&"popup_opened"),children:Object(h.jsxs)("div",{className:"popup__content dialog-window",children:[Object(h.jsx)("button",{className:"button button_type_close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:c}),Object(h.jsx)("h2",{className:"popup__title",children:t}),Object(h.jsx)("form",{className:"popup__form",name:"avatar",onSubmit:i,noValidate:!0,children:Object(h.jsxs)("fieldset",{className:"popup__set",children:[o,Object(h.jsx)("button",{className:"button popup__button","aria-label":s,type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})]})})};var v=function(e){var t=e.card,n=e.name,a=e.isOpen,s=e.onClose;return Object(h.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(a&&"popup_opened"),children:Object(h.jsxs)("figure",{className:"popup__figure dialog-window",children:[Object(h.jsx)("button",{className:"button button_type_close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",onClick:s}),Object(h.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(h.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=s.a.useContext(j),o=s.a.useState(c.name),i=Object(u.a)(o,2),r=i[0],l=i[1],p=s.a.useState(c.about),d=Object(u.a)(p,2),_=d[0],b=d[1];return s.a.useEffect((function(){l(c.name),b(c.about)}),[c]),Object(h.jsxs)(x,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:t,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,about:_})},children:[Object(h.jsx)("input",{className:"popup__input popup__input_field_name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",id:"name-input",minLength:"2",maxLength:"40",value:r||"",onChange:function(e){l(e.target.value)},required:!0}),Object(h.jsx)("span",{className:"popup__error name-input-error"}),Object(h.jsx)("input",{className:"popup__input popup__input_field_status",type:"text",name:"status",placeholder:"\u0421\u0442\u0430\u0442\u0443\u0441",id:"status-input",minLength:"2",maxLength:"200",value:_||"",onChange:function(e){b(e.target.value)},required:!0}),Object(h.jsx)("span",{className:"popup__error status-input-error"})]})};var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=s.a.useRef();return s.a.useEffect((function(){c.current.value=""}),[t]),Object(h.jsxs)(x,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,onSubmit:function(e){e.preventDefault(),a(c.current.value)},children:[Object(h.jsx)("input",{ref:c,className:"popup__input popup__input_field_avatar",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"avatar-input",required:!0}),Object(h.jsx)("span",{className:"popup__error avatar-input-error"})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=s.a.useState(""),o=Object(u.a)(c,2),i=o[0],r=o[1],l=s.a.useState(""),p=Object(u.a)(l,2),d=p[0],_=p[1];return s.a.useEffect((function(){r(""),_("")}),[t]),Object(h.jsxs)(x,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element",isOpen:t,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,onSubmit:function(e){e.preventDefault(),a(i,d)},children:[Object(h.jsx)("input",{className:"popup__input popup__input_field_title",type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"title-input",minLength:"2",maxLength:"30",onChange:function(e){r(e.target.value)},required:!0}),Object(h.jsx)("span",{className:"popup__error title-input-error"}),Object(h.jsx)("input",{className:"popup__input popup__input_field_image",type:"url",name:"image",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"image-input",onChange:function(e){_(e.target.value)},required:!0}),Object(h.jsx)("span",{className:"popup__error image-input-error"})]})};var N=function(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),o=Object(u.a)(c,2),i=o[0],l=o[1],p=s.a.useState(!1),_=Object(u.a)(p,2),m=_[0],N=_[1],y=s.a.useState(!1),U=Object(u.a)(y,2),S=U[0],P=U[1],E=s.a.useState({}),L=Object(u.a)(E,2),T=L[0],A=L[1],D=s.a.useState({}),R=Object(u.a)(D,2),w=R[0],I=R[1],q=s.a.useState([]),F=Object(u.a)(q,2),J=F[0],H=F[1];s.a.useEffect((function(){Promise.all([d.getUserInfo(),d.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];I(n),H(a)})).catch((function(e){console.log(e)}))}),[]);var M=function(){N(!1),a(!1),l(!1),P(!1),A({})};return Object(h.jsxs)(j.Provider,{value:w,children:[Object(h.jsx)(b,{}),Object(h.jsx)(f,{onEditProfile:function(){a(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){A(e),P(!0)},cards:J,onCardLike:function(e){e.likes.some((function(e){return e._id===w._id}))?d.dislike(e._id).then((function(t){H((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})):d.like(e._id).then((function(t){H((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onCardDelete:function(e){d.deleteCard(e._id).then((function(){var t=J.filter((function(t){return t._id!==e._id}));H(t)}))}}),Object(h.jsx)(O,{}),Object(h.jsx)(g,{isOpen:n,onClose:M,onUpdateUser:function(e){d.updateUserInfo(e.name,e.about).then((function(e){I(e),M()})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(k,{isOpen:i,onClose:M,onAddPlace:function(e,t){d.addCard(e,t).then((function(e){H([e].concat(Object(r.a)(J))),M()})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(v,{card:T,name:"image",isOpen:S,onClose:M}),Object(h.jsx)(C,{isOpen:m,onClose:M,onUpdateAvatar:function(e){d.updateAvatar(e).then((function(e){I(e),M()})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(x,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",isOpen:!1,buttonText:"\u0414\u0430",onClose:M})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(i.a,{basename:"",children:Object(h.jsx)(N,{})})}),document.querySelector(".page__content")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.715f6e29.chunk.js.map