# Olympics Analytics API

This is the final project of module 4 of the Turing School of Software and Design. The purpose of the project was to simulate a take home challenge from a company as part of the interview process. 

> Thank you for taking the time to apply to our Junior Developer position here at Koroibos. Our company is currently working to build a live Olympic Analytics tracker for the 2020 Summer Games. As part of our application, we want to include historical data from the 2016 Summer Olympics. We have provided you a sample of the data here. For your technical challenge, we would like to see you use this data to build out some analytical endpoints using Node and Express. We have provided specifications for the endpoints that we are looking for, and would love to see your initiative for any other endpoints you think could provide interesting data analysis. We will meet on Wednesday to discuss your process, decisions, and code quality. Looking forward to our review!

The specific requirements can be found [here](https://github.com/dionew1/backend-curriculum-site/blob/gh-pages/module4/projects/take_home_challenge/prompts/olympic_spec.md). 


## Endpoints

### 1. Get all Olympians

```
GET api/v1/olympians
```

<details>
  <summary>Example response</summary>
  
 ```json
 {
    "olympians": [
        {
            "name": "Amanda Elmore",
            "team": "United States",
            "age": 25,
            "sport": "Rowing",
            "total_medals_won": "1"
        },
        {
            "name": "Gbor Gyula Boczk",
            "team": "Hungary",
            "age": 39,
            "sport": "Fencing",
            "total_medals_won": "0"
        },
        {
            "name": "Lauren Billys",
            "team": "Puerto Rico",
            "age": 28,
            "sport": "Equestrianism",
            "total_medals_won": "0"
        },
        {
            "name": "Daniel Estrada Coz",
            "team": "Chile",
            "age": 26,
            "sport": "Athletics",
            "total_medals_won": "0"
        },
        {
            "name": "Du Li",
            "team": "China",
            "age": 34,
            "sport": "Shooting",
            "total_medals_won": "2"
        },
        {
            "name": "Domonic Bedggood",
            "team": "Australia",
            "age": 21,
            "sport": "Diving",
            "total_medals_won": "0"
        },
        {
            "name": "Nazeli \"Nazik\" Avdalyan",
            "team": "Armenia",
            "age": 29,
            "sport": "Weightlifting",
            "total_medals_won": "0"
        },
        {
            "name": "Pieter \"Piet\" Bulling",
            "team": "New Zealand",
            "age": 23,
            "sport": "Cycling",
            "total_medals_won": "0"
        },
        {
            "name": "Grgory Bourdy",
            "team": "France",
            "age": 34,
            "sport": "Golf",
            "total_medals_won": "0"
        },
        {
            "name": "Charlotte Dobson",
            "team": "Great Britain",
            "age": 30,
            "sport": "Sailing",
            "total_medals_won": "0"
        },
        {
            "name": "Timothy Ernest Victor Kwizera \"Tim\" Agaba",
            "team": "South Africa",
            "age": 27,
            "sport": "Rugby Sevens",
            "total_medals_won": "1"
        },
        {
            "name": "Charles Albert Shone Conwell",
            "team": "United States",
            "age": 18,
            "sport": "Boxing",
            "total_medals_won": "0"
        },
        {
            "name": "Abhinav Bindra",
            "team": "India",
            "age": 33,
            "sport": "Shooting",
            "total_medals_won": "0"
        },
        {
            "name": "Alejandro \"lex\" Abrines Redondo",
            "team": "Spain",
            "age": 23,
            "sport": "Basketball",
            "total_medals_won": "1"
        },
        {
            "name": "Nenad Beik",
            "team": "Serbia",
            "age": 27,
            "sport": "Rowing",
            "total_medals_won": "0"
        },
        {
            "name": "Andrew Charter",
            "team": "Australia",
            "age": 29,
            "sport": "Hockey",
            "total_medals_won": "0"
        },
        {
            "name": "Msipa Emmaculate",
            "team": "Zimbabwe",
            "age": 24,
            "sport": "Football",
            "total_medals_won": "0"
        },
        {
            "name": "James \"Jimmy\" Connor",
            "team": "Australia",
            "age": 21,
            "sport": "Diving",
            "total_medals_won": "0"
        },
        {
            "name": "Ccilia Berder",
            "team": "France",
            "age": 26,
            "sport": "Fencing",
            "total_medals_won": "0"
        }
       ]
 
 ```
  </details>
  
  
  ### 2. Get youngest olympian
  
  ```
  GET api/v1/olympians?age=youngest
  ```


<details>
  <summary>Example response</summary>
  
  
  ```json
  [
    {
        "name": "Ana Iulia Dascl",
        "age": 13,
        "total_medals_won": "0",
        "sport.name": "Swimming",
        "team.name": "Romania"
    }
]
  
  ```
  </details>
  
  
  ### 3. Get oldest olympian 
  
  ```
  
  GET api/v1/olympians?age=oldest
  ```
  <details>
  <summary>Example response</summary>
  
  
  ```json
 [
    {
        "name": "Julie Brougham",
        "age": 62,
        "total_medals_won": "0",
        "sport.name": "Equestrianism",
        "team.name": "New Zealand"
    }
]
  
  ```
  </details>
  
  ### 4. Get statistics about olympians
  
  ```
  GET api/v1/olympian_stats
  ```
  
  <details>
  <summary>Example response</summary>
  
  ```json
  {
    "olympian_stats": {
        "total_competing_olympians": 2850,
        "average_weight": {
            "unit": "kg",
            "male_olympians": 79.4,
            "female_olympians": 62.7
        },
        "average_age": 26.4
    }
}
  
  ```
  </details>
  
  
  ### 5. Get all the events by sport
  
  ```
  GET api/v1/events
  ```
  
   <details>
    <summary>Example response</summary>
  
  ```json
    {
    "events": [
        {
            "sport": "Archery",
            "events": [
                "Archery Men's Individual",
                "Archery Men's Team",
                "Archery Women's Individual",
                "Archery Women's Team"
            ]
        },
        {
            "sport": "Athletics",
            "events": [
                "Athletics Men's 10,000 metres",
                "Athletics Men's 100 metres",
                "Athletics Men's 110 metres Hurdles",
                "Athletics Men's 1,500 metres",
                "Athletics Men's 200 metres",
                "Athletics Men's 20 kilometres Walk",
                "Athletics Men's 3,000 metres Steeplechase",
                "Athletics Men's 400 metres",
                "Athletics Men's 400 metres Hurdles",
                "Athletics Men's 4 x 100 metres Relay",
                "Athletics Men's 4 x 400 metres Relay",
                "Athletics Men's 5,000 metres",
                "Athletics Men's 50 kilometres Walk",
                "Athletics Men's 800 metres",
                "Athletics Men's Decathlon",
                "Athletics Men's Discus Throw",
                "Athletics Men's Hammer Throw",
                "Athletics Men's High Jump",
                "Athletics Men's Javelin Throw",
                "Athletics Men's Long Jump",
                "Athletics Men's Marathon",
                "Athletics Men's Pole Vault",
                "Athletics Men's Shot Put",
                "Athletics Men's Triple Jump",
                "Athletics Women's 10,000 metres",
                "Athletics Women's 100 metres",
                "Athletics Women's 100 metres Hurdles",
                "Athletics Women's 1,500 metres",
                "Athletics Women's 200 metres",
                "Athletics Women's 20 kilometres Walk",
                "Athletics Women's 3,000 metres Steeplechase",
                "Athletics Women's 400 metres",
                "Athletics Women's 400 metres Hurdles",
                "Athletics Women's 4 x 100 metres Relay",
                "Athletics Women's 4 x 400 metres Relay",
                "Athletics Women's 5,000 metres",
                "Athletics Women's 800 metres",
                "Athletics Women's Discus Throw",
                "Athletics Women's Hammer Throw",
                "Athletics Women's Heptathlon",
                "Athletics Women's High Jump",
                "Athletics Women's Javelin Throw",
                "Athletics Women's Long Jump",
                "Athletics Women's Marathon",
                "Athletics Women's Pole Vault",
                "Athletics Women's Shot Put",
                "Athletics Women's Triple Jump"
            ]
        },
        {
            "sport": "Badminton",
            "events": [
                "Badminton Men's Doubles",
                "Badminton Men's Singles",
                "Badminton Mixed Doubles",
                "Badminton Women's Doubles",
                "Badminton Women's Singles"
            ]
        }
       ]
       }
  ```
  </details>
  
  ### 6. Get the medalists for a specific event
  
  ```
  GET api/v1/events/:id/medalists
  ```
  Gets the medalists for the event with the id given in the parameters. 
  
  <details>
   <summary>Example</summary>
  
 ```
  GET api/v1/events/5/medalists
 ```
  
  #### Response:
  
  ```json
  {
    "event": "Basketball Women's Basketball",
    "medalists": [
        {
            "name": "Seimone Delicia Augustus",
            "team": "United States",
            "age": 32,
            "meda": "Gold"
        },
        {
            "name": "Elena Delle Donne",
            "team": "United States",
            "age": 26,
            "meda": "Gold"
        },
        {
            "name": "Slvia Domnguez Fernndez",
            "team": "Spain",
            "age": 29,
            "meda": "Silver"
        }
    ]
}
  
  ```
  </details>

  

  
  


