const concurrently = require('concurrently');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const templateDirectories = {
  sleek: 'blog-sleek',
  newspaper: 'blog-newspaper',
  cardboard: 'blog-cardboard',
};

let templateDirectory = templateDirectories.sleek; // default
if (argv.theme) {
  templateDirectory = templateDirectories[argv.theme];
  console.log(`Exporting template: ${templateDirectory}`);
}

const exportCommand = `yarn workspace ${templateDirectory} clean && yarn workspace ${templateDirectory} export`;

if (process.argv.includes('--docker')) {
  const { result } = concurrently(
    [
      {
        command: 'yarn keystone:docker:build && yarn keystone:docker:run',
        name: 'KEYSTONE',
        prefixColor: 'green',
      },
      {
        command:
          `wait-on http://localhost:3000 && ${exportCommand} && yarn keystone:docker:kill && wait-on -r http://localhost:3000`,
        name: 'BUILD-AND-KILL',
        prefixColor: 'magenta',
      },
    ],
    {
      prefix: 'name',
      /* 
        First command exits with a SIGKILL and exit code 1 when killed with kill-port in Mac.
        So we ignore that using successCondition
      */
      successCondition: 'command-1',
    }
  );
  result.then(
    success => {
      console.log('✅ Export Success!');
    },
    failure => {
      console.log('❌ Export Failed!');
    }
  );
} else {
  const { result } = concurrently(
    [
      { command: 'yarn start:keystone', name: 'KEYSTONE', prefixColor: 'green' },
      {
        command: `wait-on http://localhost:3000 && ${exportCommand} && yarn kill:keystone`,
        name: 'BUILD-AND-KILL',
        prefixColor: 'magenta',
      },
    ],
    {
      prefix: 'name',
      /* 
        First command exits with a SIGKILL and exit code 1 when killed with kill-port in Mac.
        So we ignore that using successCondition
      */
      successCondition: 'command-1',
    }
  );
  result.then(
    success => {
      console.log('✅ Export Success!');
    },
    failure => {
      console.log('❌ Export Failed!');
    }
  );
}
