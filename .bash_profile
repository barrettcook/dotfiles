alias ls='ls -G'
alias ll='ls -al'

alias ssh='ssh -A'

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
alias cb='pbcopy'

alias flushdns='dscacheutil -flushcache;sudo killall -HUP mDNSResponder'

export PATH=/usr/local/share/npm/bin/:/opt/local/bin:/opt/local/sbin:~/bin:/usr/local/bin:$PATH

# [[ -s "/Users/bcook/.rvm/scripts/rvm" ]] && source "/Users/bcook/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

# export JAVA_HOME=`/usr/libexec/java_home -v 1.7`
# export SBT_OPTS="-XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
# export PHANTOMJS_BIN=/usr/local/share/npm/bin//phantomjs
