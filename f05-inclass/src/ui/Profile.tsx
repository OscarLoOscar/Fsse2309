import Avatar2 from "./Avatar2"

function Profile() { //有export,其他人先可以拎黎用，似public
  return (//所有jsx 比較return to包住
    <>
      <Avatar2
        person={{ name: "Lin lanying", imageId: "1bX5QH6" }}
        size={100}
      />
      {/* close tag對番open tag 易對位 */}
      <Avatar2
        person={{ name: "Lin lanying", imageId: "1bX5QH6" }}
        size={200}
      />
      <Avatar2
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar2
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <Avatar2
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />    </>
  );
}

export default Profile;