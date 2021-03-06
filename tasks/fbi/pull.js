const spawn = require('child_process').spawn

reset()

function reset() {
  const cmd = spawn('git', ['reset', '--hard'], {
    cwd: ctx.options.DATA_ROOT,
    stdio: [0, 1, 2]
  })

  cmd.on('close', status => {
    if (status === 0) {
      pull()
    } else {
      ctx.log(`Error with status ${status}.`, -1)
    }
  })
}

function pull() {
  const cmd = spawn('git', ['pull'], {
    cwd: ctx.options.DATA_ROOT,
    stdio: [0, 1, 2]
  })

  cmd.on('close', status => {
    if (status === 0) {
      ctx.log('fbi data updated.', 1)
    } else {
      ctx.log(`Error with status ${status}.`, -1)
    }
  })
}