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
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">

              </div>
              <div className="message">
                Hi there!
              </div>
            </div>
            </div>  

          <div className="chat-message aibot">
            <div className="chat-message-center">
              <div className="avatar aibot">

              </div>
              <div className="message">
                I'm your AI!
              </div>
            </div>
          </div>  

        </div>

        <div className="chat-input-holder">
        <textarea
        rows="1"
        className="chat-input-text-area"></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
