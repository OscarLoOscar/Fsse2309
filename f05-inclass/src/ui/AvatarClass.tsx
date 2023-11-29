import React from "react"

type Props = {
  person: {
    name: string,
    imageId: string
  },
  size?: number
}

export default class AvatarClass extends React.Component<Props>{// 後面比state type
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        {
          <img
            className="avatar"
            src={"https://i.imgur.com/${this.props.person.imageID}.jpg"}
            alt={this.props.person.name}
            width={this.props.size}
            height={this.props.size}
          />

        }
      </>);
  }
} 