"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[765],{6713:function(n,e,t){t.d(e,{h:function(){return i}});var r=t(1912),o=t(8709),i=r.Z.create({baseURL:"https://pre-onboarding-selection-task.shop",headers:{Authorization:"Bearer ".concat(o.Z.getToken()),"Content-Type":"application/json"}});i.interceptors.request.use((function(n){var e=o.Z.getToken();return e&&n.headers&&(n.headers.Authorization="Bearer ".concat(e)),n}))},8709:function(n,e){var t={setToken:function(n){return localStorage.setItem("token",n)},getToken:function(){return localStorage.getItem("token")}};e.Z=t},816:function(n,e,t){var r,o=t(168),i=t(8683),a=t(5987),d=t(9104),l=(t(2791),t(184)),s=["onClick","text","type"],c=d.Z.button(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 40px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background: #505050;\n  color: #fff;\n  font-weight: bold;\n\n  &:disabled {\n    background: #bbb;\n  }\n\n  &.delete {\n    background: none;\n    border: 1px solid #dd3333;\n    color: #dd3333;\n    margin-left: 10px;\n    width: 100px;\n  }\n\n  &.update {\n    background: none;\n    border: 1px solid #333;\n    color: #333;\n    margin-left: 10px;\n    width: 100px;\n  }\n"])));e.Z=function(n){var e=n.onClick,t=n.text,r=(n.type,(0,a.Z)(n,s));return(0,l.jsx)(c,(0,i.Z)((0,i.Z)({onClick:e},r),{},{children:t}))}},8941:function(n,e,t){var r,o,i,a=t(168),d=t(8683),l=t(5987),s=t(9104),c=(t(2791),t(184)),u=["label","isPw"],p=s.Z.input(r||(r=(0,a.Z)(["\n  width: auto;\n  font-size: 14px;\n  background: #fff\n  outline: 0;\n  border: 1px solid #bdbdbd;\n  border-radius:4px;\n  padding:10px 5px;\n\n  &::placeholder {\n    color: #bdbdbd;\n  }\n"]))),h=s.Z.label(o||(o=(0,a.Z)(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"]))),x=s.Z.div(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  width: 100%;\n"])));e.Z=function(n){var e=n.label,t=n.isPw,r=void 0!==t&&t,o=(0,l.Z)(n,u);return(0,c.jsxs)(x,{children:[e&&(0,c.jsx)(h,{children:e}),(0,c.jsx)(p,(0,d.Z)((0,d.Z)({},o),{},{type:r?"password":"text"}))]})}},8131:function(n,e,t){var r,o,i,a,d,l=t(168),s=(t(2791),t(9104)),c=t(184),u=s.Z.div(r||(r=(0,l.Z)(["\n  border-top: 1px solid #ddd;\n  height: 35px;\n  display: flex;\n  flex: center;\n  align-items: center;\n  margin-top: auto;\n\n  & > p {\n    width: 100%;\n    text-align: center;\n  }\n"]))),p=s.Z.div(o||(o=(0,l.Z)(["\n  border-bottom: 1px solid #ddd;\n  height: 100px;\n  display: flex;\n  flex: center;\n  align-items: center;\n  position: relative;\n\n  & > h2 {\n    width: 100%;\n    text-align: center;\n    color: #8f47e6;\n  }\n\n\n"]))),h=s.Z.div(i||(i=(0,l.Z)(["\n  margin: auto;\n  width: 700px;\n\n  margin: 40px auto;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  padding: 20px;\n  background: #fff;\n"]))),x=s.Z.div(a||(a=(0,l.Z)(["\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),f=s.Z.div(d||(d=(0,l.Z)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  background: #ebe4f9;\n"])));e.Z=function(n){var e=n.children;return(0,c.jsx)(f,{children:(0,c.jsxs)(x,{children:[(0,c.jsx)(p,{children:(0,c.jsx)("h2",{children:"Pre Onboarding Frontend"})}),(0,c.jsx)(h,{children:e}),(0,c.jsx)(u,{children:(0,c.jsx)("p",{children:"Copyright \u24d2 hm. All Rights Reserved."})})]})})}},5765:function(n,e,t){t.r(e);var r=t(4165),o=t(5861),i=t(9439),a=t(2791),d=t(7689),l=t(6713),s=t(8709),c=t(8941),u=t(816),p=t(8131),h=t(184);e.default=function(){var n=(0,d.s0)(),e=(0,a.useState)(""),t=(0,i.Z)(e,2),x=t[0],f=t[1],b=(0,a.useState)(""),g=(0,i.Z)(b,2),Z=g[0],v=g[1],w=/@/;(0,a.useEffect)((function(){s.Z.getToken()&&n("/todo")}),[]);var k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.test(x)){e.next=4;break}window.alert("\uc774\uba54\uc77c\uc5d0 @\ub97c \ud3ec\ud568\ud558\uc5ec \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.next=10;break;case 4:if(!(Z.length<8)){e.next=8;break}window.alert("\ube44\ubc00\ubc88\ud638\ub97c 8\uc790\uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.next=10;break;case 8:return e.next=10,l.h.post("/auth/signup",{email:x,password:Z}).then((function(e){n("/signin")})).catch((function(n){window.alert(n.response.data.message)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(p.Z,{children:[(0,h.jsx)("h3",{children:"\ud68c\uc6d0\uac00\uc785"}),(0,h.jsx)(c.Z,{"data-testid":"email-input",label:"\uc774\uba54\uc77c",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:x,onChange:function(n){f(n.target.value.trim())}}),(0,h.jsx)(c.Z,{"data-testid":"password-input",label:"\ud328\uc2a4\uc6cc\ub4dc",placeholder:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",isPw:!0,value:Z,onChange:function(n){return v(n.target.value.trim())}}),(0,h.jsx)(u.Z,{"data-testid":"signup-button",text:"\ud68c\uc6d0\uac00\uc785",disabled:!x||!Z||Z.length<8||!w.test(x),onClick:k})]})}}}]);
//# sourceMappingURL=765.735178c5.chunk.js.map