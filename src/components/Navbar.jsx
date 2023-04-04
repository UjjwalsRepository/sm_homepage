import { AppBar, Toolbar,styled, Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import TagIcon from '@mui/icons-material/Tag';
import React,{useState} from 'react'
import { Mail, Notifications } from '@mui/icons-material';
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
})
const Search=styled("div")(({theme})=>({
    display:"flex",
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"

}));
const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));
const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' p={2}
            sx={{display:{xs:"none",sm:"block"}}}>
                SM APP
            </Typography>
            <TagIcon sx={{display:{xs:"block",sm:"none"}}} />
            <Search><InputBase placeholder='search...'/></Search>
            <Icons>
                <Badge badgeContent={5}
                color="error"
                >
                    <Mail/>
                </Badge>
                <Badge  badgeContent={2} color="error">
                    <Notifications/>
                </Badge>
                <Avatar onClick={e=>setOpen(true)} sx={{ bgcolor:"orange" }}>N</Avatar>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{bgcolor:"orange"}}>N</Avatar>
                <Typography variant='span'>Ujjwal</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar