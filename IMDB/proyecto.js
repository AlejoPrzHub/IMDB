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