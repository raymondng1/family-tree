class FamilyTree {
  constructor (value) {
    this.value = value; // this will be the root-pops
    if(value === undefined) {
      throw 'error'
    }
    if(typeof value !== 'string'){
      throw 'error'
    }
    this.children = [];
  }
    
  insert (child) {
    let node = new FamilyTree(child);
    this.children.push(node);
  }
  //can use iteration cause it does not include grandchildren in the count for family size

  familySize (){
    let count = 1;
    for(let i = 0;i<this.children.length;i++){
      count ++
    }
    return count;
  } 
  //will need to use recursion to find target
  findMember (target){
    let result = undefined; 
    
    let inner = function (obj){
      if(obj.value === target){
        result = obj.value;
      }
      obj.children.forEach(child =>{
        inner(child);
      })
    }
    return result;
  }

    //need to use recursion to add '--' to every nested array but the find member function does not work.....

    log (){
      let childrenArray = this. children;
      let valueNames = [];
      childrenArray.forEach(child => {
          valueNames.push(`----${child.value}`)
      })
      
      let names = this.value + valueNames.join(' ')
      
      console.log(`--${this.value} ${names}`) 
      }
}

module.exports = FamilyTree;
