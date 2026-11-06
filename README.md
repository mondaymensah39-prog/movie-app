
# Movie App (React)
A react app that searches movies from the OMDb public API. Users can filter results by type, sort them and view each movie as a card.

Live link: [https://mondaymensah39-prog.github.io/movie-app/]
Resipotory: [https://github.com/mondaymensah39-prog/movie-app]

# Features
- Search for movie by title
- Show aloading message and error message
- Filter results by type (All, Movies, Series)
-Sort results by title (A-Z) or year (newest first)
-Display each movie as a reusable card
- Show a grey placeholder when a poster is missing

## Tools Used
-React
-Vite
-JavaScript (ES module)
-CSS
-OMDb API

## Componenet Structure
The has one parent component and three child components.

Parent: `App.jsx` 

-`App` holds all the state:
-`query`: the text in the search box
-`movies`: the list of results from the API
-`status`: the message under the search box
-`isLoading`: whether a search is in progress
-`typeFilter`: the selected type (All. Movies, or Series)
-`sortOder`: the selected sort order

`App` also contains the search function, which calls the API, and it passes data and function down to its children.

Child: `SearchBar`
Receives these props:

-`value`: the current searchtext, shown in the input
-`onChange`: a function that sends new text back to the `App`
-`0nSubmit`: a function that tells `App` to start a search

Child: `FilterControl`
Receives these props:

-`typeFilter`: the currently selected type
-`sortOrder`: the currently selected sort order
-`onTypeChange`: a function that tells `App` a new type was chosen
-`onSortChange`: a function that tells `App` a new sort order was chosen

Child: `MovieCard`
Receives thse props:

-`movie`: one movie subject, which it display as a tilte, year, and type
`App` renders one `MovieCard` for each movie in the visible list

## Project tructure

```
movie-app/
|-- src/
    `-- components/
    |-- FilterControl.jsx       (type and sort button)
    |-- MovieCard.jsx           (one moviec ard)
    `-- SearchBar.jsx           (search input and button)
    |-- api.js             (fetches data from the OMDb API)
    |-- App.jsx            (parent component: holds state)
    |-- filter.js          (filters and sort results)
    |-- main.jsx           (starts react and loads App)
    `--style.css            (style for the whole app)
    |-- indext.html
    |-- package.json
    `-- README.md
```

## How Data Flows

When a user types, `SearchBar` calls `onChange`, and `App` updates `query`. When the user seraches, `App` calls the API and stores the results in `movies`. When the user changes a dropdown, `App` updates `typeFilter` or `sortOder`. The visible list is calculated from `movies`, `typeFilter`, and `sortOrder` on every redraw, so it always matches the cureent choice.

## How To Run Locally

1. Clone the reprository
2. Open the project folder in VS Code
3. Run `npm intsall` in the terminal
4. Get a free PI key from omdbapi.com and paste into `src/api.js`
5. Run `npm run dev`, then open the address shown in the terminal (usually `https://localhost:5173/`)

# Notes
The API key is visible in the front-end code, which is accepted for this free learning project