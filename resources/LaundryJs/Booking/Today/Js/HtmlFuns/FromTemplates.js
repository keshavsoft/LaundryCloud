let InsertHtmlFunc = async () => {
    // let jVarLocalFetchUrl = "Laundry/Booking/Today/Insert/Html/Templates/Insert.html";
    let jVarLocalFetchUrl = "./";

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { InsertHtmlFunc }