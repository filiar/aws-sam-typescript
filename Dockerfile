FROM linuxbrew/brew

RUN brew tap aws/tap; \
    brew install awscli aws-sam-cli node
