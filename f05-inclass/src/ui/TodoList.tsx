export default function TodoList() {
  return (
    //html 直接轉做jsx
    //https://react.dev/learn/writing-markup-with-jsx
    //有開有close </div> , </> , </li> 
    <div> //root element
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}