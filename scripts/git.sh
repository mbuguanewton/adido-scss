#!/usr/bin/env bash
ACTION=$1

function initial {
    echo "=> staging files"

    git add .

    echo "=> commiting changes"

    echo what is the commit message ?

    read message

    git commit -m "$message"

    echo "=> changing to the main branch {git branch -M main}"

    git branch -M main
  
    echo "=> pushing to main branch"

    git push -u origin main
}

function push {
    echo "=> staging changes"

    git add .

    echo "=> commiting changes"

    echo what is the commit message ?

    read message

    git commit -m "$message"

    echo "=> pushing code to branch"

    echo what is the commit branch ?

    read branch

    git push origin $branch
}




if [[ $ACTION == 'initial' ]]
then
    initial
elif [[ $ACTION == 'push' ]]
then
    push
else 
    echo "Invalid action"
    exit 113
fi