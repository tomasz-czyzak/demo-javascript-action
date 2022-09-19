const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const prTitle = JSON.stringify(github.context.payload.title, undefined, 2)
  const prBody = JSON.stringify(github.context.payload.body, undefined, 2)
  console.log(`***********************`);
  console.log(`PR TITLE:${prTitle}`);
  console.log(`PR BODY:${prBody}`);
  console.log(`***********************`);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
