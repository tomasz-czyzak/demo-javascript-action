const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  console.log(`***********************`);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log("***********************");
    
  const prTitle = JSON.stringify(github.context.payload.pull_request.title, undefined, 2)
  const prBody = JSON.stringify(github.context.payload.pull_request.body, undefined, 2)
    
  const base = context.payload.pull_request?.base?.sha
  const head = context.payload.pull_request?.head?.sha
     
  console.log(`PR SHA BASE:${base}`);
  console.log(`PR SHA HEAD:${head}`);


  console.log(`PR TITLE:${prTitle}`);
  console.log(`PR BODY:${prBody}`);
  console.log(`***********************`);
} catch (error) {
  core.setFailed(error.message);
}
