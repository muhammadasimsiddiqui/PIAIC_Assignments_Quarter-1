/*
Think of something you could store in a array. For example, you could make a list of 
mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.*/
let citiesInPakistan: string[] = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Gujranwala",
    "Peshawar",
    "Quetta"
  ];
  
  console.log("Major Cities in Pakistan:");
  //Here we are printing by two method:
  citiesInPakistan.forEach((a) => console.log("Major city by forEach() function: ",a));
  citiesInPakistan.map((a) => console.log("Major city by map() function : ",a));
