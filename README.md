# Full Stack Application Dockerization and CI Pipeline

## Overview
This repository contains a fully dockerized full stack application with a CI Pipeline set up using GitHub Actions. The application includes frontend, backend, and necessary services like PostgreSQL and Redis, all managed through Docker containers.

## Steps Completed
1. **Forked the Repository**
   - Forked the initial repository to my GitHub account.

2. **Containerized all components**:
   - Dockerized the frontend and backend components.
   - Ensured all services (frontend, backend, PostgreSQL, Redis) are configured to run as Docker containers.

3. **Implemented GitHub Actions**:
   - Created a GitHub Actions workflow (`docker-image.yml`) that automatically builds Docker images for each component on push to the `main` branch.
   - Pushed the built images to GitHub Packages for easy distribution and versioning.

4. **Added docker-compose.yml**:
   - Created a `docker-compose.yml` at the root level of the repository.
   - Configured `docker-compose.yml` to use Docker images from GitHub Packages.
   - Included services required to run the project locally, such as frontend, backend, PostgreSQL, and Redis.

## Expectations Met
- Utilized Git properly with multiple commits at different stages to maintain version history and demonstrate progress.
- Followed best practices when creating Dockerfiles, ensuring they are efficient, clean, and secure.
- Updated the `README.md` file with clear instructions on how to clone, build, and run the project locally using Docker Compose.

## Running the Application

### Prerequisites
- Docker
- Docker Compose

### Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/AtulRajput01/sample-fullstack-application.git
   cd sample-fullstack-application

## Create a .env File

- Create a .env file in the root directory of the project with the following content. Adjust the values as per your environment:

```sh
POSTGRES_USER=c4gt
POSTGRES_PASSWORD=c4gt
POSTGRES_DB=c4gt
DATABASE_URL=postgresql://c4gt:c4gt@postgres:5432/c4gt
REDIS_URL=redis://redis:6379
```

## Build and Run the Application

Run the following command to build the Docker images and start the application:

```sh
sudo docker-compose up --build
```

![Screenshot from 2024-06-16 07-56-23](https://github.com/AtulRajput01/sample-fullstack-application/assets/92659293/fc2a9400-a864-42db-98c9-b303ae2e945a)


