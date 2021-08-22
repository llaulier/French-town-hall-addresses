# french_town_hall_API

An API in order to find address of town hall in 36000 cities in France. Find by
matching with the postal code, the city or insee code. Usefull in order to
automate a mailing service, for example

Databases source for city table : Insee.

## Run stack for dev

### Start the stack for the first time

- (First installation) Install yarn with npm i -g yarn
- Install all dependencies with yarn install
- Init database with yarn db:init
- Migrate with yarn db:migrate
- Seed the database with yarn db:seed
- "yarn run" to start the API
