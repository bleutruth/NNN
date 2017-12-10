#!/bin/bash

dirname="/home/ubuntu/workspace/niconico-ranking-rss"
mkdir -p $dirname

filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
