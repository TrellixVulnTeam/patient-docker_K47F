FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar 
COPY note-database-0.0.1.jar note-database.jar  
ENTRYPOINT ["java","-jar","/note-database.jar"]