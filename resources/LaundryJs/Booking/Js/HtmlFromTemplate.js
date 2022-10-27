let HeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Booking/Html/Templates/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { HeaderHtmlFunc }