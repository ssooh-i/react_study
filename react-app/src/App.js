import "./App.css";

function Header(props) {
  console.log("props:", props, ",title:", props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}
function Nav() {
  return (
    <nav>
      <li>
        <a href="/read/1">html</a>
      </li>
      <li>
        <a href="/read/2">css</a>
      </li>
      <li>
        <a href="/read/3">js</a>
      </li>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header title="생활코딩 REACT"></Header>
      <Nav></Nav>
      <Article title="welcome" body="hello,web~!"></Article>
    </div>
  );
}

export default App;
