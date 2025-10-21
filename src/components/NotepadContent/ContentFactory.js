import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/dataContext";
import About from "./About";
import Contact from "./Contact";
import Poems from "./Poems";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

function ContentFactory({ id, isMobile }) {
  const data = useContext(DataContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const file = data.getItem(id);
    setItem(file);
  }, [id, data]);

  if (item === null) {
    return <div></div>;
  }

  switch (item.id) {
    case "about":
      return <About content={item.content} />;
    case "resume":
      return <Resume content={item.content} />;
    case "skills":
      return <Skills content={item.content} isMobile={isMobile} />;
    case "contact":
      return <Contact content={item.content} />;
    case "projects":
      return <Projects content={item.content} />;
    case "words":
      return <Poems content={item.content} />;
    default:
      return <div></div>;
  }
}

export default ContentFactory;
