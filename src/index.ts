import { build } from '~/scripts/build'
import { pressEnterToExit } from '~/utils/press-enter-to-exit'
import Theme from '~/variants/theme'
import ThemeFlat from '~/variants/ThemeFlat'
import themeMix from '~/variants/themeMix'
import { ThemeItalics } from '~/variants/themeItalic'

async function run() {
  await build(Theme)
  await build(ThemeItalics)
  await build(ThemeFlat)
  await build(themeMix)

  if (process.env.DEBUG_VSCODE) {
    pressEnterToExit() // Hold the process alive
  }
}

run()
