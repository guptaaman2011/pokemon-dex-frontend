# Pokemon Dex Frontend
This repository contains code for Pokemon Dex Frontend

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* Node v12.18.3
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


## Contributing
Changes must be provided via Pull Request in Github.