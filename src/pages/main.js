import React from 'react';
import Header from '../component/header';
// import Login from '../component/gotosign';

export default function MainPage({location, history}){
    console.log(history);
    console.log(location);
    return(
        <>
            <Header />
            <h1>메인 페이지</h1>
        </>
    );
}