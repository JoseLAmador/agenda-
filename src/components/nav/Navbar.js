import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import MenuNav from './MenuNav'

//onLeftIconButtonTouchTap = { isUser ? this.props.openDrawer : null}

const Navbar = ({logOut,avatar,openDrawer,openProfile}) => (
    <div>
        <AppBar
          title={<span className="titleNav">Welcome,
          <Avatar
          src={avatar}
          size={50}
          style={{marginLeft:' 5px',marginTop: '5px'}}
        /></span>}
          iconElementLeft={<IconButton><MenuIcon onClick={openDrawer}/></IconButton>}
          iconElementRight={ <MenuNav logOut={logOut} openProfile={openProfile} /> }
        />
    </div>
);


export default Navbar
