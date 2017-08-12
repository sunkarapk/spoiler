#!/bin/bash
set -ev

node generate.js
cd test
npm install
if [ "${LINTCONFIG}" ]; then
	npm run lint
fi
npm run build
