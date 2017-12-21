#!/bin/bash

read -p "日本で二番目に高い山は槍ガ岳でしょうか？ [y/n]" yn

if [ $yn = "n" ]; then
	echo 正解です。日本で二番目に高い山は北岳です。
else
	echo 不正解です。日本で二番目に高い山は北岳です。
fi

