
import React, {useRef} from 'react';
import * as faker from 'faker';

import { VariableSizeList } from 'virtual-list-down-up';

const total = 7;

const Index = () => {
  const ref = React.useRef(null);

  //所有列表数据
  const listData = new Array(1000)
    .fill(true)
    .map((_, index) => `<div class="page-title">Row ${index + 1}</div> ${faker.lorem.sentences()} </br> <div class="page-mark">4/<span>${total}</span></div>`
  );


  const Row = ({ item, index }) => {
    const click = () => {
      if (window.confirm(`Are you sure you want to delete ${index} ?`)) {
        if (!ref.current) return;
        ref?.current?.delItem(index);
      }
    };

    return (
      <div className={`my-list-item ${Number(index) % 2 == 0 ? 'my-list-item-even' : 'my-list-item-odd'}`} key={index} onClick={click}>
        <span dangerouslySetInnerHTML={{ __html: item }}></span>
      </div>
    );
  };

  return (
    <div className="wrap">
      <div className="my-list">
        <VariableSizeList
          ref={ref}
          listData={listData}
          estimatedItemSize={90}
        >
          {Row}
        </VariableSizeList>
      </div>
    </div>
  );
};

export default Index;