const concurrently = require('concurrently');
const { result } = concurrently(
  [
    { command: 'yarn start:keystone', name: 'KEYSTONE', prefixColor: 'green' },
    {
      command:
        'wait-on http://localhost:3000 && yarn export:app && yarn kill:server',
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
    // success.forEach(c => {
    //   const {
    //     index,
    //     exitCode,
    //     killed,
    //     command: { exited, name, command },
    //   } = c;
    //   console.log({ index, exitCode, killed, exited, name, command });
    // });
  },
  failure => {
    console.log('❌ Export Failed!');
    // failure.forEach(f => {
    //   const {
    //     index,
    //     exitCode,
    //     killed,
    //     command: { exited, name, command },
    //   } = f;
    //   console.log({ index, exitCode, killed, exited, name, command });
    // });
  }
);
