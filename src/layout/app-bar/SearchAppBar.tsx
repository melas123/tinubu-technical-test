import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { Box, IconButton, InputBase, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Search from "./Search";

export default function SearchAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ mt: 0, backgroundColor: "primary", width: "100%" }}
    >
      <Toolbar>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            flexdirection: "row",
            gap: "0.5rem",
            display: { md: "flex", sm: "none", xs: "none" },
          }}
        >
          <Typography variant="h6" noWrap component="div" color="white">
            Tinubu
          </Typography>
          <Typography
            variant="body2"
            component="div"
            color="white"
            text-align="bottom"
            position="relative"
            marginBottom={-0.5}
          >
            Credit Solution Vanilla
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Search
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              noWrap: true,
            }}
          >
            <IconButton
              type="button"
              sx={{
                p: "0.5rem",
              }}
              aria-label="search"
            >
              <SearchIcon sx={{ color: "white" }} />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search"
            />
          </Search>
          <StarIcon sx={{ color: "white" }} />
          <NotificationsIcon sx={{ color: "white" }} />
          <AccountCircleIcon sx={{ color: "white" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
