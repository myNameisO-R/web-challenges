import Link from "next/link";
import Head from "next/head";

import { introduction } from "../resources/lib/data.js";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
    </div>
  );
}
