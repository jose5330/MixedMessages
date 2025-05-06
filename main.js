let items = 
[
    ['chicken','cat','dog','boy'],
    ['road','street','highway','universe'],
    ['get to the other side','get Ice Cream','not get stuck in 4-lane traffic','get to the same side']
]

items = items.map(group => {
    return group[Math.floor(Math.random()*4)]
})

const result = `Why did the ${items[0]} cross the ${items[1]}? To ${items[2]}!`

console.log(result)
