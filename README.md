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
