import { ThemeItalics } from '~/variants/themeItalic'
import { build } from '~/scripts/build'
import { pressEnterToExit } from '~/utils/press-enter-to-exit'
import Theme from '~/variants/theme'

async function run() {
  await build(Theme)
  await build(ThemeItalics)

  if (process.env.DEBUG_VSCODE) {
    pressEnterToExit() // Hold the process alive
  }
}

run()
