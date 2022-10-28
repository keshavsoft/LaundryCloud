import { HeaderHtmlFunc } from "./HtmlFuncs/FromTemplates";
import { AddListenerFunc } from "./AddListeners";

// import { TodayHeaderFunc as BookingTodayToDOMHeader } from "../Booking/Js/TodayToDOM";
// import { CompletedHeaderFunc } from "../Completed/Js/CompletedToDom";
// import { BillingHeaderFunc } from "../Billing/Js/BillingToDOM";
// import { BillingShow } from "../Billing/Show/Js/BillingShowFunc";
// import { QrCodeShowHeaderFunc } from "../QrCode/Js/QrCodeToDOM";
// import { QrcodeShow } from "../QrCode/Show/Js/Show";
// import { ToHeaderFunc as MastersToDOMHeader} from "../Masters/Js/MastersToDOM";

let BuildMenuFunc = async () => {
    let jVarLocalFromHbs = await HeaderHtmlFunc();

    let jVarLocalKHeader = document.getElementById("KHeader");
    jVarLocalKHeader.innerHTML = jVarLocalFromHbs;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = "";

 AddListenerFunc();
};

export { BuildMenuFunc };