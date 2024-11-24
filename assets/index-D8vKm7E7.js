import{R as d,r as p,f as i,j as e,P as u}from"./index-CZyiwQZf.js";import{C as x}from"./index-GpnCHGlS.js";const v=`
import { VariableSizeList as List } from 'virtual-list-down-up';

const Row = ({ item, index }) => <div key={index}>{item}</div>;

const Example = ({ listData }) => {
  const [hasMoreTopData, setHasMoreTopData] = React.useState(true);

  const requestTopData = async () => {
    await axios.get('/xxx')
      .then(function (response) {
        const list = response.data.list;
        setHasMoreTopData(list.length !== 0);
        return list;
      });
  };

  return (
    <VariableSizeList
      listData={listData}
      estimatedItemSize={90}
      loaderAtBottom={<div />}
      pullDownCallback={requestTopData}
      hasMoreTopData={hasMoreTopData}
    >
      {Row}
    </VariableSizeList>
  );
};
`,r=7,h=()=>{const[o,l]=d.useState(!0),a=p.useRef(1),n=new Array(20).fill(!0).map((s,t)=>`<div class="page-title">Row ${t+1}</div> ${i.lorem.sentences()} </br> <div class="page-mark">4/<span>${r}</span></div>`),c=async()=>(console.log("请求了top数据"),await new Promise(s=>setTimeout(s,500)),a.current>3?(l(!1),[]):(a.current+=1,new Array(20).fill(!0).map((s,t)=>`<div class="page-title">Row ${t+1}</div> ${i.lorem.sentences()}</br> <div class="page-mark">${r-(a.current+3)+1}/<span>${r}</span></div>`))),m=({item:s,index:t})=>e.jsx("div",{className:`my-list-item ${Number(t)%2==0?"my-list-item-even":"my-list-item-odd"}`,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s}})},t);return e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"my-list",children:e.jsx(u,{listData:n,estimatedItemSize:90,loaderAtBottom:e.jsx("div",{}),pullDownCallback:c,hasMoreTopData:o,children:m})})})};function g(){return e.jsxs("div",{className:"demo",children:[e.jsx("div",{className:"demo-left",children:e.jsx(h,{})}),e.jsx("div",{className:"demo-right",children:e.jsx(x,{code:v,language:"typescript"})})]})}export{g as default};
