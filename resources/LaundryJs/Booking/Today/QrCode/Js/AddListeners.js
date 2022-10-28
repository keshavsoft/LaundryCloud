import { ToModal } from "./QrCodeToModal";

let AddListenersFunc = () => {
    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("QrCodeButtonClass");
    console.log("jVarLocalQrCodeButtonClass : ", jVarLocalQrCodeButtonClass);
    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
        jVarLocalQrCodeButtonClass[i].addEventListener('click', async (inEvent) => {
            let jVarInsideCurrentTarget = inEvent.currentTarget;
            let jVarInsideClosestTr = jVarInsideCurrentTarget.closest("tr");
            let jVarInsideQrCodeValue = jVarInsideClosestTr.dataset.qrcode;
            ToModal({ inRowPK: jVarInsideQrCodeValue });
        });
    };
};

export { AddListenersFunc };