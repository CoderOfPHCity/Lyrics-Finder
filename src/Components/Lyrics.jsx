import React, {useContext} from 'react'
import LyricLists from './LyricLists';
import { Context} from './Context'


const Lyrics = () =>{
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map(item => (
            <LyricLists key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};


export default Lyrics;


