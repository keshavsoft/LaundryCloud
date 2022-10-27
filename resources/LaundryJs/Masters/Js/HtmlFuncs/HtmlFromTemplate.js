let HeaderHtmlFunc = async ({ inFolderName }) => {
    let jVarLocalFetchUrl = `/${inFolderName}/Masters/Html/Templates/Header.html`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;

};

export { HeaderHtmlFunc };