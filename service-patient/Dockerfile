FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/patient-database-0.0.1.jar 
COPY ${JAR_FILE} patient-database.jar
ENTRYPOINT ["java","-jar","/patient-database.jar"]