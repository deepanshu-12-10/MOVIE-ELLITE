import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div` 
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
    @media (max-width: 730px) {
        background: none;
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    a {
        display: flex;
    }
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
`;

export const SearchIcon = styled.div`
    margin-right: 10px;
    border: 0;
    align-item: center;
    justify-contents: center;
    cursor: pointer;
    img{
        width: 30px;
    }
`;

export const SearchInput = styled.input`
    background: #44444459;
    color: white;
    transition: width 0.5s;
    border: none;
    border-radius: 10px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const TextLink = styled.div`
    font-size: 24px;
    color: white;
    font-weight: ${({ active }) => (active === true ? '1000' : 'normal')};
    margin-right: 20px;

    &:hover{
        font-weight: bold;
    }

`;

export const Image = styled.img`
    src: url(${({src})=> src});
    height: 50px;
    width: 50px;
    cursor: pointer;
    border: 0;
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 50px;
    right: 10px;
    z-index: 101;

    ${Group}{
        ${Image} {
            cursor: default;
            margin-right: 10px;
        }
        margin-bottom: 10px;

        &:last-of-type{
            cursor: pointer;
            ${TextLink}{
                font-size: 18px;
                align-items: left;
            }
            margin-bottom: 0;
            align-items: left;
            padding: 0;
            margin;right: 0;
        }
    }
`;

export const Profile = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
position: relative;

    &:hover > ${Dropdown}{
        display: flex;
        flex-direction: column;
    }
`;

export const Text = styled.div`
    font-size: 16px;
    color: white;
    line-height: normal;

    @media (max-width: 1000px){
        font-size: 16px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 0 200px 50px;

    @media (max-width: 720px){
        display: none;
    }

    ${Text}{
        max-width: 50%;
        margin-bottom: 20px;
    }
`;

export const Title = styled.h1`
    color: white;
    margin:20px 0 10px 0;
    font-size: 32px;

    @media (max-width: 1000px){
        font-size: 32px;
    }
`;

export const Play = styled.button`
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 24px;
    border: none;
    transition: background 0.5s ease;
    border-radius: 2px;
    cursor: pointer;

    &:hover{
        color: white;
        background: #ff1e1e;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    color: white;
    border: 0;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 3px;
    padding: 7px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
    background: #f40612;
    }
`;

export const Logo = styled.img`
    height: 75px;
    width: 134px;
    margin-right: 40px;

    @media (min-width: 1449px) {
    height: 90px;
    width: 167px;
}
`;
