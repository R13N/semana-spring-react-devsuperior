import NotificationIcon from "../../assets/img/notification-icon.svg";

import './styles.css';

export function NotificationButton() {
  return(
    <div className="dsmeta-red-btn">
      <img src={NotificationIcon} alt="" />
    </div>
  )
}