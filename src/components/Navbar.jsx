import { Feed, Pages, Photo, VideoFile } from '@mui/icons-material'
import { AppBar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "#F2EBE9",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({display:"flex", alignItems:"center", gap:"20px"}));

const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    gap:"10px"
}))

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
                Sham's Blog
            </Typography>
            <Pages sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='search...'/></Search>
            <Icons padding={2}>
                <Badge badgeContent={4} color="error">
                    <Feed/>
                </Badge>
                <Badge badgeContent={2} color="error">
                    <Photo/>
                </Badge>
                <Badge badgeContent={3} color="error">
                    <VideoFile/>
                </Badge>
            </Icons>
            <UserBox>
                
            </UserBox>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar