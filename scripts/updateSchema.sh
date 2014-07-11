#!/bin/bash

set -e

echo "Updating latest API schema..."
echo -n "module.exports = " > ../lib/schema.js
cat ../node_modules/mms-api-schema/docs/schema/schema.json >> ../lib/schema.js
