# Project-2-App-Backend


Project Overview

You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding Saturday and Sunday.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

Project Description:

My project is an insult library. The app will give you insults to save and use whenever you need. You can add your own special insults and even delete insults you dont think are good.





Time/Priority Matrix:
https://docs.google.com/document/d/1g1Dkl219LceOq23c6gRdRyHKNW-CoQ2rGLBQwcJtRs4/edit?usp=sharing


MVP 

Frontend connected to Backend

Allow user to add favorite insults

Save their choices in list on seperate page

A button for new insult

A button to save insults

A button to lead to the library of insults

log in function to save insults


PostMVP

Slider for a clean insult version

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Frontend/Backend connection | H | 8hr | 4hr | 5hr|
| Save insult function| H | 8hr | 3hr | 3hr|
| button to randomize new insult| M | 6hr | 5hr | 5hr|
| Delete insult function | M | 6hr | 7hr | 7hr|
|Second model schema | M | 6hr | 1hr | 1hr|




#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Dirty version slider functioning | L | 6hr | -hr | -hr|
| Adding users  | L | 6hr | 4hr | 4hr|
| Library refreshing on different page| L | 6hr | -hr | -hr|


Additional Libraries
N/A



Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description

This code snippet is my seed of insults that I really wanted to try to work to better understand the point of seeding and a database.

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


Issues and Resolutions
Use this section to list of all major issues encountered and their resolution.

This code snippit I kept having issues with because of trying to remember the constistant way I labeled my constant. It kept changing and I had to keep typing signin multiple ways to find the right way where it would register with the way it was in in app.js

const db = require("../db/")
const Signins = require("../Models/Signin.js")


//Index which will get all insults
const index = async (request,response) => {
    try {
    const allsignIn = await Signins.find({})
    console.log(allsignIn);
    response.status(200).json(allsignIn)
    
    }
    catch(error){
        response.status(400).send(error)
    }
}

