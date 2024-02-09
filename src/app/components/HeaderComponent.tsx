"use client"
import React from "react";
import DrawerTab from "./DrawerComponent";
import { List } from "@phosphor-icons/react/dist/ssr";
import { Badge, Grid, Typography } from "@mui/material";
import { ShoppingBagOpen } from "@phosphor-icons/react";

export default function Header() {

    const [showDrawer, setShowDrawer] = React.useState(false);

    function handleDrawer() {
        setShowDrawer(!showDrawer);
    }

    return (
        <div className="w-full bg-defaultComponentColor" >
            <DrawerTab
                showDialog={showDrawer}
                setShowDialog={handleDrawer}
                userName="John Doe"
                UserImage="https://randomuser.me"
                userId={1}
            />
            <Grid container direction={"row"} className="p-2 h-20 max-h-20" >
                <Grid container item p={2} alignItems={"center"}>
                    <List size={36} onClick={handleDrawer} />
                    <div className="absolute right-14 p-2">
                        <Badge max={99} badgeContent={10} color="error" >
                            <ShoppingBagOpen size={32} />
                        </Badge>
                        <Typography>
                            Olá user.name
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}