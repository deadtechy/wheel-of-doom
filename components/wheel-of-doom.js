import Image from 'next/image';
import { useState } from 'react';

import people from '../data/people.json';
import deadTechy from '../public/dead-techy.png';

export const WheelOfDoom = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const enabledPeople = people.filter(({ enabled }) => !!enabled);
  // TODO: Shuffle array so it's not alphabetical?

  const spin = () => {
    if (selectedPerson === null) {
      setSelectedPerson(Math.floor(Math.random() * enabledPeople.length));
    } else {
      setSelectedPerson(null, spin);
    }
  };

  return (
    <div className="wheel-container">
      <div className="logo">
        <Image
          alt="DeadTechy Logo"
          src={deadTechy}
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={`wheel ${selectedPerson !== null ? 'spinning' : ''}`}
        style={{
          '--nb-item': enabledPeople.length,
          '--selected-item': selectedPerson,
        }}
        onClick={spin}
      >
        {enabledPeople.map((person, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ '--item-nb': index }}
          >
            <h1>{person.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
