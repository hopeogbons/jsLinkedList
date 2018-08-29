# jsLinkedList
Linked list implementation in javascript

### Example
```sh
let objLinkedList = new LinkedList('Apple', 'Banana', 'Carrot', 'Drupes', 'Egg');
```
or 

```sh
let objLinkedList = new LinkedList();

objLinkedList.add('Apple');
objLinkedList.add('Banana');
objLinkedList.add('Carrot');
objLinkedList.add('Drupes');
objLinkedList.add('Egg');
```

### Console
```sh
console.log('Size: ', objLinkedList.getSize());
console.log('Head: ', objLinkedList.getHead());
console.log('Size: ', objLinkedList.getSize());
console.log('Remove: ', objLinkedList.removeAt(3));
console.log('Size: ', objLinkedList.getSize());
```
