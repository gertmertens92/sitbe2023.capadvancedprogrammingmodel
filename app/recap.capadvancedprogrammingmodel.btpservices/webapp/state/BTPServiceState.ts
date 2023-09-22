import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import BTPServiceService, { ServicesEntity } from "../service/BTPServiceService";

export interface column {
    id: string
    name: string
}
export type BTPServiceData = {
    services: Array<ServicesEntity>,
    columns: Array<column>,
    count:number
};
/**
 * @namespace recap.capadvancedprogrammingmodel.btpservices.state
 */
export default class BTPServiceState extends JSONModel {
    private url: string;
    private oData: BTPServiceData;
    private btpServiceService: BTPServiceService;
    constructor(url: string) {
        super({
            services:[],
            columns:[],
            count:0
        });


        this.url = url;

        const model = new ODataModel({
            serviceUrl: url,
            odataVersion: "4.0",
            autoExpandSelect: true,
            earlyRequests: true,
            operationMode: "Server",
            synchronizationMode: "None"
        });
        this.btpServiceService = new BTPServiceService(model);
    }

    async read(): Promise<void> {
        this.oData.services = [];
        this.oData.columns = [{id:"Name",name:"Service"}];
        const btpServicesResponse = await this.btpServiceService.getBTPServices();
        // const btpServicesResponse = this.getServicesBTP();

        for (const l of btpServicesResponse.value) {
            let colid = `${l.Infrastructure}-${l.Region}-${l.Platform}`;
            colid = colid.replace(/\s/g, "");
            let found = this.oData.services.find(r => r.Id === l.Id);
            if (!found) {
                found = { ...l };
                this.oData.services.push(found);
            }
            if (found[colid]) {
                found[colid] += `,${l.ServicePlan}`;
                found[`${colid}Plans`].push({name:l.ServicePlan});
            } else {
                found[`${colid}Plans`] = [{name:l.ServicePlan}];
                found[colid] = l.ServicePlan;
            }
            (this.oData.columns.findIndex(c => c.id === colid) < 0) && this.oData.columns.push({
                id: colid,
                name: `${l.Infrastructure} ${l.Region} ${l.Platform}`
            });
        }
        this.oData.count = this.oData.services.length;
        this.updateBindings(true);
    }

}