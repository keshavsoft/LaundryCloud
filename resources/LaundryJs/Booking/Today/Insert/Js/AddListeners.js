import {BookingSaveFunc } from "../Js/SaveFuncs";

let AddListenersFunc = () => {
        let jVarLocalBookingSaveButtonId = document.getElementById("BookingSaveButtonId");
    
        jVarLocalBookingSaveButtonId.addEventListener("click", async (event) => {
            await BookingSaveFunc();
        });
    };

    export{AddListenersFunc};