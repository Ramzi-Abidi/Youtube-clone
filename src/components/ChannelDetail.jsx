import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setloading] = useState(true);
  const [loading1, setloading1] = useState(true);

  const REACT_APP_RAPID_API_KEY =
    "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA";

  console.log(data);
  console.log(videos);

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
      `https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`,
      options
    )
      .then((res) => {
        setloading(true) ;
        return res.json();
      })
      .then((data) => {
        console.log(data.items[0]);
        setloading(false) ;
        setData(data?.items[0]);
      })
      .catch((err) => {
        console.error(err);
      });

    fetch(
      `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&order=date`,
      options
    )
      .then((res) => {
        setloading1(true);
        return res.json();
      })
      .then((data) => {
        console.log(data?.items);
        setloading1(false);
        setVideos(data?.items);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      ok = false;
    };
  }, [id]);

  return (

    <Box minHeight="95vh">
      {loading && <ChannelCard channelDetail={data} marginTop="-93px" />}
      <Box>
        <div
          style={{
            height: "300px",
            background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,99,1) 13%, rgba(9,125,105,1) 25%, rgba(9,126,107,1) 45%, rgba(8,135,122,1) 61%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}></div>
          {loading1 && <ChannelCard channelDetail={data} marginTop="-93px" />}
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
