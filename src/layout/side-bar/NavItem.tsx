import { alpha, Box, ListItemButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function NavItem({ item }: { item: any }) {
  const { pathname } = useLocation();
  const active = item.href === pathname;

  return (
    <ListItemButton
      component={NavLink}
      to={item.href}
      sx={{
        marginBottom: "0.5rem",
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "white",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.light, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box
        component="span"
        sx={{ width: 24, height: 24, mr: 2, color: "white" }}
      >
        {item.icon}
      </Box>

      <Box component="span" sx={{ color: "white" }}>
        {item.title}
      </Box>
    </ListItemButton>
  );
}

export default NavItem;
