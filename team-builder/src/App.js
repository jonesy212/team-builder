import React, { useState } from 'react';
import TeamData from './TeamData'
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
      console.log(member.username)
      console.log(member.password)
      console.log(member.role)
}

const TeamData()

  return (
    <div className = 'App'>
    {console.log (member)}
      <form onChange = {event => handleSubmit(event)}>
        <fieldset>
          <label>
            Member Name: 
            <input 
              type= 'text' 
              placeholder ="enter member name"
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
            Role:
            <input
            type = 'text'
            role= 'role'
            value= {member.role}
            onChange = {event => handleChange(event)}
            />
          </label>
          <button>Submit</button>
        </fieldset>
      </form>

    </div>

  );
};


export default App;
