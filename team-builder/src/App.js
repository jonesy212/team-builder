import React, { useState } from 'react';

// import TeamMembers from './TeamMembers'
// import MemberList from './MemberList'
// import Member from './Member'
import './App.css';

function App() {
const [member, setTeamMember] = useState({username: '', email: '', role: ''});

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
          Member name: 
          <input 
            type= 'text' 
            name= 'username'
            value= {member.username}
            onChange = {event => handleChange(event)}
          />
        </label>
          
        <label>
          Email: 
          <input 
            type= 'text'  
            email= 'email'
            value= {member.email}
            onChange= {event => handleChange(event)}
          />
        </label>
        <label>
          <input
          type = 'text'
          role= 'role'
          value= {member.role}
          onChange = {event => handleChange(event)}
          />
        </label>
        <button>Submit</button>
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
