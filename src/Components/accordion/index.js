import React, {useState, useContext, createContext} from 'react';
import {Container, Inner, Title, Frame, Item, Header, Body} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({children, ...restProps})
{
    return(
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggleshow, SetToggleShow] = useState(false);
    return(
        <ToggleContext.Provider value={{toggleshow, SetToggleShow}}>
            <Item {...restProps}>
                {children}
            </Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const {toggleshow, SetToggleShow} = useContext(ToggleContext);

    return(
        <Header onClick={()=> {
            return SetToggleShow(!toggleshow)}} {...restProps}>
                
            {children}
            
            {toggleshow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
    ) : (
        <img src="/images/icons/add.png" alt="Open" />
    )}
        </Header>
    );
};

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {toggleshow} = useContext(ToggleContext);

        return (
            <Body className={toggleshow ? 'open' : 'closed'} {...restProps}>
            <span>{children}</span>
            </Body>
        );
}
