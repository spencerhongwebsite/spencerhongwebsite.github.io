import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";

function VideoPage({ content }) {
  return (
    <div>
      <YoutubeEmbed embedId={content} />
    </div>
  );
}

export default VideoPage;
