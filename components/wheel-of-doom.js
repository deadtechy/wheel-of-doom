import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

import deadTechy from '../public/dead-techy.png';
import people from '../data/people.json';

export const WheelOfDoom = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const spin = () => {
    if (selectedPerson === null) {
      setSelectedPerson(Math.floor(Math.random() * people.length));
    } else {
      setSelectedPerson(null, spin);
    }
  };

  return (
    <>
      {selectedPerson && (
        <Heading>
          <h1>{selectedPerson.name}</h1>
        </Heading>
      )}
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
            '--nb-item': people.length,
            '--selected-item': selectedPerson,
          }}
          onClick={spin}
        >
          {people.map((person, index) => (
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
    </>
  );
};
