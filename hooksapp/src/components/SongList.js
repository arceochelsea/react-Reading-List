import React, {useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    //defining a property of state in useState function
    const [songs, setSongs] = useState([ //data itself and function to change the data
        { title: 'slow down', id: 1 },
        { title: 'hit different', id: 2 },
        { title: 'think about you', id: 3}
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuidv1() }]); //uuid creates a new unique id
    }
    useEffect(() => {  //runs everytime the component renders or the data updates
        console.log('useEffect hook ran', songs);    
    }, [songs])
    useEffect(() => {  //runs everytime the component renders or the data updates
        console.log('useEffect hook ran', age);    
    }, [age])
    return ( 
        <div className='song-list'>
            <ul>
            {songs.map( song => {
                return (<li key ={song.id}>{song.title}</li>);    
            })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;