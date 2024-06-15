#!/bin/bash
set -e

# Create the database user and database
psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
    CREATE USER c4gt WITH PASSWORD 'c4gt';
    CREATE DATABASE atul;
    GRANT ALL PRIVILEGES ON DATABASE c4gt TO c4gt;
EOSQL
