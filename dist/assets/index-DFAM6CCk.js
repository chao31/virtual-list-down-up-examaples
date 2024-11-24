import{R as d,r as p,f as o,j as t,P as u}from"./index-CvzAJk0u.js";import{C as x}from"./index-D18bViJg.js";const v=`
import { VariableSizeList as List } from 'virtual-list-down-up';

const Row = ({ item, index }) => <div key={index}>{item}</div>;

const Example = ({ listData }) => {
  const [hasMoreBottomData, setHasMoreBottomData] = React.useState(true);

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
      loaderAtTop={<div />}
      pullUpCallback={requestBottomData}
      hasMoreBottomData={hasMoreBottomData}
    >
      {Row}
    </VariableSizeList>
  );
};
`,r=7,h=()=>{const[i,l]=d.useState(!0),a=p.useRef(1),n=new Array(20).fill(!0).map((s,e)=>`<div class="page-title">Row ${e+1}</div> ${o.lorem.sentences()} </br> <div class="page-mark">4/<span>${r}</span></div>`),m=async()=>(console.log("请求了bottom数据"),await new Promise(s=>setTimeout(s,500)),a.current>3?(l(!1),[]):(a.current+=1,new Array(20).fill(!0).map((s,e)=>`<div class="page-title">Row ${e+1}</div> ${o.lorem.sentences()}</br> <div class="page-mark">${a.current+3}/<span>${r}</span></div>`))),c=({item:s,index:e})=>t.jsx("div",{className:`my-list-item ${Number(e)%2==0?"my-list-item-even":"my-list-item-odd"}`,children:t.jsx("span",{dangerouslySetInnerHTML:{__html:s}})},e);return t.jsx("div",{className:"wrap",children:t.jsx("div",{className:"my-list",children:t.jsx(u,{listData:n,estimatedItemSize:90,loaderAtTop:t.jsx("div",{}),pullUpCallback:m,hasMoreBottomData:i,children:c})})})};function g(){return t.jsxs("div",{className:"demo",children:[t.jsx("div",{className:"demo-left",children:t.jsx(h,{})}),t.jsx("div",{className:"demo-right",children:t.jsx(x,{code:v,language:"typescript"})})]})}export{g as default};
