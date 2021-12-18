import React from "react";
import Cookies from "universal-cookie";

export default function Exit() {
    console.log('Estoy aca')
    const cookies = new Cookies();
    cookies.remove("logger", { path: " " });
    cookies.remove("username", { path: " " });
    cookies.remove("rol", { path: " " });
    return window.location.href = "/";
}
