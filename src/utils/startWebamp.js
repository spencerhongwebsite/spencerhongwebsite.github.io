import Webamp from "webamp";

const startWebamp = () => {
  if (Webamp.browserIsSupported()) {
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "Baekhyun",
            title: "놀이공원 Amusement Park",
          },
          url: `${process.env.PUBLIC_URL}/amusement-park.mp3`,
          duration: 257,
        },
        {
          metaData: {
            artist: "070 Shake",
            title: "Guilty Conscience",
          },
          url: `${process.env.PUBLIC_URL}/guilty-conscience.mp3`,
          duration: 214,
        },
        {
          metaData: {
            artist: "Rumblefish",
            title: "으라차차",
          },
          url: `${process.env.PUBLIC_URL}/eurachacha.mp3`,
          duration: 257,
        },
      ],
    });
    webamp.onClose(() => {
      webamp.dispose();
    });

    webamp.renderWhenReady(document.getElementById("winamp-container"));
  }
};

export { startWebamp };
