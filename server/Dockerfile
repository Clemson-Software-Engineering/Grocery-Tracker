FROM hayd/ubuntu-deno
EXPOSE 5000

ADD . .

CMD ["deno", "run", "--allow-net", "server.ts"]