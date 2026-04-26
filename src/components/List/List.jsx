import Event from "../Event/Event"

function List ({events}) {
    return (
        <ul>{events.map(({name, location, speaker, time: {start, end}})=> {
            return (
                <Event key={name} location={location} speaker={speaker} start={start} end={end}/>
                // <li key={name}>
                //     <h2>{name}</h2>
                //     <p>{location}</p>
                //     <p>{speaker}</p>
                //     <p>{type}</p>
                //     <p>{start}</p>
                //     <p>{end}</p>
                // </li>
            )
        })}</ul>
    )
}

export default List