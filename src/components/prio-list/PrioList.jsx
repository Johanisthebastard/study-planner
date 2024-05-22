import React, { useState } from 'react';
import PrioItem from "./PrioItem";
import { useStore } from '../../data/store.js';

const PrioList = () => {
  const todos = useStore((state) => state.todos);
  const [searchTerm, setSearchTerm] = useState('');

 
  const filteredItems = todos.filter((t) => !t.done && t.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="prio-list">
      <h2> Vad ska jag göra nu? </h2>
      <div className="list-container">
        <input
          className="search-input"
          type="search"
          placeholder="Filtrera uppgifter"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="prio-items">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <PrioItem key={item.id} item={item} num={index + 1} />
            ))
          ) : (
            <p>Inga matchande uppgifter</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrioList;
