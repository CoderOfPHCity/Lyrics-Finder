import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context} from './Context'

const LyricLists = props => {
  const { track, index } = props;
  const [state, setState] = useContext(Context);
  const { track_list } = state;



  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

 

  const handleSort = () =>{
    let songs = [...track_list]

    const dragcontent = songs.splice(dragItem.current, 1)

    songs.splice(dragOverItem.current, 0, dragcontent)

    dragItem.current = null
    dragOverItem.current = null

    setState(songs)
  }


  return (  
      <div className="col-md-6" draggable 
      onDragStart={(e) =>dragItem.current=index}
      onDragEnter={(e) =>dragOverItem.current=index}
      onDragEnd={handleSort}
      
      >
      <div className="card mb-4 shadow-sm">
        <div className="card-body" >
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`/lyric/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
                      
    
  );
};



export default LyricLists;


