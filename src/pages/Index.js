import React from 'react';


import Carousel from '../componets/Carousel';
import Card from '../componets/Card';
import AuctionE from '../componets/AuctionE';
import SectionInfor from '../componets/SectionInfor';
import Footeer from '../componets/Footer';

export default function Index(){
    return(
        <>
            <Carousel/>
            <Card/>
            <AuctionE/>
            <SectionInfor/>
            <Footeer/>
        </>
    );
}