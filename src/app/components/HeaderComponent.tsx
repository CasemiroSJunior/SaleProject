"use client"
import React, { useEffect } from "react";
import DrawerTab from "./DrawerComponent";
import { List } from "@phosphor-icons/react/dist/ssr";
import { Badge, Button, Grid, Typography } from "@mui/material";
import { ShoppingBagOpen } from "@phosphor-icons/react";
import { getRandomUser, RandomUserProps } from "./api/randomUserApi";

export default function Header() {

    const [showDrawer, setShowDrawer] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<RandomUserProps>({
        email: "",
        name: { first: "", last: "", title: "" },
        phone: "",
        picture: { large: "", medium: "", thumbnail: "" }
    });

    function handleDrawer() {
        setShowDrawer(!showDrawer);
    }

    async function fetchUser() {
        let userData = await getRandomUser();
        console.log(userData);
        setUser(userData)
    }

    useEffect(() => {
        fetchUser();
    }, [])

    /* function getRandomGender(): string {
        const genders = ["women", "men"];
        const randomIndex = Math.floor(Math.random() * genders.length);
        return genders[randomIndex];
    }

    function getRandomNumber(number: number): number {
        return Math.floor(Math.random() * number) + 1;
    } */


    return (
        <div className="w-full bg-themeChestnutBrown" >
            <DrawerTab
                showDialog={showDrawer}
                setShowDialog={handleDrawer}
                userName={`${user.name.first} ${user.name.last}`}
                UserImage={user.picture.thumbnail}
                userId={1}
            />
            <Grid container direction={"row"} className="p-2 h-20 max-h-20" >
                <Grid container item p={2} alignItems={"center"}>
                    <List size={36} onClick={handleDrawer} />
                    <div className="absolute right-14 p-2">
                        <Button onClick={() => console.log(user)}>
                            <Badge max={99} badgeContent={10} color="error" >
                                <ShoppingBagOpen size={32} />
                            </Badge>
                        </Button>
                        <Typography>
                            Olá, {"user"}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}