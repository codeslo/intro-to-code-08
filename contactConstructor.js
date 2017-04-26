function Contact(firstName,lastName,phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

var contact01 = new Contact("Katherine","Johnson","805-286-4444");

var contact02 = new Contact("Margaret","Hamilton","805-781-4533");

console.log(contact01);
console.log(contact02);