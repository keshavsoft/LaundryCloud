let CompletedHeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Completed/Html/Templates/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { CompletedHeaderHtmlFunc };