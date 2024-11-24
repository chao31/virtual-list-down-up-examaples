import{R as i,r as u,f as n,j as t,P as w}from"./index-CvzAJk0u.js";import{C as y}from"./index-D18bViJg.js";const M=`
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
      bufferScale={1}
      pullDownCallback={requestTopData}
      pullUpCallback={requestBottomData}
      hasMoreTopData={hasMoreTopData}
      hasMoreBottomData={hasMoreBottomData}
      loaderAtTop={
        <div className="my-list-loader">
          {hasMoreTopData ? 'loading...' : 'No more !'}
        </div>
      }
      loaderAtBottom={
        <div className="my-list-loader">
          {hasMoreBottomData ? 'loading...' : 'No more !'}
        </div>
      }
    >
      {Row}
    </VariableSizeList>
  );
};
`,o=7,T=()=>{const[c,p]=i.useState(!0),[m,D]=i.useState(!0),s=i.useRef(null),r=u.useRef(1),l=u.useRef(1),v=new Array(20).fill(!0).map((a,e)=>`<div class="page-title">Row ${e+1}</div> ${n.lorem.sentences()} </br> <div class="page-mark">4/<span>${o}</span></div>`),h=async()=>(console.log("请求了top数据"),await new Promise(a=>setTimeout(a,500)),r.current>3?(p(!1),[]):(r.current+=1,new Array(20).fill(!0).map((a,e)=>`<div class="page-title">Row ${e+1}</div> ${n.lorem.sentences()}</br> <div class="page-mark">${o-(r.current+3)+1}/<span>${o}</span></div>`))),f=async()=>(console.log("请求了bottom数据"),await new Promise(a=>setTimeout(a,500)),l.current>3?(D(!1),[]):(l.current+=1,new Array(20).fill(!0).map((a,e)=>`<div class="page-title">Row ${e+1}</div> ${n.lorem.sentences()}</br> <div class="page-mark">${l.current+3}/<span>${o}</span></div>`))),x=({item:a,index:e})=>{const g=()=>{var d;if(window.confirm(`Are you sure you want to delete ${e} ?`)){if(!s.current)return;(d=s==null?void 0:s.current)==null||d.delItem(e)}console.log("index: ",e,a)};return t.jsx("div",{className:`my-list-item ${Number(e)%2==0?"my-list-item-even":"my-list-item-odd"}`,onClick:g,children:t.jsx("span",{dangerouslySetInnerHTML:{__html:a}})},e)};return t.jsx("div",{className:"wrap",children:t.jsx("div",{className:"my-list",children:t.jsx(w,{ref:s,listData:v,estimatedItemSize:90,bufferScale:1,pullDownCallback:h,pullUpCallback:f,hasMoreTopData:c,hasMoreBottomData:m,loaderAtTop:t.jsx("div",{className:"my-list-loader",children:c?"loading...":"No more !"}),loaderAtBottom:t.jsx("div",{className:"my-list-loader",children:m?"loading...":"No more !"}),children:x})})})};function j(){return t.jsxs("div",{className:"demo",children:[t.jsx("div",{className:"demo-left",children:t.jsx(T,{})}),t.jsx("div",{className:"demo-right",children:t.jsx(y,{code:M,language:"typescript"})})]})}export{j as default};
