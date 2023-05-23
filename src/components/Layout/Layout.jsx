import {Link, Outlet} from 'react-router-dom'
import {Box,List, ListItem} from '@mui/material';



const Layout=()=>{
    return(
        <Box>
            <List>
                <ListItem>
                   <Link to="/home">Home</Link> 
                </ListItem>
                <ListItem>
                   <Link to="/users">Users</Link> 
                </ListItem>
                <ListItem>
                   <Link to="/userAlbum">Albums</Link> 
                </ListItem>
                <ListItem>
                   <Link to="/userAlbumPhotos">Photos</Link> 
                </ListItem>
                <ListItem>
                   <Link to="/about">About</Link> 
                </ListItem>
            </List>
            <Outlet/>
        </Box>
    )
}

export default Layout