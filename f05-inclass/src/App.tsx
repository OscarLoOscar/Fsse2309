import './App.css'
import PackingList from './PackingList';
import Avatar from './ui/Avatar'
import Profile from './ui/Profile';
import TodoList from './ui/TodoList'

function App() { //parent
  {/* Approach 2  */ }
  const h1Style = {
    color: "red",
    border: "1px black solid",
    borderRadius: "10px"
  };

  return (
    <>
      {/* export 左Profile.tsx,所以可以直接係App.tsx用 */}

      {/** child */}
      <Profile /> 
      
      <PackingList/>
      {/* Approach 1  */}
      <h1 style={{
        color: "red",
        border: "1px black solid",
        borderRadius: "10px"
      }}>Hello React ! </h1>
      <h1 style={h1Style}>HIHI</h1>
      {/* Approach 3 : new a .css file  */}

      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      <TodoList />
      <TodoList></TodoList>
      <Avatar />

    </>
  )
}

export default App
