import { ChangeClassFunc } from "../../../../CommonFuncs/Header";
import { TodayHtmlFunc } from "../../Show/Js/HtmlFuncs/FromTemplates";
import { RowHtmlFunc } from "../Js/HtmlFuncs/FromHbs";
import { ShowDalFunc } from "./DalFuncs";

let ToKCont1 = async (inEvent) => {
    console.log("show");
    if ((inEvent === undefined) === false) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        ChangeClassFunc({ inHtmlControl: jVarLocalCurrentTarget });
    };

    await TodayHtmlFunc();

    let jVarLocalDataNeeded = await ShowDalFunc();
    let jVarLocalFromHbs = await RowHtmlFunc();

    if (jVarLocalDataNeeded.KTF === false) {

    };

    var template = Handlebars.compile(jVarLocalFromHbs);
    let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

    document.getElementById("KTableBody").innerHTML = jVarLocalHtml;

    LocalSetFocusFunc();
};


let LocalSetFocusFunc = () => {
    let jVarLocalCustomerName = document.getElementById("SearchQrCodeTable");
    jVarLocalCustomerName.focus();
};

export { ToKCont1 };