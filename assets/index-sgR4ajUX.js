import{R as n,r as l,f as i,j as t,P as v}from"./index-KYHWLxCb.js";import{C as g}from"./index-B91RW4zl.js";const f=`
import { VariableSizeList as List } from 'virtual-list-down-up';

const Row = ({ item, index }) => <div key={index}>{item}</div>;

const Example = ({ listData }) => {
  const [hasMoreTopData, setHasMoreTopData] = React.useState(true);
  const [hasMoreBottomData, setHasMoreBottomData] = React.useState(true);

  const requestTopData = async () => {
    await axios.get('/xxx')
      .then(function (response) {
        const list = response.data.list;
        setHasMoreTopData(list.length !== 0);
        return list;
      });
  };

  const requestBottomData = async () => {
    await axios.get('/xxx')
      .then(function (response) {
        const list = response.data.list;
        setHasMoreBottomData(list.length !== 0);
        return list;
      });
  };

  return (
    <VariableSizeList
      listData={listData}
      estimatedItemSize={90}
      pullDownCallback={requestTopData}
      pullUpCallback={requestBottomData}
      hasMoreTopData={hasMoreTopData}
      hasMoreBottomData={hasMoreBottomData}
    >
      {Row}
    </VariableSizeList>
  );
};
`,s=7,w=()=>{const[c,m]=n.useState(!0),[p,u]=n.useState(!0),o=l.useRef(1),r=l.useRef(1),d=new Array(20).fill(!0).map((e,a)=>`<div class="page-title">Row ${a+1}</div> ${i.lorem.sentences()} </br> <div class="page-mark">4/<span>${s}</span></div>`),D=async()=>(console.log("请求了top数据"),await new Promise(e=>setTimeout(e,500)),o.current>3?(m(!1),[]):(o.current+=1,new Array(20).fill(!0).map((e,a)=>`<div class="page-title">Row ${a+1}</div> ${i.lorem.sentences()}</br> <div class="page-mark">${s-(o.current+3)+1}/<span>${s}</span></div>`))),x=async()=>(console.log("请求了bottom数据"),await new Promise(e=>setTimeout(e,500)),r.current>3?(u(!1),[]):(r.current+=1,new Array(20).fill(!0).map((e,a)=>`<div class="page-title">Row ${a+1}</div> ${i.lorem.sentences()}</br> <div class="page-mark">${r.current+3}/<span>${s}</span></div>`))),h=({item:e,index:a})=>t.jsx("div",{className:`my-list-item ${Number(a)%2==0?"my-list-item-even":"my-list-item-odd"}`,children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e}})},a);return t.jsx("div",{className:"wrap",children:t.jsx("div",{className:"my-list",children:t.jsx(v,{listData:d,estimatedItemSize:90,pullDownCallback:D,pullUpCallback:x,hasMoreTopData:c,hasMoreBottomData:p,children:h})})})};function T(){return t.jsxs("div",{className:"demo",children:[t.jsx("div",{className:"demo-left",children:t.jsx(w,{})}),t.jsx("div",{className:"demo-right",children:t.jsx(g,{code:f,language:"typescript"})})]})}export{T as default};
