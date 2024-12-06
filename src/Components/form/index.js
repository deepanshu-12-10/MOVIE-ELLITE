import React from 'react';
import{Base, Container, Error, Title, Link,  Text, Textsmall, Input, Submit} from './styles/form';

export default function Form({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    );
}

Form.Base = function FormBase({children, ...restProps}){
    return(
        <Base {...restProps}>{children}</Base>
    );
}

Form.Error = function FormError({children, ...restProps}){
    return(
        <Error {...restProps}>{children}</Error>
    );
}

Form.Title = function FormTitle({children, ...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    );
}

Form.Link = function FormLink({children, ...restProps}){
    return(
        <Link {...restProps}>{children}</Link>
    );
}

Form.Text = function FormText({children, ...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    );
}

Form.Textsmall = function FormTextsmall({children, ...restProps}){
    return(
        <Textsmall {...restProps}>{children}</Textsmall>
    );
}

Form.Input = function FormInput({children, ...restProps}){
    return(
        <Input {...restProps}>{children}</Input>
    );
}

Form.Submit = function FormSubmit({children, ...restProps}){
    return(
        <Submit {...restProps}>{children}</Submit>
    );
}