FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar 
COPY patient-database-0.0.1.jar patient-database.jar
ENTRYPOINT ["java","-jar","/patient-database.jar"]