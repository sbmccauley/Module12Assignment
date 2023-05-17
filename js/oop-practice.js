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
//         console.log(`The new animal is a ${type} of the ${breed} breed.\n It's color is ${color}.\n It is ${height} inches tall and ${length} inches in length.`)
//     }
// }
// const hamish = new Animal('dog', 'Schnauzer', 'silver', '15', '20')

// STEP 6
// class Animal {
    
// constructor(type, breed, color, height, length) {
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

// class WordFinderString extends String {
    
//     constructor(text){
//         super(text)
//     }
//     findWords(word) {
//         let selectedWordCount = 0
    
//         this._word = word.toLowerCase()
//         let wordList = this.toLowerCase().replace(/[,.;!'\n]/g," ").split(" ")
//         for (let item of wordList) {

//             if (item === word) {
//                 selectedWordCount++
//             }
//         }
//         return selectedWordCount
//     }
// }

// const myString = new WordFinderString(`Tomorrow, and tomorrow, and tomorrow,
// Creeps in this petty pace from day to day,
// To the last syllable of recorded time;
// And all our yesterdays have lighted fools
// The way to dusty death. Out, out, brief candle!
// Life's but a walking shadow, a poor player,
// That struts and frets his hour upon the stage,
// And then is heard no more. It is a tale
// Told by an idiot, full of sound and fury,
// Signifying nothing.`)

// wordEntry = prompt('Enter a word to search in our text')
// const foundWord = myString.findWords(wordEntry)
// alert(`In the text: \n\n ${myString} \n \n The word "${wordEntry}" occured in the text ${foundWord} time(s).`)


