import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import SideBar from "./SideBar";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ok = true;
    console.log(selectedCategory);

    const REACT_APP_RAPID_API_KEY =
      "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}&type=video&maxResults=50`,
      options
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        if (ok) setVideos(data.items);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      ok = false;
      setLoading(true);
    };
  }, [selectedCategory]);

  return (
    <Stack sx={{ display: "flex", flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#2196f3" }}>videos</span>
        </Typography>

        <Videos videos={videos} loading={loading} />
      </Box>
    </Stack>
  );
};

export default Feed;
