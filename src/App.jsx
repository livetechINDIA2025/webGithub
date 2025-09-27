import { useState } from "react";
export default function App() {
  const [person, setPerson] = useState({
    username: 'john',
    email: "john@gmail.com"
  })
  function handleUsername() {
    console.log('Hello World Button Has been clicked')
  }
  return (
    <>
      <h1>App Component</h1>
      <h2>New Line have been made using github</h2>
      <p>This is a Sample Sentence</p>
      <h2>Person Name: {person?.username}</h2>
      <h2>Person Email: {person?.email}</h2>
      <button onClick={handleUsername}>Update username</button>
    </>
  )
}
