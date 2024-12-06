import React from 'react';
import {useContent} from '../hooks';
import SelectionFilter from '../utils/selection-filter';
import BrowseContainer from '../Containers/browse';

export default function Browse(){
    const {series} = useContent('series');
    const {films} = useContent('films');

    const slides = SelectionFilter({series, films});


    return(
        <BrowseContainer slides={slides} series={series} films={films}/>
    );
}