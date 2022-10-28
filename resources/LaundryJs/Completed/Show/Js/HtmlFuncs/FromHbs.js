let CompletedHtmlFunc = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Completed/Show/Html/Hbs/CompletedShow.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

 export {CompletedHtmlFunc};