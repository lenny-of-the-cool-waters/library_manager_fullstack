import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Drawer, IconButton, List } from "@mui/material";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/styles";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Typography",
    link: "/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Book List", link: "/books", icon: <TableIcon /> },
  {
    id: 3,
    label: "Notifications",
    link: "/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/ui/icons" },
      { label: "Charts", link: "/ui/charts" },
      { label: "Maps", link: "/ui/maps" },
    ],
  },
  /* { id: 5, type: "divider" },
  { id: 6, type: "title", label: "HELP" },
  {
    id: 7,
    label: "Library",
    link: "https://flatlogic.com/templates",
    icon: <LibraryIcon />,
  },
  {
    id: 8,
    label: "Support",
    link: "https://flatlogic.com/forum",
    icon: <SupportIcon />,
  },
  {
    id: 9,
    label: "FAQ",
    link: "https://flatlogic.com/forum",
    icon: <FAQIcon />,
  }, */
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "PROJECTS" },
  {
    id: 12,
    label: "My recent",
    link: "",
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 13,
    label: "Starred",
    link: "",
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: "Background",
    link: "",
    icon: <Dot size="small" color="secondary" />,
  },
];

function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  let location = window.location;

  // global
  const { isSidebarOpened } = useLayoutState();
  const layoutDispatch = useLayoutDispatch();
  //  local
  const [isPermanent, setPermanent] = useState(true);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)} size="large">
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List
        className={isMobile ? classes.sidebarListMobile : classes.sidebarList}
      >
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;

    if (windowWidth <= theme.breakpoints.values.md) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default Sidebar;
