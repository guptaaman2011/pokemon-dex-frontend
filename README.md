# Pokemon Dex Frontend
This repository contains code for Pokemon Dex Frontend

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* Node
* Yarn 
  
### Installing
Get a copy of the code
```
git clone git@github.com:guptaaman2011/pokemon-dex-frontend.git
```

#### Install dependencies
```
cd pokemon-dex-frontend
yarn install
```

#### Running the App
Run this command, and it'll start a development server on port 3000
```
yarn start
```


### Running the test cases
```
yarn test
Test setup is done with enzyme - jest along with snapshot testing
```
Run following command for coverage
```
yarn coverage
```

### Linting and Hooks configuration
```
App is configured with best practices of eslint, husky hooks along with other common practices to make sure code is clean
```

### Compiling the app
```
yarn build
```
It'll create an optimised build in __build__ directory

### Scope Done
```
Create a web application to list all Pokémon and show paginated results
• User should be shown the Pokémons in a card-based layout (click to see best practices) - Done in given time
• Each card should contain the image of the Pokémon - Done in given time
o Name
o Height
o Weight
o List of abilities.
• User should have option to choose the number of cards available per page available
options are 10, 20 and 50  - Done in given time
• User should be shown previous and next links - on both the top
and the bottom of the page  - Done in given time
• User should be able to search through the Pokémon list using the name and abilities  - Done in given time
• User should be able to sort the result by name, height and weight.  - Done in given time

• Page refresh should maintain the sorting and search related data. - Could Not Do in given time
• User should be taken to the details page and present all the information available for
that Pokémon. The user should have a link to go back to the previous page. - Could Not Do in given time
```

## Contributing
Changes must be provided via Pull Request in Github.
