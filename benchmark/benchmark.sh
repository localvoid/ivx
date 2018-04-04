#!/usr/bin/sh

echo ""
echo "marko-search"
echo "============"
ab -n 10000 -c 10 -d -S -q http://127.0.0.1:3000/marko-search

echo ""
echo "marko-color"
echo "==========="
ab -n 10000 -c 10 -d -S -q http://127.0.0.1:3000/marko-color

echo ""
echo "rax"
echo "==="
ab -n 10000 -c 10 -d -S -q http://127.0.0.1:3000/rax

echo ""
echo "medium"
echo "======"
ab -n 10000 -c 10 -d -S -q http://127.0.0.1:3000/medium
