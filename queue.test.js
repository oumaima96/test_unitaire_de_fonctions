const {
    init,
    getCapacity,
    getSize,
    isEmpty,
    isFull,
    addLast,
    removeFirst,
    rechercheDichotomique
}= require('./queue');
//function init
describe("test the queue initialization"  ,()=>{
    test("should return an object with empty array and an initialized capacity", ()=>{
        for(i=0;i<100; i++) {
            let expected={
                list:[],
                capacity:i
            }
            expect(init(i)).toStrictEqual(expected)
        }
    })
    test("should return an axception if the capacity is less than 0",()=>{
        const capacity=-1
        expect(()=> init(capacity)).toThrowError(/capacity/gi)
    })
})
//function getCapacity
describe("test the get capacity function"  ,()=>{
    test("should throw an error if the queue parameter has a wrong structure", ()=>{
            const queue={
                lisValuest:[],
                capacityOfList:10
            }
            expect(()=>getCapacity(queue)).toThrowError(/queue/gi)
        
    })
    test("should return the right capacity",()=>{
        for (i=0;i<100;i++){
            const queue={
                list:[],
                capacity:i
            }
            const expected=i
            expect(getCapacity(queue)).toBe(expected)
        }
    })
})
// function getSize
describe("test the get size function"  ,()=>{
    test("should throw an error if the queue parameter has a wrong structure in function get size ", ()=>{
            const queue={
                lisValuest:[],
                capacityOfList:10
            }
            expect(()=>getCapacity(queue)).toThrowError(/queue/gi)
        
    })
    test("should return the right size",()=>{
        let queue={
            list: [],
            capacity:2
        }
        let expected=0
        expect(getSize(queue)).toBe(expected)

        queue={
            list:[9],
            capacity:2
        }
        expected=1
        expect(getSize(queue)).toBe(expected)

        queue={
            list: [2,25],
            capacity:10
        }
        expected=2
        expect(getSize(queue)).toBe(expected)
    })
})

//function isEmpty 
describe("test if the queue is empty"  ,()=>{
    test("should the function return true", ()=>{
            const queue={
                list:[],
                capacity:10
            }
            const expected=true
            expect(isEmpty(queue)).toBe(expected)
        
    })
    test("should the function return false", ()=>{
        const queue={
            list:[3],
            capacity:10
        }
        const expected=false
        expect(isEmpty(queue)).toBe(expected)
    
})
})

//function isFull 
describe("test if the queue is full"  ,()=>{
    test("should the function return false", ()=>{
            const queue={
                list:[6.8],
                capacity:10
            }
            const expected=false
            expect(isFull(queue)).toBe(expected)
        
    })
    test("should the function return true", ()=>{
        const queue={
            list:[6,9],
            capacity:2
        }
        const expected=true
        expect(isFull(queue)).toBe(expected)
    
    })
})

//function addLast
describe("test add an element to a queue"  ,()=>{
    test("should the element be a number", ()=>{
            const queue={
                list:[6.8],
                capacity:10
            }
            const element="oumaima"
            expect(()=>addLast(queue,element)).toThrowError(/number/gi)
        
    })
    test("should the element be added to an empty queue", ()=>{
        const queue={
            list:[],
            capacity:2
        }
        const element=60
        const expected={
            list:[element],
            capacity:2
        }
        expect(addLast(queue,element)).toStrictEqual(expected)
    })
    test("should the element be added to a not empty queue", ()=>{
        const queue={
            list:[15],
            capacity:2
        }
        const element=60
        const expected={
            list:[15,element],
            capacity:2
        }
        expect(addLast(queue,element)).toStrictEqual(expected)
    })
    test("should the element not be added to a full queue", ()=>{
        const queue={
            list:[15,25],
            capacity:2
        }
        const element=60
        const expected={
            list:[15,25],
            capacity:2
        }
        expect(addLast(queue,element)).toStrictEqual(expected)
    })
})

//function removeFirst
describe("test remove the first element in the queue"  ,()=>{
    test("if the queue is empty", ()=>{
        const queue={
            list:[],
            capacity:2
        }
        expect(removeFirst(queue)).toStrictEqual(queue)
    })
    test("if we have 1 element in the queue", ()=>{
        const queue={
            list:[15],
            capacity:2
        }
        const expected={
            list:[],
            capacity:2
        }
        expect(removeFirst(queue)).toStrictEqual(expected)
    })
    test("if we have more than 1 element in the queue", ()=>{
        const queue={
            list:[15,25,2],
            capacity:3
        }
        const expected={
            list:[25,2],
            capacity:3
        }
        expect(removeFirst(queue)).toStrictEqual(expected)
    })
})

// function recherche dichotomique
describe("test rechercheDichotomique of an element in a list"  ,()=>{
    test("should return -1 if the list is empty", ()=>{
        const list=[]
        element=5
        expected=-1
        expect(rechercheDichotomique(list,element)).toBe(expected)
    })

    test("should return 1 if the element in the first", ()=>{
        const list=[5,8,9,25]
        element=5
        expected=1
        expect(rechercheDichotomique(list,element)).toBe(expected)
    })

    test("should return the size(index) of list if the element in the last", ()=>{
        const list=[5,8,9,25]
        element=25
        expected=4
        expect(rechercheDichotomique(list,element)).toBe(expected)
    })
    test("should return the index of the element if exist", ()=>{
        const list=[5,8,9,25]
        element=8
        expected=2
        expect(rechercheDichotomique(list,element)).toBe(expected)
    })
   test("should return NaN if the element not exist", ()=>{
        const list=[5,8,9,25]
        element=1
        expected=NaN
        expect(rechercheDichotomique(list,element)).toBe(expected)
    })
 
    
})
