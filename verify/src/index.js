const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`***********************`);
  const prTitle = JSON.stringify(github.context.payload.pull_request.title, undefined, 2)
  const prBody = JSON.stringify(github.context.payload.pull_request.body, undefined, 2)
  const base = github.context.payload.pull_request?.base?.sha
  const head = github.context.payload.pull_request?.head?.sha
  const addedLines = github.context.payload.pull_request?.additions
  const deletedLines = github.context.payload.pull_request?.deletions
  const modifiedFiles = core.getInput('modifed_files');
    
  console.log(`PR SHA BASE:${base}`);
  console.log(`PR SHA HEAD:${head}`);

  console.log(`PR TITLE:${prTitle}`);
  console.log(`PR BODY:${prBody}`);
  console.log(`modifiedFiles: ${modifiedFiles}`);
  console.log(`addedLines: ${addedLines}`);
  console.log(`deletedLines: ${deletedLines}`);
    
  console.log(`***********************`);
    
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log("***********************");
    
} catch (error) {
  core.setFailed(error.message);
}
