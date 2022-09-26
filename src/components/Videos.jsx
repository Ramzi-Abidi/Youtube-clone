import React from "react";
import { Stack, Box } from "@mui/material";
import { Circles } from "react-loader-spinner";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, loading }) => {
  console.log(videos);
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={3}
    >
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#2196f3"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {videos.map((video, i) => {
        console.log(video);
        return (
          <>
            {video.id.channelId && <ChannelCard channelDetail={video} />}
            <Box key={i}>{video.id.videoId && <VideoCard video={video} />}</Box>
          </>
        );
      })}
    </Stack>
  );
};

export default Videos;
