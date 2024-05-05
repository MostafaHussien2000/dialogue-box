function ChatContact({
  contactName,
  contactImage,
  lastMessageText,
  lastMessageTimeSpan,
}) {
  const handleTimeSpan = (timeInMinutes) => {
    return timeInMinutes > 60
      ? `${Math.floor(timeInMinutes / 60)}h`
      : `${Math.floor(timeInMinutes)}m`;
  };
  return (
    <div className="chat-contact">
      <div className="chat-contact__image">
        <img src={contactImage} alt={`${contactName} profile picture`} />
      </div>
      <div className="chat-contact__info">
        <span className="chat-contact__info__time">
          {handleTimeSpan(lastMessageTimeSpan)}
        </span>
        <h3 className="chat-contact__info__name">
          <span className="chat-contact__info__name">{contactName}</span>
        </h3>
        <p className="chat-contact__info__last-message">{lastMessageText}</p>
      </div>
    </div>
  );
}

export default ChatContact;
