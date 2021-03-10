# Grocery Tracker
The current vision for this project is a free open-source web application that keeps inventory on the food you have in your home and will suggest if you need anything to buy. The goal of this project is to make grocery lists quickly and easily or plan out recipes no matter where you are. Since you know your inventory, this could be done at your home, your office, or even the grocery store. 

## Table of contents
* [Functionalities](#functionalities)
* [Getting Started](#getting-started)
* [How to Contribute](#how-to-contribute)
* [Plans](#plans)
* [Developers](#developers)

## Functionalities
* Tell you the amount of each product you have
* Search specific products
* View all the products in the inventory (using different filters)
* Products you are low on or completely out of can be automatically transferred to your grocery list
* Add or remove products from the grocery list  

## Getting Started
### Requirements

### Clone the Repo
```bash
git clone https://github.com/Clemson-Software-Engineering/Grocery-Tracker.git
```
If you plan to use Docker, skip to [here](#docker)
### Set Up
##### Linux/Mac
```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
deno install -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.1/cli.ts
```
##### Powershell
```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
deno install -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.1/cli.ts
```
### Docker
```bash
cd Docker
docker-compose up
```
Go to http://localhost:8080 after it is finished running and you should see hello aleph app
You should also see Mongo-express at http://localhost:8081
### Development
```bash
aleph dev aleph
```
You should see the running app at http://localhost:8080
### Testing

## How to Contribute
* We are always welcome to more contribution. If you are interested in being a contributer, please check out our issues section and look for "good first issue". Read [[Contributing Guidlines]](CONTRIBUTING.md), and [[Code of Conduct]](CODE_OF_CONDUCT.md). Take a look at [Getting Started](getting-started) to set up environment.
	
## Plans
* Environment: Docker
* Back end: Docker + Deno
* Front end: Typescript + BulmaCSS

Initial Launch projected for May 1. Will be continuously developed and integrated. Serve database at port 5000. 

## Developers

| Name | Role | Email |
| :---:  |  :---:   | :---: |
|Jeff | Full Stack + DevOps| jwng@clemson.edu |
|Lee Jackson | Back End, Graphic Design| ldjacks@g.clemson.edu |
|Atik Enam | Back End | menam@g.clemson.edu |
