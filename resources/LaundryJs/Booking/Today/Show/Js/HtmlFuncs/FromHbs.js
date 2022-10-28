let RowHtmlFunc = async () => {
    let response = await fetch("/LaundryMan/Booking/Today/Show/Html/Hbs/Row.html");
    let data = await response.text();

    return await data;

};
export{RowHtmlFunc};