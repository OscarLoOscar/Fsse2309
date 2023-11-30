// Conditional Rendering 2/4寫法

type Props = {
  isPacked: boolean,
  name: string
}

export default function Item({ isPacked, name }: Props) {
  if (isPacked) {
    return <li>{name}✔ </li>;
  } else {
    return <li>{name} </li>;
  }
}