import { Menu, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { SearchComponent, SearchIconWrapper, StyledInputBase } from "./styled";

function NavBar() {
  
  const [inputSearch, setInputSearch] = useState("");
  
  useEffect(() => {
    console.log(inputSearch)
  }, [inputSearch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Harry Potter
          </Typography>
          <SearchComponent>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={inputSearch}
              onChange={ (event) => setInputSearch(event.target.value) }
            />
          </SearchComponent>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
