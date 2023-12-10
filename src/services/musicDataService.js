export default class musicDataService {
  _data = {
    items: [
      {
        id: "video1",
        name: "Video1.mp4",
        icon: "info_bubble",
        content: {
          url: "rokGy0huYEA",
        },
      },
    ],
  };

  getMusicItems() {
    return this._data.musicitems.map(({ id, name, icon }) => ({
      id,
      name,
      icon,
    }));
  }

  getMusicItem(id) {
    return this._data.musicitems.find((x) => x.id === id);
  }

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }
}
