import React, { FC } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";

export function ChatsList() {
    return(
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#282c34'}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Чат новый" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Чат старый" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Box>
    )
}