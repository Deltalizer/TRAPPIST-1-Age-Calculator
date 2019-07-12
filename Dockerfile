FROM node

COPY . /app 

COPY entrypoint /

ENTRYPOINT [ "/entrypoint" ]

