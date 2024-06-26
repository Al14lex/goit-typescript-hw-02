type PropsLoadMore = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: PropsLoadMore) => {
  return (
    <button onClick={onClick}>Load more</button>
  );
}

export default LoadMoreBtn;