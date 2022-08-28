class Node {
    constructor({value=null , nextNode=null}){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(head=null){
        this.head = head;
    }

    append(value){
        if(!this.head){
            this.head = new Node({value: value});
            return;
        } 
        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node({value: value});
        return;
    }

    prepend(value){
        if(!this.head){
            this.head = new Node(value=value);
            return;
        }
        let oldHead = this.head;
        this.head = new Node({value:value, nextNode:oldHead});
        return;
    }

    size(){
        if(!this.head){
            return 0;
        }
        let counter = 1;
        let currentNode = this.head;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            counter++;
        }
        return counter;
    }

    getHead(){
        if(!this.head){
            return null;
        }
        return this.head;
    }

    tail(){
        if(!this.head){
            return null;
        }
        let currentNode = this.head;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index){
        if(!this.head){
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while(counter < index){
            if(!(currentNode.nextNode)){
                return null;
            }
            currentNode = currentNode.nextNode;
            counter++;
        }
        return currentNode;
    }

    pop(){
        if(!this.head){
            return null;
        }
        let currentNode = this.head;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            if (currentNode.nextNode.nextNode == null){
                break;
            }
        }
        let lastNode = currentNode.nextNode;
        currentNode.nextNode = null;
        return lastNode;
    }

    contains(value){
        if(!this.head){
            return false;
        }
        let currentNode = this.head;
        if(currentNode.value == value){
            return true;
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            if(currentNode.value == value){
                return true;
            }
        }
        return false;
    }

    find(value){
        if(!this.head){
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        if(currentNode.value == value){
            return counter;
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            counter++;
            if(currentNode.value == value){
                return counter;
            }
        }
        return null;
    }

    toString(){
        let listString = '';
        if(!this.head){
            console.log(listString);
        }
        let currentNode = this.head;
        listString += `${currentNode.value}`;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
            listString += `${currentNode.value}`;
        }
        return listString;
    }

    insertAt(value, index){
        if(!this.head){
            this.head = new Node({value: value});
            return;
        }if (index > this.size()){
            console.log(`index ${index} is larger than list size.`);
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter < index-1){
            currentNode = currentNode.nextNode;
            counter++;
        }
        let newNode = new Node({value: value, nextNode: currentNode.nextNode});
        currentNode.nextNode = newNode;
        return;
    }

    removeAt(index){
        if(!this.head){
            return;
        }
        if (index >= this.size()){
            console.log(`index ${index} is larger than list size.`);
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter < index-1){
            currentNode = currentNode.nextNode;
            counter++;
        }
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return;
    }
}

let testList = new LinkedList();
testList.append('hola');
testList.append('que');
testList.append('tal');
testList.prepend('puto');

console.log(testList);
console.log(testList.size());
console.log(testList.getHead());
console.log(testList.tail());
console.log(testList.at(2));
console.log(testList.at(5));
console.log(testList.pop());
console.log(testList);
console.log(testList.contains('que'));
console.log(testList.contains('xd'));
console.log(testList.find('xd'));
console.log(testList.find('puto'));
console.log(testList.find('que'));
console.log(testList.toString());
testList.insertAt('xp', 2);
console.log(testList.toString());
testList.removeAt(2);
console.log(testList.toString());
testList.removeAt(2);
console.log(testList.toString());