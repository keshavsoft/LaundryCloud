let BookingInsertSuccessFunc = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Booking/Today/Insert/Html/Hbs/BookingInsertSuccess.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { BookingInsertSuccessFunc }