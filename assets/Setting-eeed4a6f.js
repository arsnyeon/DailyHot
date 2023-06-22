import{aF as e,aG as n,aH as t,b as a,j as i,u as o,k as s,c as l,p as r,I as c,x as d,y as u,z as h,au as v,a9 as p,ao as g,aI as f,d as b,h as m,f as x,l as w,r as y,H as k,av as C,ax as _,aa as $,ay as P,aJ as z,ap as S,aK as B,B as T,A as R,ai as j,ah as O,aL as F,aM as V,aN as N,n as I,D,aO as U,aP as A,_ as H,S as K,aQ as L,U as M,$ as W,Q as E,X,ac as q,a0 as Q,aD as Y,Z as G,aE as J,ad as Z,aR as ee,aS as ne,a7 as te}from"./index-f483979b.js";import{d as ae}from"./vuedraggable.umd-d80830f0.js";import{u as ie,_ as oe}from"./Select-9bf4db86.js";import"./Tag-18974729.js";const se={name:"Switch",common:e,self:e=>{const{primaryColor:a,opacityDisabled:i,borderRadius:o,textColor3:s}=e;return Object.assign(Object.assign({},n),{iconColor:s,textColor:"white",loadingColor:a,opacityDisabled:i,railColor:"rgba(0, 0, 0, .14)",railColorActive:a,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${t(a,{alpha:.2})}`})}},le=a("n-popconfirm"),re={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},ce=v(re),de=i({name:"NPopconfirmPanel",props:re,setup(e){const{localeRef:n}=ie("Popconfirm"),{inlineThemeDisabled:t}=o(),{mergedClsPrefixRef:a,mergedThemeRef:i,props:d}=s(le),u=l((()=>{const{common:{cubicBezierEaseInOut:e},self:{fontSize:n,iconSize:t,iconColor:a}}=i.value;return{"--n-bezier":e,"--n-font-size":n,"--n-icon-size":t,"--n-icon-color":a}})),h=t?r("popconfirm-panel",void 0,u,d):void 0;return Object.assign(Object.assign({},ie("Popconfirm")),{mergedClsPrefix:a,cssVars:t?void 0:u,localizedPositiveText:l((()=>e.positiveText||n.value.positiveText)),localizedNegativeText:l((()=>e.negativeText||n.value.negativeText)),positiveButtonProps:c(d,"positiveButtonProps"),negativeButtonProps:c(d,"negativeButtonProps"),handlePositiveClick(n){e.onPositiveClick(n)},handleNegativeClick(n){e.onNegativeClick(n)},themeClass:null==h?void 0:h.themeClass,onRender:null==h?void 0:h.onRender})},render(){var e;const{mergedClsPrefix:n,showIcon:t,$slots:a}=this,i=d(a.action,(()=>null===this.negativeText&&null===this.positiveText?[]:[null!==this.negativeText&&u(p,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),null!==this.positiveText&&u(p,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]));return null===(e=this.onRender)||void 0===e||e.call(this),u("div",{class:[`${n}-popconfirm__panel`,this.themeClass],style:this.cssVars},h(a.default,(e=>t||e?u("div",{class:`${n}-popconfirm__body`},t?u("div",{class:`${n}-popconfirm__icon`},d(a.icon,(()=>[u(g,{clsPrefix:n},{default:()=>u(f,null)})]))):null,e):null)),i?u("div",{class:[`${n}-popconfirm__action`]},i):null)}}),ue=b("popconfirm",[m("body","\n font-size: var(--n-font-size);\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n position: relative;\n ",[m("icon","\n display: flex;\n font-size: var(--n-icon-size);\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n margin: 0 8px 0 0;\n ")]),m("action","\n display: flex;\n justify-content: flex-end;\n ",[x("&:not(:first-child)","margin-top: 8px"),b("button",[x("&:not(:last-child)","margin-right: 8px;")])])]),he=Object.assign(Object.assign(Object.assign({},w.props),P),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),ve=i({name:"Popconfirm",props:he,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=o(),t=w("Popconfirm","-popconfirm",ue,z,e,n),a=y(null);k(le,{mergedThemeRef:t,mergedClsPrefixRef:n,props:e});const i={setShow(e){var n;null===(n=a.value)||void 0===n||n.setShow(e)},syncPosition(){var e;null===(e=a.value)||void 0===e||e.syncPosition()}};return Object.assign(Object.assign({},i),{mergedTheme:t,popoverInstRef:a,handlePositiveClick:function(n){const{onPositiveClick:t,"onUpdate:show":i}=e;Promise.resolve(!t||t(n)).then((e=>{var n;!1!==e&&(null===(n=a.value)||void 0===n||n.setShow(!1),i&&S(i,!1))}))},handleNegativeClick:function(n){const{onNegativeClick:t,"onUpdate:show":i}=e;Promise.resolve(!t||t(n)).then((e=>{var n;!1!==e&&(null===(n=a.value)||void 0===n||n.setShow(!1),i&&S(i,!1))}))}})},render(){const{$slots:e,$props:n,mergedTheme:t}=this;return u($,_(n,ce,{theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const t=C(n,ce);return u(de,Object.assign(Object.assign({},t),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),pe=b("switch","\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n",[m("children-placeholder","\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "),m("rail-placeholder","\n display: flex;\n flex-wrap: none;\n "),m("button-placeholder","\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "),b("base-loading","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ",[B({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),m("checked, unchecked","\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "),m("checked","\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),m("unchecked","\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),x("&:focus",[m("rail","\n box-shadow: var(--n-box-shadow-focus);\n ")]),T("round",[m("rail","border-radius: calc(var(--n-rail-height) / 2);",[m("button","border-radius: calc(var(--n-button-height) / 2);")])]),R("disabled",[R("icon",[T("rubber-band",[T("pressed",[m("rail",[m("button","max-width: var(--n-button-width-pressed);")])]),m("rail",[x("&:active",[m("button","max-width: var(--n-button-width-pressed);")])]),T("active",[T("pressed",[m("rail",[m("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),m("rail",[x("&:active",[m("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),T("active",[m("rail",[m("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),m("rail","\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ",[m("button-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ",[B()]),m("button",'\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]),T("active",[m("rail","background-color: var(--n-rail-color-active);")]),T("loading",[m("rail","\n cursor: wait;\n ")]),T("disabled",[m("rail","\n cursor: not-allowed;\n opacity: .5;\n ")])]),ge=Object.assign(Object.assign({},w.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let fe;const be=i({name:"Switch",props:ge,setup(e){void 0===fe&&(fe="undefined"==typeof CSS||void 0!==CSS.supports&&CSS.supports("width","max(1px)"));const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=o(e),a=w("Switch","-switch",pe,se,e,n),i=j(e),{mergedSizeRef:s,mergedDisabledRef:d}=i,u=y(e.defaultValue),h=c(e,"value"),v=O(h,u),p=l((()=>v.value===e.checkedValue)),g=y(!1),f=y(!1),b=l((()=>{const{railStyle:n}=e;if(n)return n({focused:f.value,checked:p.value})}));function m(n){const{"onUpdate:value":t,onChange:a,onUpdateValue:o}=e,{nTriggerFormInput:s,nTriggerFormChange:l}=i;t&&S(t,n),o&&S(o,n),a&&S(a,n),u.value=n,s(),l()}const x=l((()=>{const{value:e}=s,{self:{opacityDisabled:n,railColor:t,railColorActive:i,buttonBoxShadow:o,buttonColor:l,boxShadowFocus:r,loadingColor:c,textColor:d,iconColor:u,[I("buttonHeight",e)]:h,[I("buttonWidth",e)]:v,[I("buttonWidthPressed",e)]:p,[I("railHeight",e)]:g,[I("railWidth",e)]:f,[I("railBorderRadius",e)]:b,[I("buttonBorderRadius",e)]:m},common:{cubicBezierEaseInOut:x}}=a.value;let w,y,k;return fe?(w=`calc((${g} - ${h}) / 2)`,y=`max(${g}, ${h})`,k=`max(${f}, calc(${f} + ${h} - ${g}))`):(w=D((U(g)-U(h))/2),y=D(Math.max(U(g),U(h))),k=U(g)>U(h)?f:D(U(f)+U(h)-U(g))),{"--n-bezier":x,"--n-button-border-radius":m,"--n-button-box-shadow":o,"--n-button-color":l,"--n-button-width":v,"--n-button-width-pressed":p,"--n-button-height":h,"--n-height":y,"--n-offset":w,"--n-opacity-disabled":n,"--n-rail-border-radius":b,"--n-rail-color":t,"--n-rail-color-active":i,"--n-rail-height":g,"--n-rail-width":f,"--n-width":k,"--n-box-shadow-focus":r,"--n-loading-color":c,"--n-text-color":d,"--n-icon-color":u}})),k=t?r("switch",l((()=>s.value[0])),x,e):void 0;return{handleClick:function(){e.loading||d.value||(v.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue))},handleBlur:function(){f.value=!1,function(){const{nTriggerFormBlur:e}=i;e()}(),g.value=!1},handleFocus:function(){f.value=!0,function(){const{nTriggerFormFocus:e}=i;e()}()},handleKeyup:function(n){e.loading||d.value||" "===n.key&&(v.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue),g.value=!1)},handleKeydown:function(n){e.loading||d.value||" "===n.key&&(n.preventDefault(),g.value=!0)},mergedRailStyle:b,pressed:g,mergedClsPrefix:n,mergedValue:v,checked:p,mergedDisabled:d,cssVars:t?void 0:x,themeClass:null==k?void 0:k.themeClass,onRender:null==k?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:a,onRender:i,$slots:o}=this;null==i||i();const{checked:s,unchecked:l,icon:r,"checked-icon":c,"unchecked-icon":d}=o,v=!(F(r)&&F(c)&&F(d));return u("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,v&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:a},h(s,(n=>h(l,(t=>n||t?u("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},u("div",{class:`${e}-switch__rail-placeholder`},u("div",{class:`${e}-switch__button-placeholder`}),n),u("div",{class:`${e}-switch__rail-placeholder`},u("div",{class:`${e}-switch__button-placeholder`}),t)):null)))),u("div",{class:`${e}-switch__button`},h(r,(n=>h(c,(t=>h(d,(a=>u(V,null,{default:()=>this.loading?u(N,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(t||n)?u("div",{class:`${e}-switch__button-icon`,key:t?"checked-icon":"icon"},t||n):this.checked||!a&&!n?null:u("div",{class:`${e}-switch__button-icon`,key:a?"unchecked-icon":"icon"},a||n)}))))))),h(s,(n=>n&&u("div",{key:"checked",class:`${e}-switch__checked`},n))),h(l,(n=>n&&u("div",{key:"unchecked",class:`${e}-switch__unchecked`},n))))))}}),me=b("h","\n font-size: var(--n-font-size);\n font-weight: var(--n-font-weight);\n margin: var(--n-margin);\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n",[x("&:first-child",{marginTop:0}),T("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[T("align-text",{paddingLeft:0},[x("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),x("&::before",'\n content: "";\n width: var(--n-bar-width);\n border-radius: calc(var(--n-bar-width) / 2);\n transition: background-color .3s var(--n-bezier);\n left: 0;\n top: 0;\n bottom: 0;\n position: absolute;\n '),x("&::before",{backgroundColor:"var(--n-bar-color)"})])]),xe=Object.assign(Object.assign({},w.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),we=e=>i({name:`H${e}`,props:xe,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=o(n),i=w("Typography","-h",me,A,n,t),s=l((()=>{const{type:t}=n,{common:{cubicBezierEaseInOut:a},self:{headerFontWeight:o,headerTextColor:s,[I("headerPrefixWidth",e)]:l,[I("headerFontSize",e)]:r,[I("headerMargin",e)]:c,[I("headerBarWidth",e)]:d,[I("headerBarColor",t)]:u}}=i.value;return{"--n-bezier":a,"--n-font-size":r,"--n-margin":c,"--n-bar-color":u,"--n-bar-width":d,"--n-font-weight":o,"--n-text-color":s,"--n-prefix-width":l}})),c=a?r(`h${e}`,l((()=>n.type[0])),s,n):void 0;return{mergedClsPrefix:t,cssVars:a?void 0:s,themeClass:null==c?void 0:c.themeClass,onRender:null==c?void 0:c.onRender}},render(){var n;const{prefix:t,alignText:a,mergedClsPrefix:i,cssVars:o,$slots:s}=this;return null===(n=this.onRender)||void 0===n||n.call(this),u(`h${e}`,{class:[`${i}-h`,`${i}-h${e}`,this.themeClass,{[`${i}-h--prefix-bar`]:t,[`${i}-h--align-text`]:a}],style:o},s)}});we("1"),we("2"),we("3"),we("4"),we("5");const ye=we("6"),ke={class:"setting"},Ce=(e=>(ee("data-v-4d962e54"),e=e(),ne(),e))((()=>Y("div",{class:"title"},"全局设置",-1))),_e={class:"top"},$e={class:"name"},Pe={class:"top"},ze={class:"name"},Se={class:"top"},Be={class:"name"},Te=["src"],Re={class:"top"},je={class:"name"},Oe=H({__name:"Setting",setup(e){const n=K(),{newsArr:t,linkOpenType:a,headerFixed:i}=L(n),o=[{label:"新页面打开",value:"open"},{label:"当前页打开",value:"href"}],s=()=>{t.value=t.value.sort(((e,n)=>e.order-n.order)),$message.success("恢复默认榜单排序成功")},l=(e=null,n=!1)=>{$message.success(e?`${e}榜单已${n?"开启":"关闭"}`:"榜单排序成功")},r=()=>{$timeInterval&&clearInterval($timeInterval),localStorage.clear(),location.reload()};return(e,n)=>{const c=ye,d=te,u=oe,h=q,v=be,g=p,f=ve;return M(),W("div",ke,[Ce,E(c,{prefix:"bar"},{default:X((()=>[Q(" 基础设置 ")])),_:1}),E(h,{class:"set-item"},{default:X((()=>[Y("div",_e,[Y("div",$e,[E(d,{class:"text"},{default:X((()=>[Q("链接跳转方式")])),_:1}),E(d,{class:"tip",depth:3},{default:X((()=>[Q(" 选择榜单列表内容的跳转方式 ")])),_:1})]),E(u,{class:"set",value:G(a),"onUpdate:value":n[0]||(n[0]=e=>J(a)?a.value=e:null),options:o},null,8,["value"])])])),_:1}),E(h,{class:"set-item"},{default:X((()=>[Y("div",Pe,[Y("div",ze,[E(d,{class:"text"},{default:X((()=>[Q("固定导航栏")])),_:1}),E(d,{class:"tip",depth:3},{default:X((()=>[Q(" 导航栏是否固定 ")])),_:1})]),E(v,{value:G(i),"onUpdate:value":n[1]||(n[1]=e=>J(i)?i.value=e:null),round:!1},null,8,["value"])])])),_:1}),E(h,{class:"set-item"},{default:X((()=>[Y("div",Se,[Y("div",Be,[E(d,{class:"text"},{default:X((()=>[Q("榜单排序")])),_:1}),E(d,{class:"tip",depth:3},{default:X((()=>[Q(" 拖拽以排序，开关用以控制在页面中的显示状态 ")])),_:1})]),E(f,{onPositiveClick:s},{trigger:X((()=>[E(g,{class:"control",size:"small"},{default:X((()=>[Q(" 恢复默认 ")])),_:1})])),default:X((()=>[Q(" 确认将排序恢复到默认状态？ ")])),_:1})]),E(G(ae),{list:G(t),animation:200,class:"mews-group","item-key":"order",onEnd:n[2]||(n[2]=e=>l())},{item:X((({element:e})=>[E(h,{class:"item",embedded:"","content-style":{display:"flex",alignItems:"center"}},{default:X((()=>[Y("div",{class:"desc",style:Z({opacity:e.show?null:.6})},[Y("img",{class:"logo",src:`/logo/${e.value}.png`,alt:"logo"},null,8,Te),E(d,{class:"news-name",innerHTML:e.label},null,8,["innerHTML"])],4),E(v,{class:"switch",round:!1,value:e.show,"onUpdate:value":[n=>e.show=n,n=>l(e.label,e.show)]},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["list"])])),_:1}),E(c,{prefix:"bar"},{default:X((()=>[Q(" 杂项设置 ")])),_:1}),E(h,{class:"set-item"},{default:X((()=>[Y("div",Re,[Y("div",je,[E(d,{class:"text"},{default:X((()=>[Q("重置所有数据")])),_:1}),E(d,{class:"tip",depth:3},{default:X((()=>[Q(" 重置所有数据，你的自定义设置都将会丢失 ")])),_:1})]),E(f,{onPositiveClick:r},{trigger:X((()=>[E(g,{type:"warning"},{default:X((()=>[Q(" 重置 ")])),_:1})])),default:X((()=>[Q(" 确认重置所有数据？你的自定义设置都将会丢失！ ")])),_:1})])])),_:1})])}}},[["__scopeId","data-v-4d962e54"]]);export{Oe as default};
