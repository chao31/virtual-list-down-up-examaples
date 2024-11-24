const code = `

// ref.current.delItem(index: number);

import { VariableSizeList as List } from 'virtual-list-down-up';

const Example = ({ listData }) => {
  const ref = React.useRef(null);

  const Row = ({ item, index }) => {
    const click = () => {
      if (confirm('Are you sure you want to delete' + index)) {
        ref.current.delItem(index);
      }
    };
  
    return <div key={index}>{item}</div>
  };

  return (
    <VariableSizeList
      ref={ref}
      listData={listData}
      estimatedItemSize={90}
    >
      {Row}
    </VariableSizeList>
  );
};
`;

export { code };