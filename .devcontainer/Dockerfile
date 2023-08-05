FROM registry.access.redhat.com/ubi9/ubi:latest
ENV NODE_ENV=production
ENV PATH="$PATH:/workspaces/homepage/node_modules/.bin"

RUN echo -e "\
  alias ls='ls --color=auto'\n\
  alias ll='ls -l --color=auto'\n" \
  >> /root/.bashrc

RUN dnf -y update && \
  dnf -y install \
    https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm \
    # https://pkgs.org/download/libwmf-lite
    https://mirror.stream.centos.org/9-stream/AppStream/x86_64/os/Packages/libwmf-lite-0.2.12-10.el9.x86_64.rpm && \
  /usr/bin/crb enable && \
  dnf -y install \
    gcc-c++ \
    git \
    GraphicsMagick \
    # libwmf-lite \
    make \
    npm \
    ruby-devel \
    rubygem-bundler && \
  dnf clean all

EXPOSE 4000
