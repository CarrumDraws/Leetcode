// NOTE: Use Command Prompt, not Powershell terminal for tsc commands.
// Powershell has weird security restrictions that are hard for me to bypass.
// Run 'tsc Tests.ts' to compile into 'Tests.js'.
// You can then run the JS file normally.
// "tsc -init" generates ts config file

console.log("Hello Worlds");

type Person = {
  name: string;
  DOB: Date;
};

// Cannot redeclare blocked scoped variable..?
const personOne: Person = {
  name: "Chandler Halderson",
  DOB: new Date(1953, 5, 13),
};
