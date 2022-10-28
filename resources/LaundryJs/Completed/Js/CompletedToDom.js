import { CompletedHeaderHtmlFunc } from "./HtmlFromTemplates";
import { AddListenersFunc } from "./AddListeners";
// import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
// import { CompletedShow } from "../Show/Js/Show";
// import { ScanHeaderId } from "../Scan/Js/ScanFuncs";

let ToHeaderFunc = async () => {
    let jVarLocalFromHbs = await CompletedHeaderHtmlFunc();
    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    AddListenersFunc();
};

export { ToHeaderFunc };