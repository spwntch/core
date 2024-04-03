#!/usr/bin/env node

import { createWorkspace } from 'create-nx-workspace';
import { confirm, intro, text } from '@clack/prompts';

async function main() {
  intro(`
  {x} Ready to spawn a new workspace?
      Let's get your started 🚀`);

  console.log(process.argv);

  let name = process.argv[2]; // TODO: use libraries like yargs or enquirer to set your workspace name
  if (!name) {
    name = (await text({
      message: 'What would you like to name your new workspace?',
      validate(value) {
        if (value.trim().length === 0)
          return 'Please provide a name for the workspace';
      },
    })) as string;
    // if (!name) throw new Error('Please provide a name for the workspace');
  }

  const addDocs = await confirm({
    message: 'Would you like to add Getting Started docs?',
    initialValue: true,
  });

  console.log(`Creating the workspace: ${name}`);

  // This assumes "workspace-generator" and "spawn-workspace" are at the same version
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const presetVersion = require('../package.json').version;

  // TODO: update below to customize the workspace
  const { directory } = await createWorkspace(
    `@spwntch/workspace-generator@${presetVersion}`,
    {
      name,
      nxCloud: 'skip',
      packageManager: 'npm',
      addDocs,
      
    }
  );

  console.log(`Successfully created the workspace: ${directory}.`);
}

main();
