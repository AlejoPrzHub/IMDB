export class Professional 
{

constructor(name,age,genre,weight,height,hairColor,eyeColor,race,isRetired,nacionality,oscarsNumber,profession)
{
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.weight = weight;
    this.height = height;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.race = race;
    this.isRetired = isRetired;
    this.nacionality = nacionality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;

}
    printAll()
    {
        console.group(Professional)
            console.log("Name - " + this.name);
            console.log("Age - " + this.age);
            console.log("Genre - " + this.genre);
            console.log("Weight - " + this.weight);
            console.log("Height - " + this.height);
            console.log("Hair color - " + this.hairColor);
            console.log("Eye color - " + this.eyeColor);
            console.log("Race - " + this.race);
            console.log("Is Retired? - " + this.isRetired);
            console.log("Nacionality - " + this.nacionality);
            console.log("Oscars Numbers - " + this.oscarsNumber);
            console.log("Profession - " + this.profession);
        console.groupEnd(); 
    }
}



export class Movie
{
    constructor(title,releaseYear,nacionality,genre)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.nacionality = nacionality;
        // this.director = director;
        // this.writer = writer;
        // this.language = language;
        // this.plataform = plataform;
        // this.isMCU = isMCU;
        // this.mainCharacterName = mainCharacterName;
        // this.producer = producer;
        // this.distributor = distributor;
        // this.actors = actors;
    }

    printAll()
    {
        console.group(Movie)
            console.log("Title - " + this.title);
            console.log("Release Year - " + this.releaseYear);
            console.log("Nacionality - " + this.nacionality);
            console.log("Genre - " + this.genre);
            // console.log("Actors - " + this.actors);
            // console.log("Director - " + this.director);
            // console.log("Writer - " + this.writer);
            // console.log("Language - " + this.language);
            // console.log("Plataform - " + this.plataform);
            // console.log("Is MCU? - " + this.isMCU);
            // console.log("Main Character Name - " + this.mainCharacterName);
            // console.log("Producer - " + this.producer);
            // console.log("Distributor - " + this.distributor);
        console.groupEnd();
    }
}

            
        