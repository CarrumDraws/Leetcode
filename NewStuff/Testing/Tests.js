import { HashTable } from "../Hashtables/Hashtable.js";
import { Node, LinkedList } from "../LinkedLists/LinkedList.js";

let myTable = new HashTable(10);
myTable.set("Jessica", "Green");
myTable.set("Bruce", "Brown");
myTable.set("Marvin", "Black");
myTable.set("Nivram", "White");

myTable.print();
myTable.remove("Nivr");
myTable.print();
myTable.get("Hello");

// myTable.remove("Bruce");
// myTable.print();

// let myList = new LinkedList();
// myList.add("Mary", "Has a Little Lamb");
// myList.add("Little", "Red Riding Hood");
// myList.add("Three", "Little Pigs");
// myList.add("Gingerbread", "Man");

// myList.print();

// myList.insertAt("My", "Hero Acedamia", 4);
// myList.print();

// myList.removeElement("Kathy");
// myList.print();

// myList.removeFrom("3");
// myList.print();
