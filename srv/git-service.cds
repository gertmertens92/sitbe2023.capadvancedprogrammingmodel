@impl: './src/service'
service GitService {
    action submitIssue(title : String, message : String) returns String;
}
