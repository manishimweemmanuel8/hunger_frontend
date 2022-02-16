import * as React from "react";
import { Divider, List } from "@mui/material";
import { mainListItems, secondaryListItems } from "./listItems";




export default function DashboardSidbar() {
  return (
    <List component="nav">
    {mainListItems}
    {/* <Divider sx={{ my: 1 }} />
    {secondaryListItems} */}
  </List>
  );
}
