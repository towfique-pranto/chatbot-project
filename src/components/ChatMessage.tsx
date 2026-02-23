import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import LoadingSpinner from "../assets/loading-spinner.gif";
import './ChatMessage.css'

type ChatMessageProps = { message: string, sender: string, time: number }
export function ChatMessage({ message, sender, time }: ChatMessageProps) {

  return (
    <div className={sender === "user" ? "user-message" : "robot-message"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message === 'isLoadingGif' ? <img className="loadingImg" src={LoadingSpinner} /> : message} <p className="chat-message-time">{dayjs(time).format('h:mma')}</p></div>

      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}