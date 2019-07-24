import React, { useState } from 'react';

// import TeamMembers from './TeamMembers'
// import MemberList from './MemberList'
// import Member from './Member'
import './App.css';

function App() {
const [member, setTeamMember] = useState({username: '', password: ''});

const handleChange = event => {
  setTeamMember({...member, [event.target.value]: event.target.value });
};

const handleSubmit = event =>  { 
      event.prevenDefault();
      console.log(member)
}
// creating team card based off yesterdays assignment
// const addToTeamMembers = team => {
//   setTeamMember ([...member, team]);
// }

  return (
    <div className = 'App'>
    {console.log (member)}
      <form onChange = {event => handleSubmit(event)}>
        <label>
          Username: 
          <input 
            type= 'text' 
            name= 'username'
            value= {member.username}
            onChange = {event => handleChange(event)}
          />
        </label>
          
        <label>
          Password: 
          <input 
            type= 'text'  
            password = 'password'
            value= {member.password}
            onChange= {event => handleChange(event)}
          />
         
        </label>
      </form>

    </div>
        // <div className='MemberCard'>
        //   <TeamMembers list = {teamMember} />
        //   <Route exact path ='/' component = {MemberList}/>
        //   <Route path = '/user/:id' render ={ (props) => {
        //   return (<Member {...props} />)
        //     }} />
        // </div>
  );
};


export default App;
