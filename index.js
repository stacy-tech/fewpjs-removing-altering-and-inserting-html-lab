// Write your code here!

// no longer has dom node 'main#main'
document.querySelector('main#main').remove()

// newHeader variable that points to node 'h1#victory'
// created a variable newheader with a element/tagName of h1
const newHeader = document.createElement('h1')

// newheader variable with an id of victory
// h1 element with an id of 'victory'
newHeader.id  = 'victory'

// newheader variable that points to the h1#victory with my name inside
// an h1 with an id of victory with a text content with my name in there 
newHeader.innerHTML = 'Stacy is the champion'