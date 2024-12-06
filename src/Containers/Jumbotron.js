import React from 'react';
import {Jumbotron} from '../Components' ;
import JumboData from '../fixtures/jumbo';

export function JumbotronContainer() {
return (
    <Jumbotron.Container>
        {JumboData.map((item)=>{
        return(<Jumbotron key = {item.id} direction = {item.direction}>
        <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
        </Jumbotron.Pane>
            
        <Jumbotron.Image src = {item.image} alt= {item.alt} />
        </Jumbotron>
    );})}
    </Jumbotron.Container>
);
}

