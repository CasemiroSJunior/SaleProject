"use client";
import { Avatar, Button, Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Question } from "@phosphor-icons/react";
import { CaretLeft, Headset, House, Package, SignOut } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { DrawerTabProps } from "./interfaces/DrawerInterface";

export default function DrawerTab({ showDialog, setShowDialog, userName, UserImage, userId }: DrawerTabProps) {
  return (
    <Drawer variant="persistent" anchor="left" open={showDialog} >
      <Grid className="bg-themeChestnutBrown h-full w-full">
        <Grid container justifyContent={"end"} p={2} alignItems={"center"}>
          <Button onClick={setShowDialog}>
            <CaretLeft size={32} color="white" className="fill-white" />
          </Button>
        </Grid>
        <Grid
          container
          alignContent={"center"}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Avatar
              alt={`${userName} Image`}
              src={UserImage}
              className="border-2 border-white"
              sx={{ width: 64, height: 64 }}
            />
          </Grid>
          <Grid item>
            <Typography className="text-base max-w-48 w-48 text-start text-white" align="center" p={2}>
              {userName}
            </Typography>
          </Grid>
        </Grid>
        <Divider className="bg-white" />
        <Grid>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <House size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white" primary="Meu perfil" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Package size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white" primary="Meus pedidos" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Question size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white" primary="Dúvidas" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Headset size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white" primary="Suporte" />
            </ListItemButton>
          </List>
        </Grid>
        <Divider className="bg-white" />
        <Grid container item>
          <ListItemButton>
            <ListItemIcon>
              <SignOut size={32} color="white" />
            </ListItemIcon>
            <ListItemText className="text-white" primary="Sair" />
          </ListItemButton>
        </Grid>
      </Grid>
    </Drawer>
  );
}
