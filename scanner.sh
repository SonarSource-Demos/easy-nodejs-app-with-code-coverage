#!/bin/bash

npm run test

docker run \
    --rm \
    --platform=linux/amd64 \
    --network="host" \
    -e SONAR_HOST_URL="your sonarqube ip address here" \
    -e SONAR_SCANNER_OPTS="-Xmx8192m -Dsonar.projectKey=easy-nodejs-project -Dsonar.branch.name=development" \
    -e SONAR_TOKEN="your token here" \
    -v "$(pwd):/usr/src" \
    sonarsource/sonar-scanner-cli:latest \
    -X

# docker run \
#     --rm \
#     --platform=linux/amd64 \
#     --network="host" \
#     -e SONAR_HOST_URL="your sonarqube ip address here" \
#     -e SONAR_SCANNER_OPTS="-Xmx8192m -Dsonar.projectKey=easy-nodejs-project -Dsonar.pullrequest.base=development -Dsonar.pullrequest.branch=feature-y -Dsonar.pullrequest.key=2" \
#     -e SONAR_TOKEN="your token here" \
#     -v "$(pwd):/usr/src" \
#     sonarsource/sonar-scanner-cli:latest \
#     -X