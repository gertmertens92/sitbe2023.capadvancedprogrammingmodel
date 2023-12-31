
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
        require('dotenv').config() 

        const octokit = new Octokit({
            auth: process.env.ACCESS_TOKEN
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