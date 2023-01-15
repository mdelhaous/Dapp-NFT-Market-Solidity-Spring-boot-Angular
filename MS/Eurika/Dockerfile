FROM openjdk:18-alpine

WORKDIR /app

COPY target/*.jar /app/app.jar

RUN chmod +x /app/*.jar

RUN mkdir /app/mouad

EXPOSE 8761

CMD ["java","-jar","/app/app.jar"]

