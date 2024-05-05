/* Import Images
================ */
import logo from "../logo.png";

/* Import React Icons
===================== */
import { FiSearch } from "react-icons/fi";

/* Import React Components
========================== */
import ChatContact from "../components/ChatContact";

function ChatPage() {
  return (
    <main className="chat-page">
      <nav className="chat-page__side-nav">
        <img
          src={logo}
          alt="Dialogue Box logo"
          className="chat-page__side-nav__logo"
        />
      </nav>
      <aside className="chat-page__contacts">
        <div className="chat-page__contacts__search">
          <FiSearch className="chat-page__contacts__search__icon" />
          <input
            type="text"
            className="chat-page__contacts__search__input"
            name="search-input"
            placeholder="Search"
          />
        </div>
        <div className="chat-page__contacts__list">
          <ChatContact
            contactName={"John Doe"}
            contactImage={logo}
            lastMessageText={"How is it going ?"}
            lastMessageTimeSpan={128}
          />
        </div>
      </aside>
      <section className="chat-page__chat-box"></section>
    </main>
  );
}

export default ChatPage;
