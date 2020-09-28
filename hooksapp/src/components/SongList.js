import React, {useState} from 'react';
import { v1 as uuidv1 } from 'uuid';

const SongList = () => {
    //defining a property of state in useState function!
    const [songs, setSongs] = useState([ //data itself and function to change the data
        { title: 'slow down', id: 1 },
        { title: 'hit different', id: 2 },
        { title: 'think about you', id: 3}
    ]);
    const addSong = () => {
        setSongs([...songs, { title: 'new song', id: uuidv1() }]); //uuid creates a new unique id
    }
    return ( 
        <div className='song-list'>
            <ul>
            {songs.map( song => {
                return (<li key ={song.id}>{song.title}</li>);    
            })}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
     );
}
 
export default SongList;