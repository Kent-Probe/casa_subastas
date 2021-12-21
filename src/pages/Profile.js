import React from "react";
import AuctionWin from "../componets/AuctionWin";
import InfoProfile from "../componets/InfoProfile";
import ProfileP from "../componets/ProfileP";
import RedProfile from "../componets/RedProfile";

import {getOne} from '../services/User';

import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function Profile() {

    const infoUser = async () => {
        const respon = await getOne({ nombreu: cookies.get("username") });
        cookies.set('name', respon.name)
        cookies.set('email', respon.email)
    };
    
    infoUser();

    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <ProfileP
                                nameuser={cookies.get("username")}
                                rol={cookies.get("rol")}
                            />
                            <RedProfile />
                        </div>
                        <div className="col-lg-8">
                            <InfoProfile
                                name={cookies.get("name")}
                                email={cookies.get("email")}
                                password={"**********"}
                            />
                            <div className="row">
                                <AuctionWin />
                                <AuctionWin />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
