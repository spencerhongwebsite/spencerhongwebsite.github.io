import { List, TaskBar } from "@react95/core";
import React, { useContext } from "react";
import styled from "styled-components";
import DataContext from "../contexts/dataContext";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

function Taskbar() {
  const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
  console.log(projectRepo, react95Repo);
  return (
    <TaskBar
      list={
        <List>
          <List.Item className="pointer" icon="brush">
            <Link
              href="https://github.com/React95/React95/tree/master/packages/core"
              target="_blank"
            >
              Built with React95!
            </Link>
          </List.Item>
          <List.Item className="pointer" icon="explore">
            <Link
              href="https://www.youtube.com/watch?v=OsNDhSPFZwU"
              target="_blank"
            >
              National Advisory Council for Human Genome Research
            </Link>
          </List.Item>
          <List.Divider />
          <List.Item className="pointer" icon="wab32_1019">
            <Link href="https://amaral.northwestern.edu/" target="_blank">
              Amaral Lab (co-advising)
            </Link>
          </List.Item>
          <List.Divider />
          <List.Item className="pointer" icon="shell32_42">
            <Link href="https://thomasstoegerlab.org/" target="_blank">
              Stoeger Lab (co-advising)
            </Link>
          </List.Item>
          <List.Divider />
          <List.Item className="pointer" icon="bulb">
            <Link href="https://knightlab.northwestern.edu/" target="_blank">
              Knight Lab (commitee)
            </Link>
          </List.Item>
          <List.Divider />
        </List>
      }
    />
  );
}

export default Taskbar;
