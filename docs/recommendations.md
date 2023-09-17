Cafe Recommendation Algorithm


Plans are not final but here are the intial thoughts:

- Recommendation API should use Python. Speed should be enough for this project. ML ecosystem is good in Py. (Read into pandas)
- Consider using a mix of apis from companies like yelp, foursquare


Cafe Profile
Wifi
Ambience
Seating
Music
Water
Bathrooms
Order-Ahead

Coffee Profile
Origin 
Roast Type - Light Medium Dark
Specialty Drinks - T/F


Inputs
- Zipcode/General area of user
- Radius to search
- Cafe profile
- Coffee taste profile


Assume default object like this:

{
    uid: 48973248923742893, (user id)
    zipcode: 11101,
    radius: 25, (miles)
    cafe_profile: ["Wifi", "Music"],
    coffee_profile: {
        origin: ["Colombia"],
        roast: ["light","medium"],
        specialty_drinks: false
    }
}


Outputs
- List of cafes the user should consider from most to least likely to match taste profile

Output object example:

{
    uid: 48973248923742893, (user id)
    recommendations: [
        {
            name: "",
            address: "",
            likelihood: 100.00 (percent they'll like it/matches their profile),
            cafe_profile: ["Wifi", "Music"],
            coffee_profile: {
                origin: ["Colombia"],
                roast: ["light","medium"],
                specialty_drinks: false
            }
        }
    ]
}
