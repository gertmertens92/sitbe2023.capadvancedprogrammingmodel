import BaseService from "../../../services/BaseService";
import GithubService from "../../../services/GithubService";

export default async function submitIssue(req: any): Promise<String> {
    const {title, message} = req.data;

    const githubService: GithubService = await BaseService.getInstance(GithubService);

    try{
        await githubService.submitIssue(title, message);
    }catch(e){
        console.log(e);
        return "Error during issue creation.";
    }

    return `Successfully created issue with title '${title}'.`;
}