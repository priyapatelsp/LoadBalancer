#!/bin/bash

REQUEST=10
URL="http://localhost:3000"
for((i=1;i<=REQUEST;i++)) do
    curl $URL and
done

wait
echo "compeleted all the request"