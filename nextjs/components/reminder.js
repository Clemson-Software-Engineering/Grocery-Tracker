export default function Reminder(props) {
  return (
    <article className={`message ${props.msgtype}`}>
      <div className="message-header">
        {props.item}
        <button className="delete"></button>
      </div>
      <div className="message-body">{props.msgbody}</div>
    </article>
  );
}
