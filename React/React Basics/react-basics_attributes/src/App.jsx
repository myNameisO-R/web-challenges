import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article_title">Hello World!</h2>
      <label htmlFor="label-input"> Explore the Article</label>
      <input id="label-input" placeholder="want to learn React" />
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        Learn more about React
      </a>
    </article>
  );
}
