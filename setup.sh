#!/bin/bash

pushd ~
ln -s src/dotfiles/.bash_profile .bash_profile
ln -s src/dotfiles/.profile .profile
ln -s src/dotfiles/vim .vim
ln -s src/dotfiles/.vimrc .vimrc
ln -s src/dotfiles/.gitignore .gitignore
ln -s src/dotfiles/git-prompt.sh .git-prompt
ln -s src/dotfiles/git-completion.bash .git-completion.bash
popd

mkdir -p ~/.vim/bundle
pushd ~/.vim/bundle
git clone https://github.com/kien/ctrlp.vim.git ctrlp.vim
git clone https://github.com/bling/vim-airline vim-airline
git clone https://github.com/scrooloose/syntastic.git
git clone git://github.com/tpope/vim-fugitive.git
git clone git://github.com/altercation/vim-colors-solarized.git
popd

pushd ~
ln -s src/dotfiles/.gitconfig .gitconfig
popd
