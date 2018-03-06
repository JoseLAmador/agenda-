import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrincipalComponents from './PrincipalComponents';
import EmployeesContainer from '../employees/EmployeesContainer';
import DetailEmployees from '../detailEmployees/DetailEmployeesPage';
import MeetingPage from '../meetings/MeetingPage';
import TableMeetingContainer from '../tablemeeting/TableMeetingContainer'
import ProjectContainer from '../project/ProjectContainer';
import ProjectsDetailPage from '../projectdetail/ProjectsDetailPage'
import DashboardContainer from '../dash/DashboardContainer';
import Calendar from '../calendar/CalendarContainer';

const Pages = ({props}) => (
    <Switch>
        <Route exact path="/agenda" component={Calendar}/>
        <Route path="/agenda/tasks" component={Calendar}/>
            <Route path="/agenda/dashboard" component={DashboardContainer} />
        <Route path="/agenda/project" component={ProjectContainer}/>
        <Route path="/agenda/meeting/:id" component={MeetingPage}/>
        <Route path="/agenda/meeting" component={TableMeetingContainer}/>
        <Route path="/agenda/employees/:id" component={DetailEmployees}/>
        <Route path="/agenda/employees" component={EmployeesContainer}/>
    </Switch>

);
export default Pages;
