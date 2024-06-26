import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    loading && <ThreeDots
      visible={true}
      height={80}
      width={80}
      color="#gray"
      radius={9}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;