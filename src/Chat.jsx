import React, { useState } from "react";
import "./style/Chat.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronLeft, faChevronRight, faTrash, faMessage, faPaperPlane, faEllipsis, faBolt, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

function Chat() {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
    const [conversations, setConversations] = useState([
        { id: 1, title: "This is a conversation title", date: "Today" },
        { id: 2, title: "This is another conversation title", date: "Yesterday" },
        { id: 3, title: "This is a very super long conversation title that doesn't fit", date: "Yesterday" },
        { id: 4, title: "This is yet another conversation title", date: "Previous 7 days" },
    ]);

    const toggleSidebar = () => {
        setIsSidebarHidden((prev) => !prev);
    };

    const deleteConversation = (id) => {
        setConversations((prev) => prev.filter((conversation) => conversation.id !== id));
    };

    return (
        <div className="main-div">
            {isSidebarHidden && (
                <button className="show-sidebar" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
            <nav id="sidebar" className={isSidebarHidden ? "hidden" : ""}>
                <div className="float-top">
                    <div className="sidebar-controls">
                        <button className="new-chat">
                            <FontAwesomeIcon icon={faPlus} /> New chat
                        </button>
                        {!isSidebarHidden && (
                            <button className="hide-sidebar" onClick={toggleSidebar}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        )}
                    </div>
                    <ul className="conversations">
                        {conversations.map((conversation, index) => (
                            <React.Fragment key={conversation.id}>
                                {(index === 0 || conversations[index - 1].date !== conversation.date) && (
                                    <li className="grouping">{conversation.date}</li>
                                )}
                                <li>
                                    <button className="conversation-button">
                                        <FontAwesomeIcon icon={faMessage} /> {conversation.title}
                                    </button>
                                    <div className="edit-buttons">
                                        <button onClick={() => deleteConversation(conversation.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className="user-menu">
                    <button className="user">
                        <i className="user-icon">U</i>
                        Username
                        <FontAwesomeIcon icon={faEllipsis} className="dots" />
                    </button>
                </div>
            </nav>
            <main>
                <div className="view new-chat-view">
                    <div className="model-selector">
                        <button className="gpt-3 selected">
                            <FontAwesomeIcon icon={faBolt} /> GPT-3.5
                            <div className="model-info">
                                <div className="model-info-box">
                                    <p>Our fastest model, great for most every day tasks.</p>
                                    <p className="secondary">Available to Free and Plus users</p>
                                </div>
                            </div>
                        </button>
                        <button className="gpt-4">
                            <FontAwesomeIcon icon={faWandMagicSparkles} /> GPT-4
                            <div className="model-info">
                                <div className="model-info-box">
                                    <p>Our most capable model, great for creative stuff.</p>
                                    <p className="secondary">Available for Plus users.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="logo-title">
                        LUNA
                    </div>
                </div>
                <div className="view conversation-view">
                    <div className="model-name">
                        <FontAwesomeIcon icon={faBolt} /> Default (GPT-3.5)
                    </div>
                    <div className="user message">
                        <div className="identity">
                            <i className="user-icon">U</i>
                        </div>
                        <div className="content">
                            <p>Help me answer the questions</p>
                        </div>
                    </div>
                    <div className="assistant message">
                        <div className="identity">
                            <i className="gpt user-icon">G</i>
                        </div>
                        <div className="content">
                            <p>Sure, Please share the questions, and I'll assist you in answering them effectively.</p>
                        </div>
                    </div>
                    <div className="user message">
                        <div className="identity">
                            <i className="user-icon">U</i>
                        </div>
                        <div className="content">
                            <p>Suggest a good college in Chennai with good placement records</p>
                        </div>
                    </div>
                    <div className="assistant message">
                        <div className="identity">
                            <i className="gpt user-icon">L</i>
                        </div>
                        <div className="content">
                            <p>I Suggest you must join Chennai Instiute of Technology, which has a higHest salary package of 51LPA at Microsoft.</p>
                        </div>
                    </div>
                    <div className="user message">
                        <div className="identity">
                            <i className="user-icon">U</i>
                        </div>
                        <div className="content">
                            <p>Who should i first vist in Chennai Instiute of Technology?</p>
                        </div>
                    </div>
                    <div className="assistant message">
                        <div className="identity">
                            <i className="gpt user-icon">L</i>
                        </div>
                        <div className="content">
                            <p>I hope you get a chance to meet Athish Raswanth the world's best "Olu Developer", and it's not easy to see him. His net worth is expected to be 1,00,000 Olu's.</p>
                        </div>
                    </div>
                    <div className="user message">
                        <div className="identity">
                            <i className="user-icon">U</i>
                        </div>
                        <div className="content">
                            <p>Who is tharkuri of Chennai Instiute of Technology?</p>
                        </div>
                    </div>
                    <div className="assistant message">
                        <div className="identity">
                            <i className="gpt user-icon">L</i>
                        </div>
                        <div className="content">
                            <p>Tharun Kumar P of CSBS department, not only CIT he is the Tharkuri of the World!</p>
                        </div>
                    </div>
                        <div className="user message">
                        <div className="identity">
                            <i className="user-icon">U</i>
                        </div>
                        <div className="content">
                            <p>What do you know about Giridhar?</p>
                        </div>
                    </div>
                    <div className="assistant message">
                        <div className="identity">
                            <i className="gpt user-icon">L</i>
                        </div>
                        <div className="content">
                            <p>Giridhar from Chennai Instiute of Technology is described by the term "Pulthi" for his best learning skills.</p>
                        </div>
                    </div>
                </div>
                <div id="message-form">
                    <div className="message-wrapper">
                        <textarea id="message" rows="1" placeholder="Send a message"></textarea>
                        <button className="send-button">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Chat;