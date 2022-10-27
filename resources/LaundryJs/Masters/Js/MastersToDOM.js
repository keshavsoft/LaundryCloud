import { HeaderHtmlFunc as MastersHeaderHtmlFunc } from "./HtmlFuncs/HtmlFromTemplate";

let ToHeaderFunc = async ({inFolderName}) => {
    let LocalinFolderName = inFolderName;

    let jVarLocalFromHbs = await MastersHeaderHtmlFunc({ inFolderName: LocalinFolderName });

    let jVarLocalKCont1 = document.getElementById("KHeader");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
    // LocalAddListeners();
};

export { ToHeaderFunc };