let TodayHtmlFunc = async () => {
    let jVarLocalFetchUrl = "/LaundryMan/Booking/Today/Show/Html/Templates/Show.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = data;
};
export { TodayHtmlFunc };