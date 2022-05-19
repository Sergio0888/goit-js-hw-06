`use strict`

const searchItemEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${searchItemEl.length}`)

const searchTitleEl = document.querySelectorAll('.item > h2')

const searchListEl = document.querySelectorAll(`.item > ul`)

console.log(`Category: ${searchTitleEl[0].textContent}`)
console.log(`Elements: ${searchListEl[0].children.length}`)

console.log(`Category: ${searchTitleEl[1].textContent}`)
console.log(`Elements: ${searchListEl[1].children.length}`)

console.log(`Category: ${searchTitleEl[2].textContent}`)
console.log(`Elements: ${searchListEl[2].children.length}`)