import { AppBar, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material"; import "./Header.css"
import React from "react";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

const Header: React.FC<Props> = (props) => {

  function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {React.isValidElement(children) ? (
          children
        ) : (
          <div>{children}</div>
        )}
      </Slide>
    );
  }
  return (
    // <div>
    //   <h1>Parking Vacancy</h1>
    // </div>
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "darkgrey" }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Parking Vacancy
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

export default Header;