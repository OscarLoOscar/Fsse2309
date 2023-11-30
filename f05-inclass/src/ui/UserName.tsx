// Rendering Lists example


export default function UserNAme() {
  type User = {
    name: string,
    isBlocked: boolean
  }
  const userList: User[] = [
    {
      name: "A",
      isBlocked: true
    },
    {
      name: "B",
      isBlocked: true
    },
    {
      name: "C",
      isBlocked: false
    },
    {
      name: "D",
      isBlocked: false
    },
    {
      name: "E",
      isBlocked: false
    }
  ]
  const userNameList = [
    "A", "B", "C", "D", "E"
  ]

  return (
    <>
      <ol>
        {
          userNameList.map((name, index) => {
            return <li key={index}>{name}</li> //{}內可以打JS，但只限一句expression -> no for loop , no if-else 
          })//map想做嘅野係令一個item行callback，return番黎既野砌一個新array，放番係<li>入面
          //for each無野retrun,行完就算
        }
      </ol>
    </>
  );
}
