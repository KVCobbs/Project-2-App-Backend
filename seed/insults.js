
const db = require('../db/index.js')
const Insults = require('../Models/Insults.js')

//insults to seed
const insultsSeed = [
    {name:"Suck-bottle.",},
    {name:"Tattletale.",},
    {name:"Earbanger.",},
    {name:"Quakebuttock."},
    {name:"Fart-catcher."},
    {name:"Pricklouse."},
    {name:"Go fly a kite."},
    {name:"Your code is wet af my dude."},
    {name:"Donkey kisser."},
    {name:"N00B."},
    {name:"Nerf herder."}, //Star wars reference
    {name:"Caliginous junk."}, //Wizard of oz reference
    {name:"Your mother was a hamster."}, //monthy python
    {name:"Your father smelt of elderberries."},
    {name:"Well if it isn't fat stinking billygoat billyboy."}, //clockwork orange
    {name:"You're a sad strange little man and you have my pity."},
    {name:"Shut your festering gob you tit!."},
    {name:"Smeg head."}, 
    {name:"You fart factory."},
    {name:"Slug-slimed sack of rat guts in cat vomit."},
    {name:"You spam email."},
    {name:"Poopie-butt."},
    {name:"Cold bowl of soup."},
    {name:"Wobbly table."},
    {name:"You're a wet sock."},
    {name:"You lint licker."},
    {name:"You expired coupon."},
    {name:"squeaky grocery cart."},
    {name:"You're Ugly."},
    {name:"Pie-eating Pirate."},
    {name:"Monkey Face."},
    {name:"Crotch Hammer."},
    {name:"Why don't you slip into something more comfortable? Like a coma."},
    {name:"You'll never be the man your mother is."},
    {name:"You're so ugly hello kitty said goodbye to you."},
    {name:"We all sprang from apes but you didnt spring far enough."},
    {name:"You're so ugly you make an onion cry."},
    {name:"You're so fat the only letters of the alphabet you know are KFC."},
    {name:"You're a poop goblin."},
    {name:"You sorry excuse for an intolerable ass pastry."},
    {name:"You're an illiterate dump truck."},
    {name:"You think you're better than me?"},
    {name:"You despicable egg."},
    {name:"You rotten monkey."},
    {name:"You're the salt of the earth."},
    {name:"If your life had a face, I would punch it."},
    {name:"You belong in the shed. With the other tools."},
    {name:"I'll use small words so that you'll be sure to understand you warthhog-faced bafoon!"},
    {name:"You're too stupid to insult."},
    {name:"Cancel my subscriptions.I'm over your issues."},
    {name:"Dork."},
    {name:"Geek."},
    {name:"Waste of cells."},
    {name:"You're dumber than a bag of hammers."},
    {name:"pinhead."}
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