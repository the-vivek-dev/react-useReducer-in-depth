import React, { useState } from 'react';

const UserProfileFormUseState = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    setName('');
    setEmail('');
    setAge('');
    setPassword('');
    setConfirmPassword('');
  };
 
  console.log("use state component render")

  return (
    <div>
      <h1>User Profile Form (useState)</h1>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UserProfileFormUseState; 