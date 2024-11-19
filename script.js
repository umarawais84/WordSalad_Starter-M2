let adj_1 = prompt('Enter an Adjective')
let adj_2 = prompt('Enter an Adjective')
let adj_3 = prompt('Enter an Adjective')
let adj_4 = prompt('Enter an Adjective')
let adj_5 = prompt('Enter an Adjective')
let noun_1 = prompt('Enter a Noun')
let noun_2 = prompt('Enter a Noun')
let noun_3 = prompt('Enter a Noun')
let noun_4 = prompt('Enter a Noun')
let noun_5 = prompt('Enter a Noun')
let verb_1 = prompt('Enter a Verb')
let verb_2 = prompt('Enter a Verb')
let verb_3 = prompt('Enter a Verb')






let myStory = `Long ago, in the ${adj_1} plains of Mongolia, a ${adj_2} ${noun_1} named Genghis Khan began his rise to power. 
Armed with his trusty ${noun_2} and an army of ${adj_3} warriors, he set out to ${verb_1} the world.
His soldiers would ${verb_2} into battle on the backs of powerful ${noun_3}, their hearts filled with courage and determination. 
Genghis Khan’s dream was to create the greatest ${noun_4} the world had ever seen, and nothing could stand in his way.
Through countless battles, he would ${verb_3} over lands far and wide, becoming a ${adj_4} ruler remembered for centuries. 
The people of his ${noun_5} whispered tales of his ${adj_5} deeds, ensuring his name would live on forever.`

console.log(myStory)



document.getElementById('story').innerHTML = myStory;