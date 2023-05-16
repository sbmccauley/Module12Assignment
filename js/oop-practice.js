// STEP 1
// class Cat {
//     constructor() {
//         console.log(`The new cat has been created!`)
//     }
// }
// function Dog() {
//     console.log(`The new dog has been created!`)
// }

// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()

// STEP 3
// class Animal {
//     constructor() {
//         console.log(`The Animal has been created.`)
//     }
// }
// const animal1 = new Animal()

// STEP 4
// function Animal(name) {   
//     this._name = name
//     console.log(`The Animal named ${name} been created.`)
//     }
// const animal1 = new Animal('Hamish')


// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//         console.log(`The new animal is a ${type} of the ${breed} breed.  It's color is ${color}, it is ${height} inches tall and ${length} inches in length.`)
//     }
// }
// const hamish = new Animal('dog', 'Schnauzer', 'silver', '15', '20')

// STEP 6
// class Animal {
//     
//constructor(type, breed, color, height, length) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length  
//     } }
// const hamish = new Animal('Dog', 'Schnauzer', 'Black', '15 inches tall', '20 inches long')
// let list = ''
// for (let i in hamish) {
//     list += hamish[i] + '\n' + ''
// }
// console.log(`The specs of your new ${hamish._type} are as follows:`)
// console.log(list)


// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//                 this._type = type
//                 this._breed = breed
//                 this._color = color
//                 this._height = height
//                 this._length = length  
//     }
//     speak() {
//         if (this._type === 'Dog') {
//             console.log(`The ${this._color} dog is barking!`)
//         } 
//         if (this._type === 'Cat') {
//             console.log(`The ${this._color} cat is meowing!`)
//         }
//     }
// }

// const animal1 = new Animal('Dog', 'Beagle', 'spotted', '18 inches', '20 inches')

// const animal2 = new Animal('Cat', 'Tabby', 'orange', '6 inches', '8 inches')

// animal1.speak()
// animal2.speak()

// STEP 8
// function Animal(type) {
//     let _type = type
     
   
//     let checkType = function() {
//         if (_type === 'Dog') {
//            return 'dog'
//         } else return 'cat'
        
//     }
//     this.speak = function()  {
//         console.log(`The ${checkType()} has made a noise!`)
//     }
// }

// const animal3 = new Animal('Dog')
// animal3.speak()

// STEP 9

