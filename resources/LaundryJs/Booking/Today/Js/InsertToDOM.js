import { HeaderHtmlFunc } from "./HtmlFromTemplates";

let ToHeaderFunc = async ({ inFolderName }) => {
    let LocalinFolderName = inFolderName;

    let jVarLocalFromHbs = await HeaderHtmlFunc({ inFolderName: LocalinFolderName });

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    //  LocalAddListeners();
};

export { ToHeaderFunc };