import React, {useState, useEffect} from 'react';

const Member = (props) => {
    console.log("props", props)
    const[member, setMember] = useState();
    const id = props.match.params.id;

const saveMember = () => {
    const addToMemberList = props.addToMemberList;
    addToMemberList([member])
}

if (!member) {
    return <div>Movie information loading...</div>;
}

const {name, email, role} = member;
    return (
        <div className= 'member-wrapper'>
            <div className= 'member-card'>
            <h2>{name}</h2>
            <div className= 'member-username'>
                Member: {name}
            </div>
            <div className= 'email'>
                Email: {email}
            </div>
            <div className= 'role'>
                role: {role}
            </div>
            </div> 
        </div>
    );
}
export default Member;