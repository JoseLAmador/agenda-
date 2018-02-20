import React,{Component}from 'react';
import EmployeesComponents from './EmployeesComponents';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import * as userActions from '../../redux/actions/userActions';
import RegisterContainer from '../register/RegisterContainer';
import ToastrContainer, {Toast} from 'react-toastr-basic';
import RaisedButton from 'material-ui/RaisedButton';
import './Employees.css';

class EmployeesContainer extends Component{
  state = {
      openRegister: false,
  };
  showToast=(message)=>{
    Toast(message);
  }
  newUser = () => {
    let {openRegister}=this.state;
    openRegister = !openRegister
    this.setState({openRegister, showDrawer:false});
 };
  render(){
    const {employees,user} = this.props;
    console.log(employees)
    return(
      <div className=" tareas_box">
          <div className="cubierta">

                <EmployeesComponents
                  employees={employees}
                />
                {user.is_staff =!true ? null : <RaisedButton style={{marginTop:"100px"}} onClick={this.newUser}label="New User" primary={true} />}
                <RegisterContainer
                  open={this.state.openRegister}
                  showToast={this.showToast}
                  openRegister={this.newUser}
              />
            </div>
      </div>

    );
  }
}



function mapStateToProps(state, ownProps) {

    return {
       user: state.user.object,
       employees: state.employees.list
    }

}

function mapDispatchToProps(dispatch){
  return{
    employeesActions:bindActionCreators(employeesActions,dispatch),
    userActions:bindActionCreators(userActions,dispatch)
  }
}

EmployeesContainer = connect (mapStateToProps,mapDispatchToProps)(EmployeesContainer);
export default EmployeesContainer;

/*



*/
