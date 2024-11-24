const code = `
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
      pullUpCallback={requestBottomData}
      hasMoreBottomData={hasMoreBottomData}
    >
      {Row}
    </VariableSizeList>
  );
};
`;

export { code };