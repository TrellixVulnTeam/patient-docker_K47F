FROM mongo:5.0.2

COPY init.json /init.json
CMD mongoimport --host mongodb --db patient --collection PatientNote --type json --file init.json --jsonArray