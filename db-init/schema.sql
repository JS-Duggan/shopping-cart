-- Enable the uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS inventory_service;

CREATE TABLE IF NOT EXISTS inventory_service.products (
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    sku TEXT NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS inventory_service.products (
    id BIGSERIAL PRIMARY KEY,
    sku TEXT NOT NULL,
    delta INT NOT NULL,
    reason TEXT NOT NULL
);
