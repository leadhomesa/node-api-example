# NodeJS Api Example

## Requirements
- NodeJS (latest LTS should be fine)
- Docker (or your own MongoDB instance)

## Getting started
> You can skip this step if you're using your own MongoDB instance outside of Docker.
- Start up the MongoDB Docker container (this will run in the background).
  ```
  docker-compose up -d
  ```

- Copy the sample.env and update the `DB_URL` (if necessary -- if you're using Docker, leave it as is) and `PORT` values.
  ```
  cp sample.env .env
  ```
- Install npm depedencies.
  ```
  npm install
  ```
- Run the Api
  ```
  npm start
  ```

## Usage
- Open up [http://localhost:5000/api](http://localhost:5000/api) in your browser and you should see a page saying "API is running!".

- Return all listings
  ```
  GET /api/listing
  ```
- Return a specific listing
  ```
  GET /api/listing/:id
  ```
- Create a new listing
  ```
  POST /api/listing
  ```
  Example of request body
  ```
  {
    "name": "Best place ever",
    "address": "123 Main Road, Cape Town, South Africa",
    "imageUrl": "https://images.unsplash.com/photo-1533667586627-9f5ddbd42539"
  }
  ```
- Update a listing
  ```
  PUT /api/listing/:id
  ```
  Example of request body
  ```
  {
    "name": "Amazing view",
    "address": "123 Main Road, Johannesburg, South Africa",
    "imageUrl": "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
  }
  ```

Maintained by
----------------

[![logo](https://i.imgur.com/QH4yUje.png)](https://leadhome.co.za?utm_source=github)

This repo was created and is maintained by Leadhome Pty Ltd.<br />
The names and logos for Leadhome are trademarks of Leadhome Pty Ltd.
