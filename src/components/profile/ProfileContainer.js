import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import ProfileComponents from './ProfileComponents';
import ChangePasswordContainer from '../changepass/ChangePasswordContainer';
import EditProfileContainer from '../editprofile/EditProfileContainer';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';


class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          openEditProfile: false,
          openChangePassword:false
                };
  }


  openClosePassword = () => {
    let {openChangePassword}=this.state;
    openChangePassword = !openChangePassword
    this.setState({openChangePassword});
  };
  openCloseEdit= () => {
    let {openEditProfile}=this.state;
    openEditProfile = !openEditProfile
    this.setState({openEditProfile});
  };
  render() {
    console.log(this.props)
    const {profile} = this.props;
    return (
      <div>
        <Drawer
            docked={false}
            width={320}
            openSecondary={true}
            open={this.props.open}
            onRequestChange={this.props.openProfile}
          >
          <AppBar
            iconElementLeft={<IconButton><NavigationClose onClick={this.props.openProfile} /></IconButton>}
            title='Profile'
           />
         <ChangePasswordContainer
            open={this.state.openChangePassword}
            openClosePassword={this.openClosePassword}
           />
         <EditProfileContainer
            user={this.props.user}
            open={this.state.openEditProfile}
            openCloseEdit={this.openCloseEdit}
           />
         <ProfileComponents
            {...profile}
           openPass={this.openClosePassword}
           openEdit={this.openCloseEdit}
           user={this.props.user}
          />
        </Drawer>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
let profile = state.profile.list
profile=profile[0]
    return {
       profile
    }

}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch)
  }
}

ProfileContainer = connect (mapStateToProps,mapDispatchToProps)(ProfileContainer);
export default ProfileContainer;
