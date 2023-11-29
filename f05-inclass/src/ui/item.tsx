type Props = {
  isPacked: boolean,
  name: string
}

// export default function Item({ isPacked, name }: Props) {
//   if (isPacked) {
//     return <li>{name}✔ </li>;
//   } else {
//     return <li>{name} </li>;
//   }
// }
export default function Item({ isPacked, name }: Props) {//拆多個function出黎
  const renderListItem = () => {
    if (isPacked) {
      return <li>{name} ✔ </li>
    } else {
      return <li>{name}</li>
    }
  }
  return (
    // <>
    //   {
        renderListItem() //call method,先行到上面if-else
    //   }
    // </>
  );
}