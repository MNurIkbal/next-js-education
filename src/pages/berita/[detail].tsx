import { useRouter } from "next/router";

export default function Detail() {
  const { query } = useRouter();
  return (
    <>
      <h1 className="main">Halaman detail berita</h1>
      <p>Data : { query.detail }</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi nihil rem voluptas alias aut enim, est sit cupiditate neque doloribus tempore magni tenetur nobis unde dolores deserunt recusandae numquam!</p>
    </>
  );
}
