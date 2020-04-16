function init(capacity) {
   queue = {
    list:[],
    capacity: capacity
  }
  
  return queue
  
}
function getCapacity(queue){
  return queue.capacity;
}

function getSize(queue) {
  return queue.list.length
}

function isEmpty(queue){
  if (queue.list.length==0){
    return true
  }
  else return false
}

function isFull(queue){
  if(queue.list.length==queue.capacity){
    return true
  }
  else return false
}
function addLast(queue,element){
  if (queue.capacity==getSize(queue)){
   
    return queue
    
  }
  else {
    queue.list.push(element)
    return queue
  }
}
function removeFirst(queue) {
    queue.list.shift()
    return queue
}
function rechercheDichotomique(array,element){
  if (array.length==0){
    return -1
  }
  var m = Math.floor(array.length / 2);
  if(array[m] == element) return m+1;
   
  if(array.length == 1) return NaN;
   
  if (array[m] < element) {
    return rechercheDichotomique(array.slice(m,array.length),element) + m;
  }
  else {
    return rechercheDichotomique(array.slice(0,m),element);
  }
}
array=[5,8,9,25]
console.log(rechercheDichotomique(array,250))
module.exports = {init,getCapacity,getSize,isEmpty,isFull,addLast,removeFirst,rechercheDichotomique};