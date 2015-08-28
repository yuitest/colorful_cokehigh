#!/usr/bin/env bash
HTTP_SERVER_PORT='8000'
cd "${0%/*}/static" && python3 -m http.server "$HTTP_SERVER_PORT"
