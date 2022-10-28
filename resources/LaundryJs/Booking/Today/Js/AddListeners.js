import { BuildBookingMenuFunc } from "../../../Booking/Js/TodayToHeaderDom";
import { ToKCont1 as InsertToKCont1 } from "../Insert/Js/ShowinDOM";
import { ToKCont1 as ShowToKCont1 } from "../Show/Js/Show";
import { ToKCont1 as ShowAllToKCont1 } from "../ShowAll/Js/ShowinDOMBody";
import { ToKCont1 as QrcodeToKCont1 } from "../QrCode/Js/QrCodeShowInDOM";
// import { LastBookingFunc } from "../LastBooking/Js/LastBooking";
import { ToKCont1 as FindBookingShowToDOM } from "../FindBooking/Js/FindBooking";
import { ToKCont1 as DashBordShowInsertToDOMBody } from "../DashBoard/Js/InsertToDOMBody";

let StartFunc = () => {
    let jVarLocalHomeId = document.getElementById("BookingHomeId");
    jVarLocalHomeId.addEventListener("click", BuildBookingMenuFunc);

    let jVarLocalBookingHeaderInsertId = document.getElementById("BookingHeaderInsertId");
    jVarLocalBookingHeaderInsertId.addEventListener("click", InsertToKCont1);

    let jVarLocalBookingHeaderTodayId = document.getElementById("BookingHeaderShowId");
    jVarLocalBookingHeaderTodayId.addEventListener("click", ShowToKCont1);

    let jVarLocalBookingHeaderShowAllId = document.getElementById("BookingHeaderShowAllId");
    jVarLocalBookingHeaderShowAllId.addEventListener("click", ShowAllToKCont1);

    
    let jVarLocalBookingHeaderQrCodeId = document.getElementById("BookingHeaderQrCodeId");
    jVarLocalBookingHeaderQrCodeId.addEventListener("click", QrcodeToKCont1);

    // let jVarLocalLastBookingHeaderId = document.getElementById("LastBookingHeaderId");
    // jVarLocalLastBookingHeaderId.addEventListener("click", LastBookingFunc);

    // let jVarLocalFindBookingHeaderId = document.getElementById("FindBookingHeaderId");
    // jVarLocalFindBookingHeaderId.addEventListener("click", FindBookingShowToDOM);

    let jVarLocalDashBoardHeaderId = document.getElementById("DashBoardHeaderId");
    jVarLocalDashBoardHeaderId.addEventListener("click", DashBordShowInsertToDOMBody);

};

export { StartFunc }