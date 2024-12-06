import React from 'react';
import {Container, Input, Button, Text, Title} from './styles/opt-form'

export default function Optform({children, ...restProps}){
    return(
        <Container {...restProps}>
                {children}
        </Container>
    );
}

/*Optform.Title = function OptformTitle({children, ...restProps}){
    return(
        <Title {...restProps}>
            {children}
        </Title>
    );
}*/

Optform.Input = function OptformInput({children, ...restProps}){
    return(
        <Input {...restProps}>
            {children}
        </Input>
    );
}

Optform.Text = function OptformText({children, ...restProps}){
    return(
        <Text {...restProps}>
            {children}
        </Text>
    );
}

Optform.Button = function OptformButton({children, ...restProps}){
    return (
        <Button {...restProps}>
            {children}
            <img src ="\images\icons\chevron-right.png" />
        </Button>
    );
}