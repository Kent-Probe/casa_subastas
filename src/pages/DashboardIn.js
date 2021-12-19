import React from "react";
import DashboardP from "../componets/DashboardP";

//Importar Componentes
import LateralMenu from "../componets/LateralMenu";
import ProfileP from "../componets/ProfileP";
import AuctionWin from "../componets/AuctionWin";
import InfoProfile from "../componets/InfoProfile";

//importar cookies
import Cookies from "universal-cookie";

//importar elementos de la -base de datos
import { getOne } from "../services/User";


const cookies = new Cookies();
export default function Dashboard(props) {
    const infoUser = async () => {
        const respon = await getOne({ nombreu: cookies.get("username") });
        cookies.set('name', respon.name)
        cookies.set('email', respon.email)
    };
    
    infoUser();

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <LateralMenu
                        men1="Subastas"
                        men2="Reportes"
                        linkDashboard="/usuario_interno"
                        linkDashboardMen1="/usuario_interno/subasta"
                        linkDashboardMen2="/usuario_interno/reportes"
                    />
                    <DashboardP />
                    <section style={{ backgroundColor: "#eee" }}>
                        <div
                            className="container py-5"
                            style={{ marginLeft: "25%" }}
                        >
                            <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12 ">
                                    <ProfileP
                                        nameuser={cookies.get("username")}
                                        rol={cookies.get("rol")}
                                    />
                                    <InfoProfile 
                                        name = {cookies.get('name')}
                                        email = {cookies.get('email')}
                                        password = {'**********'}
                                    />
                                    <div className="row">
                                        <AuctionWin />
                                        <AuctionWin />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
