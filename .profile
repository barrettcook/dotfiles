

# export BASH_CONF="profile"
# export EB_HOME="/Users/barrett/src/eventbrite/core"
# function vg() {
#    if [ $1 ]
#    then
#        pushd $EB_HOME/django/scripts/vagrant/;
#        vagrant $@;
#        popd;
#    else
#        cd $EB_HOME;
#    fi
# }
# 
# # VM memory size in MB
# # export EB_VM_MEMSIZE="4096"
# export EB_VM_MEMSIZE="8192"
# ssh-add  # Danger!
# 
# alias ebpaste='curl -F "upload=<-" https://paste.evbhome.com/post && echo'
# alias ebselenium='ps -ef | grep selenium'
# alias rmpyc='find . -name \*.pyc -print0 | xargs -0 rm'
# 
# for filename in /Users/barrett/src/eventbrite/docker-dev/scripts/profile/*.bash; do
#     source $filename
# done
