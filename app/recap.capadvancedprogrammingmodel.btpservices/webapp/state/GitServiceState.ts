import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import GitServiceService from "../service/GitServiceService";

/**
 * @namespace recap.capadvancedprogrammingmodel.gitservices.state
 */
export default class GitServiceState extends JSONModel {
    private gitServiceService: GitServiceService;

    constructor(url: string) {
        super({});

        const model = new ODataModel({
            serviceUrl: url,
            odataVersion: "4.0",
            autoExpandSelect: true,
            earlyRequests: true,
            operationMode: "Server",
            synchronizationMode: "None"
        });

        this.gitServiceService = new GitServiceService(model);
    }

    async read(): Promise<void> {
        
    }

    submitIssue(title: string, issue: string): Promise<string>{
        return this.gitServiceService.submitIssue(title, issue);
    }

}