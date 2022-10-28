import { BuildBookingMenuFunc } from "../../../Booking/Js/TodayToHeaderDom";
import { ToKCont1 as InsertToKCont1 } from "../Insert/Js/ShowinDOM";
import { ToKCont1 as ShowToKCont1 } from "../Show/Js/Show";

// import { ShowDataForDelete } from "../Delete/Js/ShowDataForDelete";
// import { ShowDatawithAlertForDelete } from "../Delete/Js/ShowDatawithAlertForDelete";
// import { ShowAll } from "../ShowAll/Js/ShowinDOMBody";
// import { QrcodeShowAll } from "../QrCode/Js/QrCode";
// import { LastBookingFunc } from "../LastBooking/Js/LastBooking";
// import { FindBookingFunc as FindBookingShowToDOM } from "../FindBooking/Js/FindBooking";

import { ToKCont1 as DashBordShowInsertToDOMBody } from "../DashBoard/Js/InsertToDOMBody";

let StartFunc = () => {
    let jVarLocalHomeId = document.getElementById("BookingHomeId");
    jVarLocalHomeId.addEventListener("click", BuildBookingMenuFunc);

    let jVarLocalBookingHeaderInsertId = document.getElementById("BookingHeaderInsertId");
    jVarLocalBookingHeaderInsertId.addEventListener("click", InsertToKCont1);

    let jVarLocalBookingHeaderTodayId = document.getElementById("BookingHeaderShowId");
    jVarLocalBookingHeaderTodayId.addEventListener("click", ShowToKCont1);

    // let jVarLocalBookingHeaderShowAllId = document.getElementById("BookingHeaderShowAllId");
    // jVarLocalBookingHeaderShowAllId.addEventListener("click", ShowAll);

    
    // let jVarLocalBookingHeaderQrCodeId = document.getElementById("BookingHeaderQrCodeId");
    // jVarLocalBookingHeaderQrCodeId.addEventListener("click", QrcodeShowAll);

    // let jVarLocalLastBookingHeaderId = document.getElementById("LastBookingHeaderId");
    // jVarLocalLastBookingHeaderId.addEventListener("click", LastBookingFunc);

    // let jVarLocalFindBookingHeaderId = document.getElementById("FindBookingHeaderId");
    // jVarLocalFindBookingHeaderId.addEventListener("click", FindBookingShowToDOM);

    let jVarLocalDashBoardHeaderId = document.getElementById("DashBoardHeaderId");
    jVarLocalDashBoardHeaderId.addEventListener("click", DashBordShowInsertToDOMBody);

};

export { StartFunc }