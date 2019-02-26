let input = '';
let info = '';

class AddressBook {
  constructor (contact){
    this.contact = contact;
}
add(info){
this.contact.push(info);
}
deleteAt(index){
  this.contact.splice(index, 1);
}
print(){
  console.log(this.contact);
}
}
class Contact {
  constructor (name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
const newAddress = new AddressBook ([new Contact ('Jordan Sweet', 'blahblah@aol.com', '586-295-3008', 'me')]);

while (true) {
  let input = prompt('Would you like to <add>, <delete>, <print>, or <quit>?'); 
  if(input === 'add'){
    let addName = prompt('What is the <name> of the contact?');
    let addEmail = prompt(`What is ${addName}'s <email address>?`);
    let addPhone = prompt(`What is ${addName}'s <phone number>?`);
    let addRelation = prompt(`What is your relation to ${addName}?`);
    let info = new Contact(addName, addEmail, addPhone, addRelation);
    newAddress.add(info);
  } else if(input === 'delete'){
    newAddress.print();
    const index = parseInt(prompt('Please select the number of the entry to DELETE') -1);
    newAddress.deleteAt(index);
  } else if(input === 'print'){
    newAddress.print();
  } else if (input === 'quit'){
    console.log('Until next time, friend!');
    break;
  }
}
