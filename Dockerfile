FROM node:16

#ARG USERNAME=cft
#ARG USER_UID=1001
#ARG USER_GID=$USER_UID

#RUN groupadd --gid $USER_GID $USERNAME \
#    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN rm -rf node_modules && npm install yarn && yarn install --frozen-lockfile
COPY . .
#ENV PATH=$PATH:/usr/local/bin
#USER $USERNAME

EXPOSE 3000

CMD [ "yarn", "dev" ]
