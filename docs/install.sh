#!/usr/bin/env bash
# The Spadak AI Gateway installer moved to https://spadak.ai/install.sh
# This shim keeps old `curl ... github.io ... | bash` one-liners working.
set -euo pipefail
exec bash -c "$(curl -fsSL https://spadak.ai/install.sh)"
