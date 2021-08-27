FROM mariadb:10.4.10
ENV MYSQL_ROOT_PASSWORD root
RUN mkdir -p /var/init/sql
ADD patient.sql /var/init/sql
#RUN mysql -p patient-database < /var/init/sql/patient.sql


