import React, {useContext} from 'react'
import LyricLists from './LyricLists';
import { Context} from './Context'

import{ Droppable, DragDropContext  } from 'react-beautiful-dnd'


const Lyrics = () =>{
  const [state] = useContext(Context);
  const { track_list, heading } = state;




  if (track_list === undefined || track_list.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    const onDragEnd =(result) => {
      if(!result.destination) 
      return;
    }
    return (
      <>
        <DragDropContext onDragEnd={onDragEnd} >
        <Droppable droppableId="droppable">
        {(provided) => (

          <div{...provided.droppableProps}
          ref={provided.innerRef} className= "droppable">
          <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map((item, index) => (
            <LyricLists 
            key={item.track.track_id} 
            track={item.track} 
            index={index} />

           
          

          ))}
           {provided.placeholder}
        </div>
      
          </div>
          

        )}
        
          
        
        </Droppable>
        </DragDropContext>
      
      </>
    );
  }
};


export default Lyrics;


