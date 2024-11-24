const code = `
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
      pullDownCallback={requestTopData}
      pullUpCallback={requestBottomData}
      hasMoreTopData={hasMoreTopData}
      hasMoreBottomData={hasMoreBottomData}
    >
      {Row}
    </VariableSizeList>
  );
};
`;

export { code };