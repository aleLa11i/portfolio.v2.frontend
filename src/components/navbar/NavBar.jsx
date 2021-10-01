import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  MemoryRouter,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import data from "./tabs-navbar.json"

function Router(props) {
  const { children } = props;

  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(["/inbox/:id", "/drafts", "/trash"]);
  const currentTab = routeMatch?.pattern?.path;

  return (

    <Tabs value={currentTab}>
      {
        data.map(tab => <Tab label={tab.label} value={tab.value} to={tab.to} component={Link} />)
      }
    </Tabs>
  );
}

export const NavBar = () => {
  return (
    <div className="navbar">
      <Router>
        <Box sx={{ width: "100%" }}>
          <MyTabs />
        </Box>
      </Router>
    </div>
  );
};
