import LateralMenu from "../componets/LateralMenu";
import AuctionCard from "../componets/AuctionCard";
import { getOne } from "../services/Auction";
import Pagination from "../componets/Pagination";



import Cookies from "universal-cookie";

import React, { useState, useEffect } from "react";

const cookies = new Cookies();

export default function DashboardInS() {

    const [auctios, setAuctios] = useState([])

    useEffect(() => {
        getAuctios();
    }, [])

    const getAuctios = async ()=>{
        const resp = await getOne(cookies.get('username'));
        console.log(resp)
        setAuctios(resp)
    }
    return (
        <>
            <LateralMenu
                men1="Subastas"
                men2="Reportes"
                linkDashboard="/usuario_interno"
                linkDashboardMen1="/usuario_interno/subasta"
                linkDashboardMen2="/usuario_interno/reportes"
                addAuct= "Agregar subasta"
                linkAddAuct = "/usuario_interno/agregar_subasta"
            />
            {
                auctios.map(item => (
                    <AuctionCard
                        key={item.auction_id}
                        title={item.auction_name}
                        des={item.auction_des}
                        start={item.auction_DateTime_Now}
                    />
                ))
            }
            <Pagination />
        </>
    );
}
