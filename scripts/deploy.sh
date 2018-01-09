#!/usr/bin/env sh
set -x

tar -czf dist.tgz dist && \
scp dist.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./scripts/untar.sh
