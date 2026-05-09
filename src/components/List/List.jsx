import { EventList } from './List.module.js';
import Event from "../Event/Event";

function List ({events}) {
    return (
        <EventList>
            {events.map(({name, location, speaker, time: {start, end}})=> (
                <Event key={name} name={name} location={location} speaker={speaker} start={start} end={end}/>
            ))}
        </EventList>
    )
}

export default List;