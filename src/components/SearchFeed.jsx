import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const REACT_APP_RAPID_API_KEY =
    "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA";

  console.log(id);

  useEffect(() => {
    let ok = true;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
      options
    )
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        console.log(data.items);
        if(ok) {
          setLoading(false);
          setData(data.items);
        } 
        return data;
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      ok = false;
    };
  }, []);

  return <div>

  </div>;
};

export default SearchFeed;
