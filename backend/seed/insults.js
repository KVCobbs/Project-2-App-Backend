
const db = require('../db/index.js')
const Insults = require('../Models/Insults.js')

//insults to seed
const insultsSeed = [
    {name:"Suck-bottle",},
    {name:"Tattletale",},
    {name:"Earbanger",},
    {name:"Quakebuttock"},
    {name:"Fart-catcher"},
    {name:"Pricklouse"},
    {name:"Go fly a kite"},
    {name:"Your code is wet af my dude"},
    {name:"Donkey kisser"},
    {name:"N00B"},
    {name:"Nerf herder"}, //Star wars reference
    {name:"Caliginous junk"}, //Wizard of oz reference
    {name:"Your mother was a hamster"}, //monthy python
    {name:"Your father smelt of elderberries"},
    {name:"Well if it isn't fat stinking billygoat billyboy"}, //clockwork orange
    {name:"You're a sad strange little man and you have my pity"},
    {name:"Shut your festering gob you tit!"},
    {name:"Smeg head"}, 
    {name:"You fart factory"},
    {name:"Slug-slimed sack of rat guts in cat vomit"},
    {name:"you spam email"},
    {name:"poopie-butt"},
    {name:"cold bowl of soup"},
    {name:"wobbly table"},
    {name:"you're a wet sock"},
    {name:"you lint licker"},
    {name:"you expired coupon"},
    {name:"squeaky grocery cart"},
];

//insert all insults from array 
Insults.insertMany(insultsSeed,
    (error,response) => {
        if (error) {
            console.log(error);
        }else {
            console.log(response);
        }
        db.close()
    })

module.exports = Insults

/*
edit:8/3/2020 So I tried Jeremy's way from the record lab and it didn't crash but it's not showing up when I 
node seed/
so I wanted to try seeding a database to get more familiar with it. I'm not sure if I need it because once I 
add a router it keeps making my server crash since things come up undefined. my server works fine right now though
8/2/2020. I'm not sure why. Anyway 
seeding a database is a process in which an inital(original)set of sata is being provided to a database when it is being installed. 
I just wanted to add some original words to already be hosted besides the user adding their own. 
*/