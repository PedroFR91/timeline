import React from 'react';
import { useState } from 'react';
import { createElement } from 'react';
import Event from './Event';
import './Line.css';

function Line() {
  const [events, setEvents] = useState([]);

  const handleClick = (e) => {
    setEvents(events.concat(<Event key={events.length} />));
  };

  return (
    <ul className='line' onClick={handleClick}>
      {events}
    </ul>
  );
}

export default Line;
