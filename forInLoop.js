var anObject = {
    firstName:"Joe",
    lastName:"Coder",
    City:"San Luis Obispo",
    State:"California",
    Profession:"Web Developer",
    FavoriteMovie:"GhostBusters"
};

for(var key in anObject){
    console.log(key+":"+anObject[key]);
}

