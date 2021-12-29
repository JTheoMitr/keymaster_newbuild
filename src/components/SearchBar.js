import React, { useState } from 'react'
import ScaleCard from './ScaleCard'

const SearchBar = (props) => {

    const [name, setName] = useState("");

    const onChange = (event) => {
        setName(event.target.value);
      };
         
        const searchedScales = 

            // check for value(s) in search params, otherwise display all scales
            
            props.allScales.filter(scale => 

                name.length > 0 ?

                    name.toUpperCase().split('-').every(elem =>
                        
                        (scale.notes.toUpperCase().split('-').includes(elem)) || elem === "" ) :

                    !!scale.name)


            return(

                <div>
                    <input onChange={onChange} type="text" name="name" placeholder="Search Notes in Dash Format (A-B-C#-D etc)" value={name}></input>

                    {searchedScales.map(scale => 

                        <div key={scale.id * 100} >

                            <ScaleCard 
                                id={scale.id} 
                                key={scale.id} 
                                name={scale.name} 
                                notes={scale.notes} 
                                description={scale.description} 
                                allScales={props.allScales}
                            />
                            
                            <div key={scale.id * 10} className="parallax"></div>
                        
                        </div>)}

                </div>
            )

}

export default SearchBar