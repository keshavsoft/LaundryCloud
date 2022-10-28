import { ToKCont1 } from "../LaundryJs/Booking/Today/Insert/Js/ShowinDOM";
import { ToHeaderFunc as BookingTodayToHeaderFunc } from "../LaundryJs/Booking/Today/Js/InsertToDOM";

// import { CheckFolderFunc } from "../Dal/test";
// import { AddlistenersFunc } from "./KeshavSoft/ListenerFuncs";
const CommonFolderName = "LaundryMan";

let jFShowInKLastRefreshDT = () => {
    let jVarLocalKLastRefreshDT = document.getElementById("KLastRefreshDT");
    jVarLocalKLastRefreshDT.innerHTML = new Date();
};

let jFStart = async () => {
    let LocalFolderName = CommonFolderName;

    await BookingTodayToHeaderFunc({ inFolderName: LocalFolderName });
    await ToKCont1();
};

jFStart().then(p => {
});

function askForApproval() {
    if (Notification.permission === "granted") {
        createNotification('Ouch!',
            'Data folder not found...',
            'https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png');
    }
    else {
        Notification.requestPermission(permission => {
            if (permission === 'granted') {
                createNotification('Ouch!',
                    'Data folder not found...',
                    'https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png');
            }
        });
    }
};

function createNotification(title, text, icon) {
    const noti = new Notification(title, {
        body: text,
        icon
    });
};

//AddlistenersFunc();

jFShowInKLastRefreshDT();

// CheckFolderFunc().then(FromPromise => {
//     if (FromPromise.KTF === false) {
//         askForApproval();
//         let jVarLocalAlertDangerId = document.getElementById("AlertDangerId");
//         jVarLocalAlertDangerId.innerHTML = FromPromise.KReason;

//         let jVarLocalShowOfflineSpinnerId = document.getElementById("ShowOfflineSpinnerId");
//         jVarLocalShowOfflineSpinnerId.classList.remove("d-none")
//     };
// });

// QrCodeData().then(p => { console.log(p); })