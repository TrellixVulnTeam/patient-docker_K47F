FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar 
COPY mediscreen.jar mediscreen.jar
ENTRYPOINT ["java","-jar","mediscreen.jar"]