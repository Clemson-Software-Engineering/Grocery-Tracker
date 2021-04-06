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
```
##### Powershell
```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
##### Docker
Currently you have to run docker-compose for the mongoDB. Later we'll Dockerize the production Next.js code and the Deno server, and this'll be the only thing you have to run.
```bash
cd Docker
docker-compose up
```
##### Server
```bash
cd Grocery-Tracker
deno run --allow-net server.ts
```
##### Production
```bash
cd ../nextjs
npm install
npm run build
npm start
```
##### Development
```bash
cd ../nextjs
npm install
npm run dev
```

Go to http://localhost:3000 after it is finished running and you should see our homepage  
You should also see Mongo-express at http://localhost:8081

### Testing

## How to Contribute
* We are always welcome to more contribution. If you are interested in being a contributer, please check out our issues section and look for "good first issue". Read [[Contributing Guidlines]](CONTRIBUTING.md), and [[Code of Conduct]](CODE_OF_CONDUCT.md). Take a look at [Getting Started](getting-started) to set up environment.
	
## Plans
* Environment: Docker
* Back end: Docker + Deno + Oak
* Front end: Next.js + React + BulmaCSS

Initial Launch projected for May 1. Will be continuously developed and integrated.

## Developers

| Name | Role | Email |
| :---:  |  :---:   | :---: |
|Jeff | Full Stack + DevOps| jwng@clemson.edu |
|Lee Jackson | Back End, Graphic Design| ldjacks@g.clemson.edu |
|Atik Enam | Back End | menam@g.clemson.edu |
