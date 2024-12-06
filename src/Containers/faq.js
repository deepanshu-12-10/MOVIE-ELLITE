import FaqsData from '../fixtures/faqs';
import React from 'react';
import {Accordion} from '../Components';
import {Optform} from '../Components';

export default function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {FaqsData.map(item => {
                return(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )
            })}

            <Optform>
                <Optform.Input placeholder="Email address"/>
                <Optform.Button>Try it now</Optform.Button>
                <Optform.Text>Ready to watch? Enter your email to create or restart your membership.</Optform.Text>
            </Optform>
        </Accordion>
    );
}