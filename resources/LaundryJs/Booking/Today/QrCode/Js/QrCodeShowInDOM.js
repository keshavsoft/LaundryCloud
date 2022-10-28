import { QrCodeHtmlFunc } from "./HtmlFuncs/FromHbs";
import { ShowAllFunc } from "../../ShowAll/Js/DalFuncs";
import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
import { AddListenersFunc } from "./AddListeners";
import { ShowAllFunc as DalStartFunc } from "./DalFuncs";

let ToKCont1 = async (inEvent) => {
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    let jVarLocalFromTemplate = await QrCodeHtmlFunc();
    //   console.log("jVarLocalFromTemplate : ", jVarLocalFromTemplate);
    var template = Handlebars.compile(jVarLocalFromTemplate);

    let jVarLocalDataNeeded = await DalStartFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KCont1").innerHTML = jVarLocalHtml;

    AddListenersFunc();

    LocalSetFocusFunc();
};

let LocalSetFocusFunc = () => {
    let jVarLocalCustomerName = document.getElementById("SearchQrCodeTable");
    jVarLocalCustomerName.focus();
};

export { ToKCont1 }
