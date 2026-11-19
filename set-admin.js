
const admin = require("firebase-admin");

admin.initializeApp();

const uid = "YOUR_GOPAL_UID";

admin.auth().setCustomUserClaims(uid, {
  admin: true
}).then(() => {
  console.log("GOPAL ADMIN SUCCESSFULLY SET");
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exit(1);
});

