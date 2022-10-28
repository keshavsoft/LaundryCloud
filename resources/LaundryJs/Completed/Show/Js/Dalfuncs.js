import { ShowWithBookingDataFunc } from "../../../../Dal/Completed/ShowFunc";
import { StartFunc as FromBookingAlso } from "../../../../Dal/Completed/PullFuncs/FromBookingAlso";

let CompletedShowFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await FromBookingAlso();
    let LocalSNo = 1;

    LocalReturnObject.KReason = LocalDataFromJson.KReason;
    
    Object.entries(LocalDataFromJson.JsonData).forEach(
        ([key, value]) => {
            LocalReturnObject.JsonData[key] = value;
            LocalReturnObject.JsonData[key].SNo = LocalSNo;
            LocalSNo += 1;
        }
    );

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};
export { CompletedShowFunc };