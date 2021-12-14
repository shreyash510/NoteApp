import './App.css';
import NoteApp from './NoteApp';
import '../src/style/card.css';
import CardShow from './CardShow';
import { useState } from 'react';

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (txt) => {
    setAddItem((preV) => {
      return [
        ...preV, txt
      ];
    });
  }
  return (
    <>
      <NoteApp
        passNote={addNote}
      /><div className="notes">
        {
          addItem.map((val, index) => {
            return <CardShow
              key={index}
              id={index}
              title={val.title}
              content={val.desc}
            />

          })

        }
      </div>

    </>
  )
}

export default App;
