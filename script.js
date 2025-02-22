function isSameType(value1, value2) {
   // Check if the values are NaN
   if (Number.isNaN(value1) && Number.isNaN(value2)) {
     return true;
   }
   
   // Check if the values are numbers and convert them to number type
   if (!isNaN(value1)) {
     value1 = Number(value1);
   }
   if (!isNaN(value2)) {
     value2 = Number(value2);
   }
   
   // Compare the types of the values
   if (typeof(value1) == typeof(value2)) {
     return true;
   }
   else {
     return false;
   }
}
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
