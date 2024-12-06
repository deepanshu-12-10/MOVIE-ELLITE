import React from 'react';
import {useState, useContext, useEffect} from 'react';
import Fuse from 'fuse.js';
import {Header, Card} from '../Components';
import logo from '../logo.png';
import * as ROUTES from '../Constants/routes';
import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import {FooterContainer} from './footer';

export default function BrowseContainer({slides}){
    const {firebase} = useContext(FirebaseContext);
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const feature = slides.films[Math.floor(Math.random()*5)].data[Math.floor(Math.random()*5)];
    const user = firebase.auth().currentUser || {};
    const[profile, setProfiile] = useState({});
    const [slideRows, setSlideRows] = useState('');

    useEffect(()=>{
        setSlideRows(slides[category]);
    },[slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.title'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
    
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSlideRows(results);
        } else {
          setSlideRows(slides[category]);
        }
      }, [searchTerm]);

    return profile.displayName?(
        <>
            <Header src="Joker1">
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo src={logo} to={ROUTES.HOME} alt="NETFLIX"/>
                        <Header.TextLink active={category==='series'? true: false} 
                            onClick={()=> setCategory('series')} >
                            Series
                        </Header.TextLink>
                        <Header.TextLink active={category==='films'? true: false} 
                            onClick={()=> setCategory('films')}>
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <Header.Profile>
                            <Header.Image src={user.photoURL}/>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Image src = {user.photoURL} />
                                    <Header.Text>{user.displayName}</Header.Text>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={()=> firebase.auth().signOut()}>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureTitle>{feature.title}</Header.FeatureTitle>
                    <Header.Text>{feature.description}</Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem)=>(
                    <Card key={`${category}-${slideItem.title}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((Item)=>(
                                
                                <Card.Item key={Item.docId} item={Item}>
                                    <Card.Image src={`images/${category}/${Item.genre}/${Item.slug}/small.jpg`}/>
                                    <Card.Meta>
                                        <Card.Subtitle>{Item.title}</Card.Subtitle>
                                        <Card.Text>{Item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>

                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer/>
        </>
        
    ):<SelectProfileContainer user={user} setProfile={setProfiile}/>

}