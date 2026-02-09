import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile-1.jpg'
import LoadingSpinner from "../assets/loading-spinner.gif";
import './ChatMessage.css'


export function ChatMessage({ message, sender, time}) {

  return (
    <div className={sender === "user" ? "user-message" : "robot-message"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message==='isLoadingGif'?<img className="loadingImg" src={LoadingSpinner} />:message} <p className="chat-message-time">{dayjs(time).format('h:mma')}</p></div>
      
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}