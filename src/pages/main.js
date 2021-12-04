import React from 'react';
import Header from '../component/header';
import GoToSignPage from '../component/gotosign';
import './main.css';

export default function MainPage(){
    return(
        <div className="Entire">
            <Header />
            <GoToSignPage />
        </div>
    );
}