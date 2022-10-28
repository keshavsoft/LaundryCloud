import { BuildMenuFunc } from "../../Js/ShowinDOMHeader";
import { ToKCont1 as CompletedShowFunc } from "../Show/Js/Show";
import { ScanHeaderId } from "../Scan/Js/ScanFuncs";

let AddListenersFunc = () => {
    let jVarLocalHomeId = document.getElementById("HomeId");
    let jVarLocalScanHeaderId = document.getElementById("ScanHeaderId");
    let jVarLocalCompletedHeaderId = document.getElementById("CompletedHeaderId");

    jVarLocalHomeId.addEventListener("click", BuildMenuFunc);
    jVarLocalScanHeaderId.addEventListener("click", ScanHeaderId);
    jVarLocalCompletedHeaderId.addEventListener("click", CompletedShowFunc);
};

export { AddListenersFunc };