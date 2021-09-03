db.createUser(
  {
	user : "admin",
	pwd  : "admin", 
	roles : [
	     {
	        role : "readWrite", 
		    db   : "patient"
          },
	],
});

db.createCollection("PatientNote")
db.PatientNote.insertMany([
  {
    patientId: 19,
    notes: "Patient d'une grande taille"
  },
  {
    patientId: 37,
    notes: "Fumeur et taille"
  }
]);
