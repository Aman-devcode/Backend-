const bcrypt=require("bcrypt");
const password="Aman@1234mohit";
// hashcode+salt
async function Hashing(){
// console.time("hash");
const Salt=await bcrypt.genSalt(10)
const hashpass= await bcrypt.hash(password,Salt);
// console.timeEnd("hash");
console.log(Salt);
console.log(hashpass);
}
Hashing();
// ye hmko hashcode la ke dega
// $2b$10$vAz41.oYOXB0PGgQRH5AzeoXbwoYuqQOH21Bhxy474wDJkkyf2AKa
//$2b$10$ZmMXilUggAwchsO.trnr0. ye hamara salt hain
//$2b$10$ZmMXilUggAwchsO.trnr0.3cw9ok0oyReWkBEMI4qDi5EFXlnozFC ye hmara hashcode hain
