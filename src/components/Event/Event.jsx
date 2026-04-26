import { IoLocationSharp, IoPersonSharp, IoCalendarSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { formatDate } from '../utils/formatdate';
import { formatHoursDistance } from "../utils/formatDistance";


function Event({ name, location, speaker, start, end }) {

  return (
    <li>
      <h2>{name}</h2>
      <p><IoLocationSharp />{location}</p>
      <p><IoPersonSharp />{speaker}</p>
      <p><IoCalendarSharp />{formatDate(start)}</p>
      <p><FaClock />{formatHoursDistance(start, end)}</p>
    </li>
  );
}

export default Event;
