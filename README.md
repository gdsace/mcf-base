# MCF Base System
This repository contains a base development environment for the MyCareersFuture project.

## Requirements

- Docker
- Docker Compose

## Usage

1. Clone this repository to your local drive
1. Spin up the base components by running `make up`
1. If `make up` works fine and you wish to background it, use `make upd`
1. For shutting down the base system, use `make down`
1. To clear all data stored locally, use `make clean`

## What's Included

- Observability
  - AlertManager
  - Kibana
  - FluentD
  - Grafana
  - Prometheus
  - Zipkin
- Data Persistence
  - ElasticSearch
  - MySQL
  - Redis
- Custom Tools
  - DBMaker
  - Pulse

The following is a table to access all the local services once you have run `make up` or `make upd`:

| Service | URL |
| --- | --- |
| AlertManager | [http://localhost:9093](http://localhost:9093) |
| DB-Maker | [http://localhost:2222](http://localhost:2222) |
| ElasticSearch (REST API) | [http://localhost:9200](http://localhost:9200) |
| ElasticSearch (Node Coomunication) | [http://localhost:9300](http://localhost:9300) |
| ElasticSearch Exporter | [http://localhost:9108](http://localhost:9108) |
| FluentD | [http://localhost:24224](http://localhost:24224) |
| FluentD Exporter | [http://localhost:24231](http://localhost:24231) |
| Grafana | [http://localhost:13000](http://localhost:13000) |
| Kibana | [http://localhost:5601](http://localhost:5601) |
| MySQL | [http://localhost:3306](http://localhost:3306) |
| MySQL Exporter | [http://localhost:9104](http://localhost:9104) |
| Prometheus | [http://localhost:9090](http://localhost:9090) |
| Redis | [http://localhost:6379](http://localhost:6379) |
| Redis Exporer | [http://localhost:9121](http://localhost:9121) |
| Zipkin | [http://localhost:9411](http://localhost:9411) |

# Cheers
