
import { VariableSizeList as List } from 'virtual-list-down-up';
import * as faker from 'faker';

//所有列表数据
const listData = new Array(1000)
  .fill(true)
  .map((_, index) => `<div class="page-title">Row ${index + 1}</div> ${faker.lorem.sentences()} </br>`
);

const Row = ({ item, index }) => {
  return (
    <div className={`my-list-item ${Number(index) % 2 == 0 ? 'my-list-item-even' : 'my-list-item-odd'}`} key={index} >
      <span dangerouslySetInnerHTML={{ __html: item }}></span>
    </div>
  );
};

const Index = () => (
  <div className="wrap">
    <div className="my-list">
      <List
        listData={listData}
        estimatedItemSize={90}
        loaderAtBottom={<div></div>}
        loaderAtTop={<div></div>}
      >
        {Row}
      </List>
    </div>
  </div>
);

export default Index;