import{j as r}from"./jsx-runtime-BnIj46N_.js";import{T as v,L as E,E as C}from"./ErrorMessage-JATCi31F.js";import{I as h}from"./Input-Dqji-sXd.js";import{u as l}from"./styled-components.browser.esm-BDDUX98t.js";import{r as u}from"./index-CsdIBAqE.js";import{i as x}from"./isNumericString-BqsgwGh2.js";import{u as d}from"./useBoolean-C4Nz0XNG.js";function T({valueState:e,errorState:n,inputRef:a,onChange:t,onBlur:c,onFocus:p}){return u.useEffect(()=>{var o;(o=a.current)==null||o.focus()},[]),r.jsxs(I,{children:[r.jsx("div",{children:r.jsx(v,{children:"CVC 번호를 입력해 주세요"})}),r.jsxs(y,{children:[r.jsx(E,{children:"CVC"}),r.jsx(M,{children:r.jsx(h,{ref:a,maxLength:4,placeholder:"123",value:e,isError:n.isError,onChange:t,onBlur:c,onFocus:p})}),n.isError&&r.jsx(C,{message:n.errorMessage})]})]})}const I=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,y=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,M=l.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;T.__docgenInfo={description:"",methods:[],displayName:"CardCvcInput",props:{valueState:{required:!0,tsType:{name:"string"},description:""},errorState:{required:!0,tsType:{name:"CardCvcErrorState"},description:""},inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R=e=>{if(!x(e))throw new Error("CVC는 숫자만 입력할 수 있어요")},j=e=>{if(!(e.length===3||e.length===4))throw new Error("CVC는 세 자리 또는 네 자리 숫자로 입력해 주세요")},D=()=>{const[e,n]=u.useState(""),[a,t]=u.useState({isError:!1,errorMessage:""}),{flag:c,setTrue:p}=d(),o=u.useRef(null),{flag:m,setTrue:g,setFalse:f}=d(!1);return{isFocused:m,isDoneThisStep:c,cardCvcInputProps:{valueState:e,errorState:a,inputRef:o,onChange:i=>{try{R(i.target.value),n(i.target.value),t({isError:!1,errorMessage:""})}catch(s){s instanceof Error&&t({isError:!0,errorMessage:s.message})}},onBlur:i=>{f();try{j(i.target.value),t({isError:!1,errorMessage:""}),p()}catch(s){s instanceof Error&&t({isError:!0,errorMessage:s.message})}},onFocus:()=>{g()}}}};export{T as C,D as u};
