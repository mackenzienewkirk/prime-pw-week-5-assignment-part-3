console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
let album = {
    albumTitle: title,
    albumArtist: artist,
    albumYear: yearPublished,
}
    collection.push(album);
return album;
}
console.log('Add Love and Hate by Michael Kiwanuka to collection:', addToCollection('Love and Hate', 'Michael Kiwanuka', 2016) );
console.log('Add Coloring Book by Chance The Rapper to the collection:', addToCollection('Coloring Book', 'Chance The Rapper', 2016));
console.log('Add Joanne by Lady Gaga to the collection:', addToCollection('Joanne', 'Lady Gaga', 2016));
console.log('Add Renaissance by Beyonce to the collection:', addToCollection('Renaissance', 'Beyonce', 2022));
console.log('Add I Just Dropped By To Say Hello by Johnny Hartman to the collection:', addToCollection('I Just Dropped By To Say Hello', 'Johnny Hartman', 1963));
console.log('Add Blood On The Tracks by Bob Dylan to the collection:', addToCollection('Blood On The Tracks', 'Bob Dylan', 1975));

//Checking to see entire collection.

console.log(collection);

function showCollection(array){
    console.log(('These are my albums:'), array.length);
for (let i=0; i < array.length; i++); {
    console.log(`${array[i].albumTitle} by ${array[i].albumArtist}, published in ${array[i].albumYear}`);
return "What do you think of my collection?";
}
}

function findByArtist(artist){
    let found = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].albumArtist === artist) {
            found.push(collection[i]); 
        } else 
    
    return found;
}
}
//Test 'findByArtist' function.

console.log('Should find Michael Kiwanuka album:', findByArtist('Michael Kiwanuka'));
console.log('Should return an empty array:', findByArtist('Pitbul'));

