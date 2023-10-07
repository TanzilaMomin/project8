import React from "react";
import { Button } from "@mui/material"

export const NavItem=({item})=>{
    return(
        <Button fullWidth variant="outlined" color="secondary">{item}</Button>
    );
}