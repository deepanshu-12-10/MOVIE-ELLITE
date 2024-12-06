import React, {useState, useEffect, useContext, createContext} from 'react';
import {
    Container, 
    Title, 
    Group, 
    Item, 
    Image, 
    Entities, 
    Meta, 
    Text, 
    Subtitle,
    Feature,
    Content,
    FeatureTitle,
    FeatureText,
    FeatureClose,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({children, ...restProps}){
    const[showFeature, setShowFeature] = useState(false);
    const[itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
} 

Card.Group =  function CardGroup({children, ...restProps}){
    return (
        <Group {...restProps}>{children}</Group>
    );
} 

Card.Title = function CardTitle({children, ...restProps}){
    return (
        <Title {...restProps}>{children}</Title>
    );
}

Card.Entities = function CardEntities({children, ...restProps}){
    return (
        <Entities {...restProps}>{children}</Entities>
    );
}

Card.Meta = function CardMeta({children, ...restProps}){
    return (
        <Meta {...restProps}>{children}</Meta>
    );
}

Card.Subtitle = function CardSubtitle({children, ...restProps}){
    return (
        <Subtitle {...restProps}>{children}</Subtitle>
    );
}

Card.Text = function CardText({children, ...restProps}){
    return (
        <Text {...restProps}>{children}</Text>
    );
}

Card.Item = function CardItem({item, children, ...restProps}){
    const{setItemFeature, setShowFeature} = useContext(FeatureContext);
    return (
        <Item onClick={()=>{
            setShowFeature(true);
            setItemFeature(item);
        }} {...restProps}>
            {children}
        </Item>
    );
}

Card.Feature = function CardFeature({children, category, ...restProps}){
    const{itemFeature, showFeature, setShowFeature} = useContext(FeatureContext);

    return showFeature? (
        <Feature src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={()=> setShowFeature(false)}>
                    <img src='/images/icons/close.png' alt="Close" />
                </FeatureClose>
                
                <FeatureText style={{fontWeight: "bold", fontSize: "28px", marginTop: "50px"}}>
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
            </Content>
            {children}
        </Feature>
    ): null;
}

Card.Image = function CardImage({children, ...restProps}){
    return (
        <Image {...restProps}>{children}</Image>
    );
}


