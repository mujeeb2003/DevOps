# LEMP Stack Docker Application

This repository contains a Docker-based LEMP (Linux, Nginx, MySQL, PHP) stack application. It provides a quick and easy way to set up a development environment for PHP applications using Nginx as the web server and MySQL as the database.

## Getting Started

To get started with this LEMP stack application, follow these steps:

1. Ensure you have Docker and Docker Compose installed on your system.

2. Clone the repository:

    ```
    git clone https://github.com/faisikhan/lemp.git
    ```

3. Navigate to the cloned directory:

    ```
    cd lemp
    ```

4. Build the Docker image:

    ```
    docker-compose build
    ```

5. Run the Docker containers:

    ```
    docker-compose up -d
    ```

6. Access your application at `http://localhost`.

## Repository URL

You can find the source code and contribute to this project at:
[https://github.com/faisikhan/lemp](https://github.com/faisikhan/lemp)

## Features

-   Nginx web server
-   PHP-FPM
-   MySQL database
-   PHPMyAdmin for database management

For more details on configuration and usage, please refer to the documentation in the repository.
