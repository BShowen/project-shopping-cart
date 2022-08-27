import { useState } from "react";

export function useImageCard() {
  const [count, setCount] = useState(0);
  const component = (
    <>
      <p>{count}</p>
      <Photo src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" />
    </>
  );

  const plusCount = () => {
    setCount(count + 1);
  };

  return [component, plusCount];
}

function Photo({ src }) {
  return <img src={src} alt="alt text" width="300px" height="300px" />;
}
