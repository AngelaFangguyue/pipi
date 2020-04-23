#!/usr/bin/env sh
rm -rf dist
rm -rf .cache
parcel build src/index.html --public-url=. --no-minify
