import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className="left-sidemenu">
        <div className="side-menu-button">
        <span>+</span>  New chat
        </div> 
      </aside>
      <section className="chatbox">
        <div className="chatbox-input">
        <textarea
        className="chat-input-text-area"
        placeholder="Message here"></textarea>

        </div>
      </section>
    </div>
  );
}

export default App;
