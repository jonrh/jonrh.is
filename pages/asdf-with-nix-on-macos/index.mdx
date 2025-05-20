import Post from "../../components/Post";

<Post
  title="asdf with Nix on macOS"
  path="asdf-with-nix-on-macos"
  date="April 25, 2022"
  metaDescription="How to install asdf dependencies on macOS with Nix instead of Homebrew"
>

In the past I have used [nvm](https://github.com/nvm-sh/nvm),
[pyenv](https://github.com/pyenv/pyenv), and [rvm](http://rvm.io) for
managing multiple installs of programming language runtimes for NodeJS, Python,
and Ruby respectively. I recently did a clean format and this time around am
going to try [asdf](https://asdf-vm.com) which takes a stab at being a single
tool for this purpose.

The asdf installation instructions on macOS assume Homebrew is used to install
some dependencies. I generally favour using [Nix](https://nixos.org) instead,
so the instructions below are how I got it to work instead.

Before executing any of the command line statements below it would be best to
check each source first to make sure they are current as they could and most
likely will change over time.


## Step 1: [Install Nix on macOS][nix-install]
```
$ sh <(curl --proto '=https' --tlsv1.2 -L https://nixos.org/nix/install)
```


## Step 2: [Install asdf][asdf-install]
There are multiple installation options offered for asdf, the
one I picked was ZSH & Git:

```
$ git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0
```

And then I added the following to the `~/.zshrc` file:
```
# 2022-04-25: asdf-vm.com, manages installs such as Node
. $HOME/.asdf/asdf.sh
```


## Step 3: [Install asdf Node dependencies with Nix][asdf]
```
$ nix-env -i gpgme gawk
```


## Step 4: [Install the asdf Node plugin][asdf-node]
```
$ asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```


## Step 5: [Install a specific Node version with asdf][asdf-node]
```
$ asdf install nodejs 16.14.2
```


## Step 6: [Set specific Node version as global][asdf-global]
```
$ asdf global nodejs 16.14.2
```


## Step 7: Make sure everything worked
```
$ node --version
v16.14.2
```


</Post>


[nix-install]: https://nixos.org/download.html#nix-install-macos
[asdf-install]: https://asdf-vm.com/guide/getting-started.html#_3-install-asdf
[asdf]: https://asdf-vm.com/guide/getting-started.html#plugin-dependencies
[asdf-node]: https://asdf-vm.com/guide/getting-started.html#_4-install-a-plugin
[asdf-global]: https://asdf-vm.com/guide/getting-started.html#global
