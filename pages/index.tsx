import type { NextPage } from 'next';
import { Page } from '../components/MyWonderfulComponent';
import { testData } from '../data';

type Data = {
  id: number;
  options: boolean;
  count: number;
  color: string;
  text: string;
};

interface TestProps {
  data: Data;
}

const Home: NextPage<TestProps> = ({ data }) => {
  return (
    <Page
      id={data.id}
      options={data.options}
      count={data.count}
      color={data.color}
      text={data.text}
    />
  );
};

export default Home;

export function getStaticProps() {
  const data = testData;
  console.log(data.text);

  return {
    props: { data },
  };
}
