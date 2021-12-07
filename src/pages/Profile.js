import React from "react";
import AuctionWin from "../componets/AuctionWin";
import InfoProfile from "../componets/InfoProfile";
import ProfileP from '../componets/ProfileP'
import RedProfile from "../componets/RedProfile";

export default function Profile() {

    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5" >
                    <div className="row">
                        <div className="col-lg-4">
                            <ProfileP />
                            <RedProfile/>
                        </div>
                        <div className="col-lg-8">
                            <InfoProfile/>
                            <div className="row">
                                <AuctionWin/>
                                <AuctionWin/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
