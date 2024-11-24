
import React, {useRef} from 'react';
import * as faker from 'faker';

import { VariableSizeList } from 'virtual-list-down-up';

const total = 7;

const Index = () => {
  const [hasMoreTopData, setHasMoreTopData] = React.useState(true);
  const pageTop = useRef(1);

  //所有列表数据
  const listData = new Array(20)
    .fill(true)
    .map((_, index) => `<div class="page-title">Row ${index + 1}</div> ${faker.lorem.sentences()} </br> <div class="page-mark">4/<span>${total}</span></div>`
  );

  // 模拟一个2秒后返回数据的请求
  const requestTopData = async () => {
    console.log('请求了top数据');
    // 设置一个2秒的延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    if (pageTop.current > 3) {
      setHasMoreTopData(false);
      return [];
    }

    pageTop.current += 1;

    // 返回模拟数据
    return new Array(20)
      .fill(true)
      .map(
        (_, index) => `<div class="page-title">Row ${index + 1}</div> ${faker.lorem.sentences()}</br> <div class="page-mark">${total - (pageTop.current + 3) + 1}/<span>${total}</span></div>`
      );
  };

  const Row = ({ item, index }) => {
    return (
      <div className={`my-list-item ${Number(index) % 2 == 0 ? 'my-list-item-even' : 'my-list-item-odd'}`} key={index} >
        <span dangerouslySetInnerHTML={{ __html: item }}></span>
      </div>
    );
  };

  return (
    <div className="wrap">
      <div className="my-list">
        <VariableSizeList
          listData={listData}
          estimatedItemSize={90}
          pullDownCallback={requestTopData}
          hasMoreTopData={hasMoreTopData}
        >
          {Row}
        </VariableSizeList>
      </div>
    </div>
  );
};

export default Index;