"use strict";(self.webpackChunkfreemancodz=self.webpackChunkfreemancodz||[]).push([[3070],{43070:(B,o,_)=>{_.r(o),_.d(o,{HomePageEE:()=>W});var n=_(74081),O=_(24357),M=_(44456),P=_(27279),i=_(15530),l=_(364),s=_(66947),L=_(40464),d=_(64797),I=_(85811),E=_(24468),a=_(15816),D=_(97442),m=_(13576),v=_(87830),T=_(47184),U=_(59461),C=_(71563),t=_(49204),A=_(47853),K=_(74919),R=_(29206),r=_(98934),f=_(43433),e=_(75719),h=_(8175),g=_(6078),c=_(51943),S=_(55783),y=_(92249),u=_(41942),N=_(22919),j=_(53915),H=_(75041),F=_(30200),V=_(91379),$=_(33299),x=_(33409),G=_(63645),z=_(7988),Y=_(7055),Q=_(26757),X=_(58311),Z=_(29510),J=_(16946),p=_(10124),b=_(69530),k=_(86961),w=_(51527),q=_(19764),__=_(42982),E_=_(26126),t_=_(59491),s_=_(69439),a_=_(74563);const W=()=>((0,M.u)(),(0,n.jsx)(O.HomePageCE,{}))},44456:(B,o,_)=>{_.d(o,{u:()=>I});var n=_(27279),O=_(15530),M=_(69439),P=_(61020),i=_(51447),l=_(74563);const s="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",d="https://strapi.io/billing/request-seats",I=()=>{const{formatMessage:E}=(0,P.Z)(),{license:a,isError:D,isLoading:m}=(0,l.u)(),v=(0,O.lm)(),{pathname:T}=(0,i.TH)(),{enforcementUserCount:U,permittedSeats:C,licenseLimitStatus:t,isHostedOnStrapiCloud:A}=a??{};n.useEffect(()=>{if(D||m)return;const K=!M(C)&&!window.sessionStorage.getItem(`${s}-${T}`)&&(t==="AT_LIMIT"||t==="OVER_LIMIT");let R;t==="OVER_LIMIT"?R="warning":t==="AT_LIMIT"&&(R="softWarning"),K&&v({type:R,message:E({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:t}),title:E({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:t,enforcementUserCount:U,permittedSeats:C}),link:{url:A?L:d,label:E({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:A})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${s}-${T}`,"true")}})},[v,a,T,E,m,C,t,U,A,D])}},74563:(B,o,_)=>{_.d(o,{u:()=>P});var n=_(27279),O=_(15530),M=_(40464);function P({enabled:i}={enabled:!0}){const{get:l}=(0,O.kY)(),{data:s,isError:L,isLoading:d}=(0,M.useQuery)(["ee","license-limit-info"],async()=>{const{data:E}=await l("/admin/license-limit-information");return E},{enabled:i}),I=n.useCallback(E=>{const a=s?.data?.features.find(D=>D.name===E);return a&&"options"in a?a.options:{}},[s]);return{license:s?.data,getFeature:I,isError:L,isLoading:d}}}}]);
