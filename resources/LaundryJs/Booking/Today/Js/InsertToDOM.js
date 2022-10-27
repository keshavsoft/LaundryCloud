import { HeaderHtmlFunc } from "./HtmlFromTemplates";
import { StartFunc as AddListenersStartFunc } from "./AddListeners";

let ToHeaderFunc = async ({ inFolderName }) => {
    let LocalinFolderName = inFolderName;

    let jVarLocalFromHbs = await HeaderHtmlFunc({ inFolderName: LocalinFolderName });

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    AddListenersStartFunc();
};

export { ToHeaderFunc };