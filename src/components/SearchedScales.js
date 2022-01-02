const SearchedScales = (scales, search) => {

        // check for value(s) in search params, otherwise display all scales
            
        return scales.filter(scale => 

            search.length > 0 ?
                search.toUpperCase().split('-').every(elem =>
                    (scale.notes.toUpperCase().split('-').includes(elem)) || elem === "" ) :

            !!scale.name
        )
}

export default SearchedScales