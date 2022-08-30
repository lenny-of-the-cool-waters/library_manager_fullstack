import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import classnames from "classnames";
import { Box, IconButton, Link } from "@mui/material";
import Icon from "@mdi/react";

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiLinkedin as LinkedinIcon,
  mdiGithub as GithubIcon,
} from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
// import Dashboard from "../../pages/dashboard";
/* import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts"; */

// context
import { useLayoutState } from "../../context/LayoutContext";
// import Routing from "../Routes/Routing";

const Layout = (props) => {
  const classes = useStyles();
  const layoutState = useLayoutState();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <>
        <Header navigate={navigate} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Outlet />
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link
                color={"primary"}
                href={"/"}
                className={classes.link}
              >
                Home
              </Link>
              <Link
                color={"primary"}
                href={"/"}
                className={classes.link}
              >
                About 
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.linkedin.com/in/lenny-githenya"}
                target={"_blank"}
              >
                <IconButton aria-label="LinkedIn" size="large">
                  <Icon path={LinkedinIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              {/* <Link href={"https://twitter.com/flatlogic"} target={"_blank"}>
                <IconButton aria-label="twitter" size="large">
                  <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link> */}
              <Link href={"https://github.com/flatlogic"} target={"_blank"}>
                <IconButton
                  aria-label="github"
                  style={{ marginRight: -12 }}
                  size="large"
                >
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
};

export default Layout;
