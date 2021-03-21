import React from "react";
import Event from "./Event";
import emojipedia from "./emojipedia";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(x =>
      <Event
        key={x.id}
        emoji={x.emoji}
        name={x.name}
        desc={x.meaning}
      />
    )}

      </dl>
    </div>
  );
}

export default App;
