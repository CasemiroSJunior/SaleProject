"use client";
import { Avatar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Question } from "@phosphor-icons/react";
import { CaretLeft, House, Package, SignOut } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { DrawerTabProps } from "./interfaces/DrawerInterface";

export default function DrawerTab({ showDialog, setShowDialog, userName, UserImage, userId }: DrawerTabProps) {
  return (
    <Drawer variant="persistent" anchor="left" open={showDialog}>
      <Grid className="bg-defaultComponentColor h-full w-full">
        <Grid container justifyContent={"end"} p={2} alignItems={"center"}>
          <Button onClick={setShowDialog}>
            <CaretLeft size={32} color="white" className="fill-white"/>
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
              sx={{ width: 56, height: 56 }}
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
            <ListItem button>
              <ListItemIcon>
                <House size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white"  primary="Meu perfil" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Package size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white" primary="Meus pedidos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Question size={32} color="white" />
              </ListItemIcon>
              <ListItemText className="text-white" primary="Dúvidas" />
            </ListItem>
          </List>
        </Grid>
        <Divider className="bg-white" />
        <Grid container item>
          <ListItem button>
            <ListItemIcon>
              <SignOut size={32} color="white" />
            </ListItemIcon>
            <ListItemText className="text-white" primary="Sair" />
          </ListItem>
        </Grid>
      </Grid>
    </Drawer>
  );
}
