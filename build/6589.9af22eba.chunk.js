(self.webpackChunkfreemancodz=self.webpackChunkfreemancodz||[]).push([[6589],{1786:A=>{function f(e,s,E,r){for(var c=E-1,P=e.length;++c<P;)if(r(e[c],s))return c;return-1}A.exports=f},12186:(A,f,e)=>{var s=e(36393),E=e(62878),r=e(1786),c=e(20435),P=e(22033),y=Array.prototype,m=y.splice;function B(L,R,U,$){var b=$?r:E,G=-1,H=R.length,_=L;for(L===R&&(R=P(R)),U&&(_=s(L,c(U)));++G<H;)for(var j=0,V=R[G],x=U?U(V):V;(j=b(_,x,j,$))>-1;)_!==L&&m.call(_,j,1),m.call(L,j,1);return L}A.exports=B},58422:(A,f,e)=>{var s=e(36393),E=e(90040),r=e(92403),c=e(26126);function P(y,m){var B=c(y)?s:r;return B(y,E(m,3))}A.exports=P},22009:(A,f,e)=>{var s=e(52431),E=e(45906),r=s(E);A.exports=r},45906:(A,f,e)=>{var s=e(12186);function E(r,c){return r&&r.length&&c&&c.length?s(r,c):r}A.exports=E},34049:(A,f,e)=>{var s=e(20454);function E(r){var c=r==null?0:r.length;return c?s(r,1,c):[]}A.exports=E},56589:(A,f,e)=>{"use strict";e.d(f,{N:()=>oe,ProtectedEditView:()=>je});var s=e(74081),E=e(27279),r=e(93415),c=e(10701),P=e(32370),y=e(23298),m=e(74577),B=e(73354),L=e(27875),R=e(48102),U=e(74758),$=e(45322),b=e(24920),G=e(34642),H=e(22572),_=e(15530),j=e(53532),V=e(71563),x=e(61020),ee=e(40464),se=e(59461),Q=e(51447),te=e(66947),le=e(44485),F=e(90114),W=e(50292),de=e(76873),re=e(59082),ce=e(35318),_e=e(58422),Ee=e(34049),Y=e(19003),pe=e(98344),k=e(47853),Pe=e(61815),ne=e(22009),$e=e(64797),Ge=e(85811),He=e(24468),Ve=e(15816),Fe=e(97442),Ye=e(13576),ze=e(87830),be=e(47184),Qe=e(364),Xe=e(49204),Je=e(74919),we=e(29206),qe=e(98934),es=e(43433),ss=e(75719),ts=e(8175),ns=e(6078),as=e(51943),os=e(55783),is=e(92249),ls=e(41942),ds=e(22919),rs=e(53915),cs=e(75041),_s=e(30200),Es=e(91379),ps=e(33299),Ps=e(33409),gs=e(63645),Os=e(7988),hs=e(7055),Ms=e(26757),As=e(58311),ms=e(29510),us=e(16946),Ds=e(10124),Ts=e(69530),Cs=e(86961),xs=e(51527),vs=e(19764),Is=e(42982),fs=e(26126);const[ge,Oe]=(0,de.k)("ApiTokenPermissionsContext"),he=({children:t,...a})=>(0,s.jsx)(ge,{...a,children:t}),X=()=>Oe("useApiTokenPermissions"),Me=({errors:t={},onChange:a,canEditInputs:n,isCreating:d,values:o={},apiToken:p={},onDispatch:i,setHasChangedPermissions:v})=>{const{formatMessage:O}=(0,x.Z)(),I=({target:{value:T}})=>{v(!1),T==="full-access"&&i({type:"SELECT_ALL_ACTIONS"}),T==="read-only"&&i({type:"ON_CHANGE_READ_ONLY"})},N=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,s.jsx)(r.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(P.Z,{variant:"delta",as:"h2",children:O({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(y.r,{gap:5,children:[(0,s.jsx)(m.P,{col:6,xs:12,children:(0,s.jsx)(W.T,{error:t.name,value:o.name,canEditInputs:n,onChange:a})},"name"),(0,s.jsx)(m.P,{col:6,xs:12,children:(0,s.jsx)(W.a,{error:t.description,value:o.description,canEditInputs:n,onChange:a})},"description"),(0,s.jsx)(m.P,{col:6,xs:12,children:(0,s.jsx)(W.L,{isCreating:d,error:t.lifespan,value:o.lifespan,onChange:a,token:p})},"lifespan"),(0,s.jsx)(m.P,{col:6,xs:12,children:(0,s.jsx)(W.b,{value:o.type,error:t.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{I({target:{value:T}}),a({target:{name:"type",value:T}})},options:N,canEditInputs:n})},"type")]})]})})},Ae=({apiTokenName:t=null})=>{const{formatMessage:a}=(0,x.Z)();return(0,_.go)(),(0,s.jsxs)(B.o,{"aria-busy":"true",children:[(0,s.jsx)(_.SL,{name:"API Tokens"}),(0,s.jsx)(L.T,{primaryAction:(0,s.jsx)(R.z,{disabled:!0,startIcon:(0,s.jsx)(re.Z,{}),type:"button",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:t||a({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,s.jsx)(U.D,{children:(0,s.jsx)(_.dO,{})})]})},me=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},ue=(0,Y.ZP)(r.x)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`,De=({route:t={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:a}=(0,x.Z)(),{method:n,handler:d,path:o}=t,p=o?Ee(o.split("/")):[],[i="",v=""]=d?d.split("."):[],O=me(t.method);return(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(P.Z,{variant:"delta",as:"h3",children:[a({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,s.jsx)("span",{children:i}),(0,s.jsxs)(P.Z,{variant:"delta",textColor:"primary600",children:[".",v]})]}),(0,s.jsxs)(c.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,s.jsx)(ue,{background:O.background,borderColor:O.border,padding:2,children:(0,s.jsx)(P.Z,{fontWeight:"bold",textColor:O.text,children:n})}),(0,s.jsx)(r.x,{paddingLeft:2,paddingRight:2,children:_e(p,I=>(0,s.jsxs)(P.Z,{textColor:I.includes(":")?"neutral600":"neutral900",children:["/",I]},I))})]})]})},Te=()=>{const{value:{selectedAction:t,routes:a}}=X(),{formatMessage:n}=(0,x.Z)(),d=t?.split(".")[0];return(0,s.jsx)(m.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:t?(0,s.jsx)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:d&&d in a&&a[d].map(o=>o.config.auth?.scope?.includes(t)||o.handler===t?(0,s.jsx)(De,{route:o},o.handler):null)}):(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(P.Z,{variant:"delta",as:"h3",children:n({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,s.jsx)(P.Z,{as:"p",textColor:"neutral600",children:n({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},ae=(0,Y.iv)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ce=(0,Y.ZP)(r.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&ae}
  &:hover {
    ${ae}
  }
`,xe=Y.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,ve=({controllers:t=[],label:a,orderNumber:n=0,disabled:d=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:p=null})=>{const{value:{onChangeSelectAll:i,onChange:v,selectedActions:O,setSelectedAction:I,selectedAction:N}}=X(),[T,z]=E.useState(!1),{formatMessage:Z}=(0,x.Z)(),h=()=>{z(g=>!g),o(n)};E.useEffect(()=>{p!==null&&p!==n&&T&&z(!1)},[p,n,T]);const ie=g=>g===N;return(0,s.jsxs)($.U,{expanded:T,onToggle:h,variant:n%2?"primary":"secondary",children:[(0,s.jsx)(b.B,{title:pe(a)}),(0,s.jsx)(G.v,{children:t?.map(g=>{const K=g.actions.every(M=>O.includes(M.actionId)),J=g.actions.some(M=>O.includes(M.actionId));return(0,s.jsxs)(r.x,{children:[(0,s.jsxs)(c.k,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,s.jsx)(r.x,{paddingRight:4,children:(0,s.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:g?.controller})}),(0,s.jsx)(xe,{}),(0,s.jsx)(r.x,{paddingLeft:4,children:(0,s.jsx)(H.X,{value:K,indeterminate:!K&&J,onValueChange:()=>{i({target:{value:[...g.actions]}})},disabled:d,children:Z({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsx)(y.r,{gap:4,padding:4,children:g?.actions&&g?.actions.map(M=>(0,s.jsx)(m.P,{col:6,children:(0,s.jsxs)(Ce,{isActive:ie(M.actionId),padding:2,hasRadius:!0,children:[(0,s.jsx)(H.X,{value:O.includes(M.actionId),name:M.actionId,onValueChange:()=>{v({target:{value:M.actionId}})},disabled:d,children:M.action}),(0,s.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>I({target:{value:M.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,s.jsx)(ce.Z,{})})]})},M.actionId))})]},`${a}.${g?.controller}`)})})]})},Ie=({section:t=null,...a})=>{const[n,d]=E.useState(null),o=p=>d(p);return(0,s.jsx)(r.x,{padding:4,background:"neutral0",children:t&&t.map((p,i)=>(0,s.jsx)(ve,{label:p.label,controllers:p.controllers,orderNumber:i,indexExpandendCollapsedContent:n,onExpanded:o,...a},p.apiId))})},fe=({...t})=>{const{value:{data:a}}=X(),{formatMessage:n}=(0,x.Z)();return(0,s.jsxs)(y.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,s.jsxs)(m.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(P.Z,{variant:"delta",as:"h2",children:n({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,s.jsx)(P.Z,{as:"p",textColor:"neutral600",children:n({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),a?.permissions&&(0,s.jsx)(Ie,{section:a?.permissions,...t})]}),(0,s.jsx)(Te,{})]})},ye=k.Ry().shape({name:k.Z_().max(100).required(_.I0.required),type:k.Z_().oneOf(["read-only","full-access","custom"]).required(_.I0.required),description:k.Z_().nullable(),lifespan:k.Rx().integer().min(0).nullable().defined(_.I0.required)}),Le=t=>{const a={allActionsIds:[],permissions:[]};return a.permissions=Object.entries(t).map(([n,d])=>({apiId:n,label:n.split("::")[1],controllers:Object.keys(d.controllers).map(o=>({controller:o,actions:o in d.controllers?d.controllers[o].map(p=>{const i=`${n}.${o}.${p}`;return n.includes("api::")&&a.allActionsIds.push(i),{action:p,actionId:i}}).flat():[]})).flat()})),a},Re={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},Ue=(t,a)=>(0,Pe.ZP)(t,n=>{switch(a.type){case"ON_CHANGE":{n.selectedActions.includes(a.value)?ne(n.selectedActions,a.value):n.selectedActions.push(a.value);break}case"SELECT_ALL_IN_PERMISSION":{a.value.every(o=>n.selectedActions.includes(o.actionId))?a.value.forEach(o=>{ne(n.selectedActions,o.actionId)}):a.value.forEach(o=>{n.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{n.selectedActions=[...n.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const d=n.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));n.selectedActions=[...d];break}case"UPDATE_PERMISSIONS_LAYOUT":{n.data=Le(a.value);break}case"UPDATE_ROUTES":{n.routes={...a.value};break}case"UPDATE_PERMISSIONS":{n.selectedActions=[...a.value];break}case"SET_SELECTED_ACTION":{n.selectedAction=a.value;break}default:return n}}),Be="Name already taken",oe=()=>{(0,_.go)();const{formatMessage:t}=(0,x.Z)(),{lockApp:a,unlockApp:n}=(0,_.o1)(),d=(0,_.lm)(),{state:o}=(0,Q.TH)(),p=(0,se.v9)(te.s),[i,v]=E.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:O}=(0,_.rS)(),{setCurrentStep:I}=(0,_.c1)(),{allowedActions:{canCreate:N,canUpdate:T,canRegenerate:z}}=(0,_.ss)(p.settings?.["api-tokens"]),[Z,h]=E.useReducer(Ue,Re),g=(0,Q.$B)("/settings/api-tokens/:id")?.params?.id,{get:K,post:J,put:M}=(0,_.kY)(),We=(0,Q.k6)(),u=g==="create";(0,ee.useQuery)("content-api-permissions",async()=>{await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async l=>{if(l==="/admin/content-api/permissions"){const{data:{data:C}}=await K(l);return h({type:"UPDATE_PERMISSIONS_LAYOUT",value:C}),C}else if(l==="/admin/content-api/routes"){const{data:{data:C}}=await K(l);return h({type:"UPDATE_ROUTES",value:C}),C}})),i&&(i?.type==="read-only"&&h({type:"ON_CHANGE_READ_ONLY"}),i?.type==="full-access"&&h({type:"SELECT_ALL_ACTIONS"}),i?.type==="custom"&&h({type:"UPDATE_PERMISSIONS",value:i?.permissions}))},{onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),E.useEffect(()=>{O(u?"didAddTokenFromList":"didEditTokenFromList",{tokenType:F.A})},[u,O]);const{status:Ke}=(0,ee.useQuery)(["api-token",g],async()=>{const{data:{data:l}}=await K(`/admin/api-tokens/${g}`);return v({...l}),l?.type==="read-only"&&h({type:"ON_CHANGE_READ_ONLY"}),l?.type==="full-access"&&h({type:"SELECT_ALL_ACTIONS"}),l?.type==="custom"&&h({type:"UPDATE_PERMISSIONS",value:l?.permissions}),l},{enabled:!u&&!i,onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Se=async(l,C)=>{O(u?"willCreateToken":"willEditToken",{tokenType:F.A}),a();try{const{data:{data:D}}=u?await J("/admin/api-tokens",{...l,lifespan:l.lifespan==="0"?parseInt(l.lifespan):null,permissions:l.type==="custom"?Z.selectedActions:null}):await M(`/admin/api-tokens/${g}`,{name:l.name,description:l.description,type:l.type,permissions:l.type==="custom"?Z.selectedActions:null});u&&(We.replace(`/settings/api-tokens/${D.id}`,{apiToken:D}),I("apiTokens.success")),n(),v({...D}),d({type:"success",message:t(u?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),i?.type&&O(u?"didCreateToken":"didEditToken",{type:i.type,tokenType:F.A})}catch(D){if(D instanceof j.d7&&D.response){const S=(0,le.f)(D.response.data);C.setErrors(S),D?.response?.data?.error?.message===Be?d({type:"warning",message:D.response.data.message||"notification.error.tokennamenotunique"}):d({type:"warning",message:D?.response?.data?.message||"notification.error"})}n()}},[ke,w]=E.useState(!1),Ne={...Z,onChange:({target:{value:l}})=>{w(!0),h({type:"ON_CHANGE",value:l})},onChangeSelectAll:({target:{value:l}})=>{w(!0),h({type:"SELECT_ALL_IN_PERMISSION",value:l})},setSelectedAction:({target:{value:l}})=>{h({type:"SET_SELECTED_ACTION",value:l})}},q=T&&!u||N&&u;return!u&&!i&&Ke!=="success"?(0,s.jsx)(Ae,{apiTokenName:i?.name}):(0,s.jsx)(he,{value:Ne,children:(0,s.jsxs)(B.o,{children:[(0,s.jsx)(_.SL,{name:"API Tokens"}),(0,s.jsx)(V.J9,{validationSchema:ye,validateOnChange:!1,initialValues:{name:i?.name||"",description:i?.description||"",type:i?.type,lifespan:i?.lifespan?i.lifespan.toString():i?.lifespan},enableReinitialize:!0,onSubmit:(l,C)=>Se(l,C),children:({errors:l,handleChange:C,isSubmitting:D,values:S,setFieldValue:Ze})=>(ke&&S?.type!=="custom"&&Ze("type","custom"),(0,s.jsxs)(_.l0,{children:[(0,s.jsx)(W.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:i,setToken:v,canEditInputs:q,canRegenerate:z,isSubmitting:D,regenerateUrl:"/admin/api-tokens/"}),(0,s.jsx)(U.D,{children:(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(i?.name)&&(0,s.jsx)(W.c,{token:i?.accessKey,tokenType:F.A}),(0,s.jsx)(Me,{errors:l,onChange:C,canEditInputs:q,isCreating:u,values:S,apiToken:i,onDispatch:h,setHasChangedPermissions:w}),(0,s.jsx)(fe,{disabled:!q||S?.type==="read-only"||S?.type==="full-access"})]})})]}))})]})})},je=()=>{const t=(0,se.v9)(te.s);return(0,s.jsx)(_.O4,{permissions:t.settings?.["api-tokens"].read,children:(0,s.jsx)(oe,{})})}}}]);
