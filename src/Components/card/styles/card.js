import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

    &:last-of-type{
        margin-bottom: 0;
    }
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Title = styled.h2`
    color: #e5e5e5;
    margin: 0 56px 0 56px;
    font-weight: bold;
`;



export const Entities = styled.div`
    display: flex;
    flex-direction: row;

    &:last-of-type{
        margin-bottom: 20px;
    }
`;

export const Meta = styled.div`
display: none;
position: absolute;
bottom: 0;
padding: 10px;
background-color: rgba(0, 0, 0, 0.5);
`

export const Text = styled.div`
    color: white;
    font-size: 14px;
`;

export const Subtitle = styled.div`
    color: white;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.5s;
    border: none;
    border-radius: 10px;

    &:hover{
        transform: scale(1.1);
        z-index: 99;
    }


    @media (min-width: 1200px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
            display: block;
            z-index: 100;
        }

    &:first-of-type{
        margin-left: 56px;
        
        @media (max-width: 1000px){
            margin-left: 30px;
        }
    }

    &:last-of-type{
        margin-right: 56px;
        
        @media (max-width: 1000px){
            margin-right: 30px;
        }
    }
`;

export const Image = styled.img`
    border: o;
    width: 100%;
    max-width: 350px;
    cursor: pointer;
`;
export const FeatureTitle = styled(Title)`
    font-size: 56px;
    margin-left: 0;
`;

export const FeatureText = styled.div`
    margin-left: 0;
    margin-top: 20px;
    font-size: 21px;
    color: white;
`;
export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({src})=>src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
    position: relative;
    height: 360px;
    background-color: black;
    margin: 0 50px 0 30px;

    @media (max-width: 1000px){
        height: auto;
        background-size: contain;

        ${FeatureTitle} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
            
          }
          ${FeatureText} {
            font-size: 14px;
            
          }
    }

`;

export const Content = styled.div`
    margin: 20px;
    line-height: normal;
    max-width: 50%;

    @media (max-width: 750px){
        margin: 30px;
        max-width: none;
    }
`;



export const FeatureClose = styled.div`
    color: whiite;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img{
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;