const code = `
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
`;

export { code };