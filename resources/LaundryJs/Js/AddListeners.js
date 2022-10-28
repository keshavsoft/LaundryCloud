import { ToHeaderFunc as CompletedHeaderFunc } from "../Completed/Js/CompletedToDom";
import { ToKCont1 as CompletedShowFunc } from "../Completed/Show/Js/Show";

let AddListenerFunc = () => {
    //let jVarLocalBookingId = document.getElementById("BookingId");
    let jVarLocalWashingCompletedId = document.getElementById("WashingCompletedId");
    //     let jVarLocalBillingId = document.getElementById("BillingId");
    //     let jVarLocalQrcodeshowId = document.getElementById("QrcodeshowId");
    //     let jVarLocalMastersId = document.getElementById("MastersId");

    //jVarLocalBookingId.addEventListener("click", LocalFuncBooking);

    jVarLocalWashingCompletedId.addEventListener("click", LocalFuncCompleted);

    //     jVarLocalBillingId.addEventListener("click", LocalFuncBilling);

    //     jVarLocalQrcodeshowId.addEventListener("click", LocalFuncQrCode);

    //     jVarLocalMastersId.addEventListener("click", LocalFuncMasters);

};

// let LocalFuncBooking = async () => {
//     BookingTodayToDOMHeader();
// };

// let LocalFuncMasters = async () => {
//     MastersToDOMHeader();
// };

let LocalFuncCompleted = async () => {
    CompletedHeaderFunc();
    CompletedShowFunc();
};

// let LocalFuncBilling = async () => {
//     BillingHeaderFunc();
//     BillingShow();
// };

// let LocalFuncQrCode = async () => {
//     QrCodeShowHeaderFunc();
//     QrcodeShow();
// };

export { AddListenerFunc };