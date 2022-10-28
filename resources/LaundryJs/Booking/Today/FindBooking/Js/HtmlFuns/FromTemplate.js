let FindBookingHtmlFunc = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Booking/Today/FindBooking/Html/Templates/FindBooking.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { FindBookingHtmlFunc };