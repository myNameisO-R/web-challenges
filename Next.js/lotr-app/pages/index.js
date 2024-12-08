import Link from "next/link";

import { introduction } from "../resources/lib/data.js";

export default function Navigation() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <link href="/Volumes/the-fellowship-of-the-ring">
            The Fellowship Of Thhe Ring
          </link>
        </li>
        <li>
          <link href="/Volumes/the-two-towers">The two towers</link>
        </li>
        <li>
          <link href="/Volumes/the-return-of-the-king">
            The return of the king
          </link>
        </li>
      </ul>
    </div>
  );
}
