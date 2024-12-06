import React from 'react';
import {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Background, 
    Container, 
    Logo, 
    ButtonLink, 
    Group, 
    Profile, 
    Dropdown, 
    TextLink, 
    Image, 
    Text, 
    Feature, 
    Title, 
    Play, 
    Search,
    SearchIcon, 
    SearchInput,
} from './styles/header'

export default function Header({bg=true, children, ...restProps}) {
    return(
        bg? <Background {...restProps} >{children}</Background>:children
    );
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    );
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return(
        <Group {...restProps}>{children}</Group>
    );
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, children, ...restProps}){
    const [active, setactive] = useState(false);
    return(
        <Search {...restProps}>
            <SearchIcon onClick={ () => setactive((active)=> !active)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>

            <SearchInput 
            value={searchTerm}
            onChange={({target})=> setSearchTerm(target.value)}
            placeholder= "Search films and series"
            active={active}
            />
        </Search>
    );
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return(
        <Profile {...restProps}>{children}</Profile>
    );
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return(
        <Dropdown {...restProps}>{children}</Dropdown>
    );
} 

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return(
        <TextLink {...restProps}>{children}</TextLink>
    );
}

Header.Image = function HeaderImage({children, src, ...restProps}){
    return(
        <Image src={`/images/users/${src}.png`} {...restProps}/>
    );
}

Header.Text = function HeaderText({children, ...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    );
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return(
        <ButtonLink {...restProps}>{children}</ButtonLink>
    );
}

Header.Logo = function HeaderLogo({to, ...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>    
        </ReactRouterLink>
    );
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return(
        <Feature {...restProps}>{children}</Feature>
    );
}

Header.FeatureTitle = function HeaderFeatureTitle({children, ...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    );
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return(
        <Play {...restProps}>{children}</Play>
    );
}

