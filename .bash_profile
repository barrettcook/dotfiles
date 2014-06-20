alias ls='ls -G'
alias ll='ls -al'
alias vi='vim'

alias ssh='ssh -A'
alias tagl='ssh tag-local.com'
alias sadmin='ssh bcook@sadmin01.tag-stage.com'
alias admin='ssh admin01.tagged.com'


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

alias rb='post-review --guess-fields --target-groups=DevTools'
alias pr='post-review'
alias pru='pr -r'
alias jn='jasmine-node'
alias cb='pbcopy'

alias flushdns='dscacheutil -flushcache;sudo killall -HUP mDNSResponder'

##
# Your previous /Users/bcook/.bash_profile file was backed up as /Users/bcook/.bash_profile.macports-saved_2011-12-14_at_12:28:26
##

# MacPorts Installer addition on 2011-12-14_at_12:28:26: adding an appropriate PATH variable for use with MacPorts.
export PATH=/usr/local/share/npm/bin/:/opt/local/bin:/opt/local/sbin:~/bin:/usr/local/bin:$PATH
export PATH="$PATH:/usr/local/lib/node_modules/karma/bin" 

# Finished adapting your PATH environment variable for use with MacPorts.


[[ -s "/Users/bcook/.rvm/scripts/rvm" ]] && source "/Users/bcook/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

# export JAVA_HOME=`/usr/libexec/java_home -v 1.7`
# export SBT_OPTS="-XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
export PHANTOMJS_BIN=/usr/local/share/npm/bin//phantomjs

# Add support for RVM
source ~/.profile
source ~/.git-completion.bash
source ~/.git-prompt

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

export PS1="\[$GREEN\]\t \[$CYAN\]\u \[$YELLOW\]\w\[$MAGENTA\]\$(__git_ps1)\[$WHITE\]\$ "
