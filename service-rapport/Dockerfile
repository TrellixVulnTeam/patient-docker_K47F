FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar 
COPY patient-rapport-0.0.1.jar patient-rapport.jar
ENTRYPOINT ["java","-jar","/patient-rapport.jar"]