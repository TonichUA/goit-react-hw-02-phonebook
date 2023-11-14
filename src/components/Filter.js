import React from 'react';

export const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Search contacts..."
      />
    </div>
  );
};
