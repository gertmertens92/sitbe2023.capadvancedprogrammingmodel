
import BaseService from './BaseService';
import { Octokit } from "@octokit/core";

export default class GithubService extends BaseService {

    private readonly entityName: string = "issues";
    private readonly owner: string = "gertmertens92";
    private readonly repo: string = "sitbe2023.capadvancedprogrammingmodel";
    
    constructor() {
        super("github_api");
    }
    
    public submitIssue(title: string, message: string): Promise<any> {
        const octokit = new Octokit({
            auth: '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'
        })

        return octokit.request(`POST /repos/${this.owner}/${this.repo}/${this.entityName}`, {
            owner: this.owner,
            repo: this.repo,
            title: title,
            body: message,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
        });
    }

}