import Object from "sap/ui/base/Object";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";

/**
 * @namespace recap.capadvancedprogrammingmodel.gitservices.service
 */
export default class GitServiceService extends Object{
    private model: ODataModel;
    
    constructor(model: ODataModel) {
        super();
        this.model = model;
    }

    public async submitIssue(title: string, issue: string): Promise<string>{
        const actionODataContextBinding = this.model.bindContext(`/submitIssue(...)`);
        actionODataContextBinding.setParameter("title", title);
        actionODataContextBinding.setParameter("message", issue);
        await actionODataContextBinding.execute();
        return actionODataContextBinding.getBoundContext().getObject().value;
    }
}