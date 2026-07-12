import Post from "../../components/Post";
import Dither from "../../components/Dither";

<Post
  title="Using Husky and asdf with Fork"
  path="using-husky-and-asdf-with-fork"
  date="June 28, 2023"
  metaDescription="How to get Fork to run Husky commit hooks when Node
  versions is managed by asdf."
>
  Recently started trying out the macOS git client [Fork][fork] as a
  replacement for [GitKraken][gitkraken]. GitKraken started out as
  simple and intuitive git GUI client but over the years it has
  unfortunately become unstable and filled with features catering to
  enterprise customers.

  Points in favour of Fork:

  - native macOS & Windows client, always faster than Electron
  - one time $50 fee (3 devices) -vs- $60/y Pro license
  - consistent updates for the past 7 years
  - created & maintained by bootstrappers
  - targeted to independent developers

  However, an error occurred during the first commit in a project that
  utilizes [Prettier][prettier] for automatic code formatting, in combination
  with [Husky][husky] and [lint-staged][lintstaged], which ensures no
  unformatted code can be committed.

  <Dither
    src="/images/using-husky-and-asdf-with-fork/fork-husky-asdf-error-1.png"
    alt="My desk showing a notebook, fountain pen, Mac Mini, monitors, keyboard and mouse"
    width={992}
    height={588}
  />

  <details>
  <summary>Click to see text version of error:</summary>
  ```
  Git Error. An unexpected error occurred while performing the git request. Error details:

  $ git commit --file=/var/folders/hd/xxx/T/yyy

  .husky/pre-commit: line 4: npx: command not found
  husky - pre-commit hook exited with code 127 (error)
  husky - command not found in PATH=/Applications/Fork.app/Contents/Resources/git-instance/libexec/git-core:/Applications/Fork.app/Contents/Resources/git-instance/git-lfs:/Applications/Fork.app/Contents/Resources/gitflow-avh:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
  ```
  </details>

  What seems to be happening is that [npx][npx] was not available in the
  context when the Husky pre-commit hook ran. It seems that Fork does not
  source the default shell of the operating system [by design][forkshell].

  On the specific system in question [asdf][asdf] is used to manage the Node
  version using the [ZSH & Git install method][asdfinstall]. That involves
  sourcing asdf in the file `~/.zshrc`. One way to fix the missing npx Fork git
  error is to source asdf in the global Husky configuration file `~/.huskyrc`
  the same way by adding the following line:

  ```sh
  # File: ~/.huskyrc
  . "$HOME/.asdf/asdf.sh"
  ```

  This assumes a asdf installation via ZSH & Git. The content will need to be
  modified depending on the asdf installation method. A similar approach
  would be used for [nvm][nvm] but the content would be different. Alternative
  approaches have also been proposed in [this Fork issue][forkissue] on the
  matter.


  [fork]: https://git-fork.com/
  [gitkraken]: https://www.gitkraken.com/
  [husky]: https://typicode.github.io/husky/
  [npx]: https://docs.npmjs.com/cli/v9/commands/npx
  [asdf]: https://asdf-vm.com
  [lintstaged]: https://github.com/okonet/lint-staged
  [prettier]: https://prettier.io
  [asdfinstall]: https://asdf-vm.com/guide/getting-started.html#_3-install-asdf
  [forkshell]: https://github.com/fork-dev/Tracker/issues/1227#issuecomment-748598828
  [nvm]: https://github.com/nvm-sh/nvm
  [forkissue]: https://github.com/fork-dev/Tracker/issues/1227
</Post>
