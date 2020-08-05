
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
    {name:"pinhead."},
    {name:"Smelly-head"},
    {name:"Penal Ortega"},
    {name:"You're a fed"},
    {name:"#engagement"},
    {name:"You're Suresh's least favorite."},
    {name:"Stale end piece of white bread."},
    {name:"Unlit candle."},
    {name:"Uncooked pasta."},
    {name:"You're a limp noodle."},
    {name:"You're like the weird piece of hair I found in my mouth.Unwanted and gross."},
    {name:"You unsalted almond."},
    {name:"You wack legume."},
    {name:"Wack butt."},
    {name:"Procrasinate your life away. It's the only thing you're good at."},
    {name:"I would kick you out of my village as soon as you move in."},
    {name:"You're the person that always picks widowmaker when we don't need a sniper."},
    {name:"You're a bad dps."},
    {name:"You're a bad healer."}, 
    {name:"You're low tier."},
    {name:"You're a bootleg nordstrom rack. You're a Marshalls."},
    {name:"Not even facebook wants your data."},
    {name:"You're a virgin who can't drive."},
    {name:"You're a broken charging cable. Useless and Unwanted."},
    {name:"Dingus."},
    {name:"Dingbat."},
    {name:"You have a ph of 14."},
    {name:"No need to repeat yourself. I ignored you the first time."},
    {name:"Everytime you speak I lose one braincell."},
    {name:"I don't have the energy to pretend to like you."},
    {name:"I don't hate you. I'm not excited about your existence either though."},
    {name:"I would make a joke about your life but I see life already beat me to it."},
    {name:"You're so fake that Barbie is jealous."},
    {name:"You're the reason people think genocide is a good thing."},
    {name:"Shut up you background character!"},
    {name:"Why did natural selection not get to you yet?"},
    {name:"Trump's hands are bigger than yours."},
    {name:"You're more disappointing than an unsalted pretzel."},
    {name:"You're so annoying you make a happy meal cry."},
    {name:"Hold on. I'm trying to imagine you with a personality."},
    {name:"I'm not insulting you. I'm describing you."},
    {name:"Keep rolling your eyes. You might find your brain."},
    {name:"Your mother was a mistake and your father was a disappointment.You keep up the family legacy."},
    {name:"I thought of you today. It reminded me to take out the trash."},
    {name:"Don't worry about me. Worry about your eyebrows."},
    {name:"You're the human version of period cramps."},
    {name:"If you're going to be two-faced at least make one of them pretty."},
    {name:"Impresonating Beyonce is not your destiny,child."},
    {name:"Your birth certificate is an apology letter from the condom factory."},
    {name:"You're a boot licking Nazi."},
    {name:"You're a fart sniffing goblin."},
    {name:"ButterFace."},
    {name:"Idiot Sandwhich."},
    {name:"You suck so much that even a canadian would insult you."},
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