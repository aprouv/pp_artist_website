import { useState, useEffect } from "react";

const useFetch = (url, toggle) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url, toggle]);
  return [data];
};

export default useFetch;
