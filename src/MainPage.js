import React from 'react';
import Button from  'react-bootstrap/Button';
import princess from './disney.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = ({startTest}) => {
    return (
        <div>
            <h1>Which princess are you?</h1>
            <div><img src={princess} alt="mainPage" style={{width: '700px', height: '300px'}}/></div>
            <Button onClick={startTest} variant="danger" style={{marginTop: '10px'}}> Start test</Button>
            <div style={{width: '700px', margin: '20px'}}>
            If you're like us, you've spent a good amount of time discussing which Disney Princess you are with your friends, family, co-workers, and basically everyone you know. Now it's time to answer that ultimate question: which Disney Princess are you? Your life will never be the same after this moment. 
            </div>
        </div>
    );
};

export default MainPage;