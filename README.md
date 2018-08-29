# jsLinkedList
Linked list implementation in javascript

let objLinkedList = new LinkedList('Apple', 'Banana', 'Carrot', 'Drupes', 'Egg');

/*
let objLinkedList = new LinkedList();
objLinkedList.add('Apple');
objLinkedList.add('Banana');
objLinkedList.add('Carrot');
objLinkedList.add('Drupes');
objLinkedList.add('Egg');
*/

console.log('Size: ', objLinkedList.getSize());
console.log('Head: ', objLinkedList.getHead());
console.log('Size: ', objLinkedList.getSize());
console.log('Remove: ', objLinkedList.removeAt(3));
console.log('Size: ', objLinkedList.getSize());
