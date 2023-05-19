#!/bin/bash -e

# Start 1.1 first, then 1.2
if [ "$1" == "" ]; then echo "Include dom and sn"; exit; fi
if [ "$2" == "" ]; then echo "Include dom and sn"; exit; fi

DOM=$1
SN=$2

# tmux split-window -- /bin/sh -c "LD_PRELOAD=$(clang -print-file-name=libclang_rt.asan-x86_64.so) ./pox.py config=ext/ei/ei.cfg web dashboard ei.snm --dom_id=$DOM --sn_id=$SN ei.snm:connection=ptcp:127.0.$DOM.$SN:$DOM${SN}099"
tmux split-window -- /bin/sh -c "LD_PRELOAD=$(clang -print-file-name=libclang_rt.asan-x86_64.so) ./pox.py config=ext/ei/ei.cfg ei.snm --dom_id=$DOM --sn_id=$SN ei.snm:connection=ptcp:127.0.$DOM.$SN:$DOM${SN}099"
tmux split-window -- /bin/sh -c "LD_PRELOAD=$(clang -print-file-name=libclang_rt.asan-x86_64.so) ./pox.py config=ext/ei/ei.cfg ei.eiip=tcp:127.0.$DOM.$SN:$DOM${SN}099 ei.eiip:connection=ptcp:127.0.$DOM.$SN:$DOM${SN}001; bash"
tmux split-window -- /bin/sh -c "LD_PRELOAD=$(clang -print-file-name=libclang_rt.asan-x86_64.so) ./pox.py config=ext/ei/ei.cfg ei.pt=tcp:127.0.$DOM.$SN:$DOM${SN}099 ei.pt:connection=ptcp:127.0.$DOM.$SN:$DOM${SN}000; bash"
# tmux split-window -- /bin/sh -c "LD_PRELOAD=$(clang -print-file-name=libclang_rt.asan-x86_64.so) ./pox.py config=ext/ei/ei.cfg ei.pt=tcp:127.0.$DOM.$SN:$DOM${SN}099 ei.pt:connection=ptcp:127.0.$DOM.$SN:$DOM${SN}000; bash"

# For gdb:
#gnome-terminal --tab -t "PT $DOM.$SN" -- /bin/sh -c "gdb -ex r --args python3 ./pox.py config=ext/ei/ei.cfg ei.pt=tcp:127.0.$DOM.$SN:$DOM${SN}099 ei.pt:connection=ptcp:127.0.$DOM.$SN:$DOM${SN}000"

sleep 0.5

# Basic pipes
# 1.1 should already be started
if [ "$2" = "2" ]; then ext/ei/scripts/for_xinyan_2node.sh; fi