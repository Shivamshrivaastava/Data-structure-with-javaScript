// A hash table also known as hashmap,is a data structure that is used to store key value pairs;
// the key will be string
// we will use a hashing function to  hash the str key into a integer type index;
// hash table has fixed size to begin with;

class hashTable{
    constructor(size){
        this.size =size;
        this.table = new Array(size);
    }

    hash(key){
        let total =0;
        for(let i =0;i<key.length;i++){
            total +=key.charCodeAt(i);
        }
        return total%this.size
    }

    set(key,value){
        const index =this.hash(key);
        // making a bucket to store the given index of table , to avoid hashtable collisions;
        const bucket =this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]];
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1]= value;
            }else{
                bucket.push([key,value])
            }
        }
    }


    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }


    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1);
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}



const table = new hashTable(7);
table.set("name1","shivam")
table.set("name2","adarsh")
table.set("age","25")

table.display()

console.log(table.get("name2"));

table.remove("name1");
table.display()