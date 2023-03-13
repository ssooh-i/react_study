import "./App.css";
import { useState } from "react";

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); //이벤트객체의 기본행동을 실행안함
            props.onChangeMode(); //밑에 선언된 이벤트 함수를 불러옴
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id} //onChangeMode안에 id값을 넘겨줘야해서 선언해둠
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id)); //이벤트객체가 가르키는 타겟 안에 id
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault(); //페이지 리로드 X
          //타이틀과 바디를 알아와야함
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        {/* form태그는 submit을 하면 데이터가 보내지면서 리로드가 됨
            방지하기 위해서 onSubmit안에 이벤트 객체를 이용한다.
        */}
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="CREATE!"></input>
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="UPDATE"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  // const _mode = useState("welcome"); //상태, 초기값
  // //useState는 배열로 구성되어있고 0번째 원소는 상태의 값을 읽을 때 쓰는 데이터
  // //1번째 원소는 그 상태에 값을 변경할 때 사용하는 함수가 들어있다.
  // const mode = _mode[0]; //상태값을 읽을 수 있다.
  // const setMode = _mode[1];//상태값을 변경할 수 있다.

  //위에꺼는 복잡하니까 보통 아래 코드를 사용한다.
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4); //다음 원소의 아이디 값을 관리
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "js", body: "javascript is .." },
  ]);

  let content = null;
  let contextControl = null;

  if (mode === "welcome") {
    content = <Article title="welcome" body="hello,web~!"></Article>;
  } else if (mode === "read") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <li>
        <a
          href={`/update/` + id}
          onClick={(event) => {
            event.preventDefault();
            setMode("update");
          }}
        >
          UPDATE
        </a>
      </li>
    );
  } else if (mode === "create") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          // newTopic이라는 객체를 만드는데,
          //앞에 title은 newTopic 객체의 property(데이터멤버와 메소드간 가능의 중간인 클래스 멤버)
          //뒤에 title은 파라미터로 부터 온 이름임, 헷갈리지말기
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics]; //topics 배열 복사해서 newTopic에 데이터 넣기
          newTopics.push(newTopic); //새로운 newTop을 newTopics에 넣기
          setTopics(newTopics); //값 바꾸기
          setMode("read");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "update") {
    content = <Update onUpdate={(title, body)}></Update>;
  }

  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("welcome");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("read");
          setId(_id);
        }}
      ></Nav>
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("create");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
