import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.flickr.com/services/feeds/photos_public.gne"
      ).then(async (data) => {
        const response = await data.text();
        return response;
      }); //add cors to chrome extensions for fixing CORS error
      //   .then((xml) => {
      //     //   const result = new XMLParser().parseFromString(xml);
      //     console.log(result);
      //     // });
      //     const data = await response.text();
      //     console.log("DATA", response);
      //     return response;

      setData(data);
      //   console.log(data);
      //   return data;
    };
    fetchData();
  }, []);

  console.log(data);
  return <div>{data}</div>;
};
