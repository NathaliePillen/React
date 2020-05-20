import React from "react";

function Footer(){

    const date = new Date();
    console.log (date);

    const year = date.getFullYear();
    console.log (year);

    return(<footer><p>Copyright © {year}</p></footer>)

}

export default Footer;
