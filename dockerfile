FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install

ARG NEXT_SHARP_PATH

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
