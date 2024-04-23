import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          <img
            src="https://miro.medium.com/v2/resize:fit:560/format:webp/1*xPjeXkXbzEPfRtZpY5DQAg.png"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>The Ultimate Github Collaboration Guide</h2>
          <p className="info">
            <a className="author">Monke</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            This is just one of many ways to collaborate on a project using
            GitHub.
          </p>
        </div>
      </div>

      <div className="post">
        <img
          src="https://miro.medium.com/v2/resize:fit:560/format:webp/1*xPjeXkXbzEPfRtZpY5DQAg.png"
          alt=""
        />
        <div className="texts">
          <h2>The Ultimate Github Collaboration Guide</h2>
          <p className="info">
            <a className="author">Monke</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            This is just one of many ways to collaborate on a project using
            GitHub.
          </p>
        </div>
      </div>

      <div className="post">
        <img
          src="https://miro.medium.com/v2/resize:fit:560/format:webp/1*xPjeXkXbzEPfRtZpY5DQAg.png"
          alt=""
        />
        <div className="texts">
          <h2>The Ultimate Github Collaboration Guide</h2>
          <p className="info">
            <a className="author">Monke</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            This is just one of many ways to collaborate on a project using
            GitHub.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
