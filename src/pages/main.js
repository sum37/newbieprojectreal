import React from 'react';
import Header from '../component/header';
import GoToSignPage from '../component/gotosign';

export default function MainPage(){
    return(
        <>
            <Header />
            <h1>메인 페이지</h1>
            <GoToSignPage />
        </>
    );
}