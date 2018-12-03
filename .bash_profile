alias ls='ls -G'
alias ll='ls -al'

alias ssh='ssh -A'
alias vim='mvim'

alias ga='git add'
alias gl='git log'
alias gla='git lola'
alias gs='git st'
alias gsd='git sdiff'
alias gco='git co'
alias gam='git ci -a -m'
alias gsr='git svn rebase'
alias gbr='git br'
alias grc='git rebase --continue'
alias git='hub'

alias rb='rbt post --guess-fields --guess-summary'
alias pr='rbt post -o'
alias pru='pr -r'
alias cb='pbcopy'

alias flushdns='dscacheutil -flushcache;sudo killall -HUP mDNSResponder'

PATH=/usr/local/share/npm/bin/:/opt/local/bin:/opt/local/sbin:~/bin:/usr/local/bin:$PATH
PATH="~/Library/Android/sdk/tools:~/Library/Android/sdk/platform-tools:${PATH}"
export PATH

export ANDROID_HOME=~/Library/Android/sdk
# [[ -s "/Users/bcook/.rvm/scripts/rvm" ]] && source "/Users/bcook/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

# export JAVA_HOME=`/usr/libexec/java_home -v 1.7`
# export SBT_OPTS="-XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
# export PHANTOMJS_BIN=/usr/local/share/npm/bin//phantomjs

# Add support for RVM
source ~/.profile
source ~/.git-prompt
source ~/.git-completion.bash

# Add source for NVM
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

# Reset
export Color_Off='\e[0m'       # Text Reset

# Regular Colors
export BLACK='\e[0;30m'        # Black
export RED='\e[0;31m'          # Red
export GREEN='\e[0;32m'        # Green
export YELLOW='\e[0;33m'       # Yellow
export BLUE='\e[0;34m'         # Blue
export PURPLE='\e[0;35m'       # Purple
export CYAN='\e[0;36m'         # Cyan
export WHITE='\e[0;37m'        # White
export MAGENTA='\e[0;35m'      # Magenta

export PS1="\[$GREEN\]\t \[$CYAN\]\u \[$YELLOW\]\w\[$MAGENTA\]\$(__git_ps1)\[$WHITE\]\$\[$Color_Off\] "

export KRB5_CONFIG=/etc/krb5.conf

export PATH=/Users/barrett/.arcanist/arcanist/bin:$PATH
source /Users/barrett/.arcanist/arcanist/resources/shell/bash-completion


export ARCANIST_INSTALL_DIR=/Users/barrett/.evbdevtools
source $ARCANIST_INSTALL_DIR/devtools/scripts/devenv_bash/arcanist_helpers.sh

ssh-add
ssh-add ~/.ssh/id_rsa_barrettcook

export BAY_HOME=/Users/barrett/src/eventbrite/docker-dev

