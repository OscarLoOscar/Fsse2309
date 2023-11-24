// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [todos,setTodos]  = useState([
{  name :   "leetcode", done : true},
{  name :  "React",done:true}   ,
{  name :"springboot",done:true},
{  name :   "Reply a comment",done:true}
  ]);
  //用state保存當前版本
  const[todo,setTodo] = useState('');
  // 每個event都const 做常數
  const handleClick =() => {
    // const todo= "Like this video";
    // todo is array , 用react 入面 useState
    //直接push係變量修改
    //要用useState達成
    if(!todo.trim()){ // if is empty , dont input
      return;
    }
    const newTodos = todos.concat([{name : todo, done:false }]);
    setTodos(newTodos);
    setTodo('');
  };
  const handleChange = (e) =>{
    const todo = e.target.value;
    setTodo(todo);
  //  console.log(e.target.value);
  //  console.log({e});
    
  }
const toggleDone = (e) =>{
//邊一個比人click？
//click完狀態？
const index = 0;
const newTodos = todos.map((todo,i)=>{
  if(i!==0)
  return todo;

return { name : todo.name , done : !todo.done};
});
setTodos(newTodos);
};

   return (
    <div className="App"> 
<h1>My Todo List</h1>
<div>
  <input type="text" onChange={handleChange} value={todo}/>
  <button onClick={handleClick}>Add</button>
</div> 
<ul>
  {/* <li>做leetcode</li>
  <li>溫React</li>
  <li>寫springboot</li>  */
  /* Array of String => Array of List <li> */}
  {/* i變量，當前todo 既變量 */}
  
{ todos.map((todo , i) => {
  // ADd a unique key prop for each list item
return <li><input 
type="checkbox" 
onClick={toggleDone}
checked={todo.done ? "checked" :""}
></input>
{todo.name}
</li>;
 })}
</ul> 
</div>
    );
}

export default App;