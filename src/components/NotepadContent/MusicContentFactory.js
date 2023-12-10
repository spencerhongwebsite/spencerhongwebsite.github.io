import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/dataContext";
import VideoPage from "../NotepadContent/VideoPage";
function MusicContentFactory({ id, isMobile }) {
  const data = useContext(DataContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const file = data.getMusicItem(id);
    setItem(file);
  }, [id, data]);

  if (item === null) {
    return <div></div>;
  }

  switch (item.id) {
    default:
      return <VideoPage content={item.url} />;
  }
}

export default MusicContentFactory;
