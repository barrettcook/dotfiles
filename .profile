export EB_HOME="/Volumes/eb_home/work/eventbritecore/"
function vg() {
   if [ $1 ]
   then
       pushd $EB_HOME/django/scripts/vagrant/;
       vagrant $@;
       popd;
   else
       pushd $EB_HOME;
   fi
}

# VM memory size in MB
export EB_VM_MEMSIZE="2048"

alias ebpaste='curl -F "upload=<-" https://paste.evbhome.com/post && echo'
