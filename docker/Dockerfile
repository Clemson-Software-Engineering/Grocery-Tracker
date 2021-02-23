FROM frolvlad/alpine-glibc
EXPOSE 8080

RUN apk add --no-cache curl
# Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

# Aleph
RUN deno install -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.1/cli.ts
RUN mkdir hello
RUN echo y | aleph init hello

CMD "aleph" "start" "hello"