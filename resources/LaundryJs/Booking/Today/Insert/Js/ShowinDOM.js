import { InsertHtmlFromFile } from "./HtmlFuns/FromTemplates";
import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
import { AddListenersFunc } from "./AddListeners";

// import { BookingClear } from "../Js/ClearFunc";

let ToKCont1 = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromHbs = await InsertHtmlFromFile();

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;

    AddListenersFunc();

    // LocalSetFocusFunc();

};

// let LocalSetFocusFunc = () => {
//     let jVarLocalCustomerName = document.getElementById("CustomerName");
//     jVarLocalCustomerName.focus();
// };

export { ToKCont1 };