let InsertHtmlFromFile = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Booking/Today/Insert/Html/Templates/Insert.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { InsertHtmlFromFile }