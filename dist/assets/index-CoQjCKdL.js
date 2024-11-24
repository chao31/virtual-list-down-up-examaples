import{j as i,I as e}from"./index-KYHWLxCb.js";import{C as t}from"./index-B91RW4zl.js";const s=`
import { VariableSizeList as List } from 'virtual-list-down-up';

const Row = ({ item, index }) => <div key={index}>{item}</div>;

const Example = () => (
  <List
    listData={listData}
    estimatedItemSize={90}
  >
    {Row}
  </List>
);
`;function d(){return i.jsxs("div",{className:"demo",children:[i.jsx("div",{className:"demo-left",children:i.jsx(e,{})}),i.jsx("div",{className:"demo-right",children:i.jsx(t,{code:s,language:"typescript"})})]})}export{d as default};
