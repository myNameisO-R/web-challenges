import Link from "next/link";
import { introduction, volumes } from "../../resources/lib/data.js";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  function handleRandomRedirect() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomvolume = volumes[randomIndex];
    // add code to route to this movie
    router.push(`/volumes/${randomvolume.slug}`);
  }
  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volumes.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomRedirect}>Suprise me!</button>
    </>
  );
}
