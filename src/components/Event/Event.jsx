import { IoLocationSharp, IoPersonSharp, IoCalendarSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { formatDate } from '../utils/formatdate'; 
import { formatHoursDistance } from "../utils/formatDistance";
import { Item, Name, Info } from './Event.module.js';

function Event({ name, location, speaker, start, end }) {
  return (
    <Item>
      <Name>{name}</Name>
      <Info><IoLocationSharp />{location}</Info>
      <Info><IoPersonSharp />{speaker}</Info>
      <Info><IoCalendarSharp />{formatDate(start)}</Info>
      <Info><FaClock />{formatHoursDistance(start, end)}</Info>
    </Item>
  );
}

export default Event;