# MCF Base System
This repository contains a base development environment with central services for the MyCareersFuture project.

## Requirements

- Docker
- Docker Compose

## Usage

### This Repository
1. Clone this repository to your local drive
1. Spin up the base components by running:
  1. `make dev` if you're a developer
  1. `make ops` if you're doing devops/ops
1. If the above ran well, append a `.d` behind it to background the tasks
  1. `make dev.d` if you're a developer
  1. `make ops.d` if you're doing devops/ops
1. To create a shell into any container, use `make exec SVC="${SERVICE_ID}"` where `${SERVICE_ID}` is the ID of the listed service in the `./docker-compose.yml` file
1. To view the logs for any container,  use `make logf SVC="${SERVICE_ID}"` where `${SERVICE_ID}` is the ID of the listed service in the `./docker-compose.yml` file
1. For shutting down the base system, use `make down`
1. To clear all data stored locally, use `make clean`

### Using The Central Services
1. Reference the Docker network named `mcf`: do this by adding the following into your project's `./docker-compose.yml`:
```yaml
networks:
  mcf:
    external: true
```

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

The following is a table to access all the local services once you have run `make (dev|ops)(.d)`. `dev` is a complete subset of `ops`, so whatever is in `dev` is also ran in `ops`.

| Service | URL | User Type |
| --- | --- | --- |
| AlertManager | [http://localhost:9093](http://localhost:9093) | `ops` |
| DB-Maker | [http://localhost:2222](http://localhost:2222) | `dev` |
| ElasticSearch (REST API) | [http://localhost:9200](http://localhost:9200) | `ops` |
| ElasticSearch (Node Coomunication) | [http://localhost:9300](http://localhost:9300) | `ops` |
| ElasticSearch Exporter | [http://localhost:9108](http://localhost:9108) | `ops` |
| FluentD | [http://localhost:24224](http://localhost:24224) | `ops` |
| FluentD Exporter | [http://localhost:24231](http://localhost:24231) | `ops` |
| Grafana | [http://localhost:13000](http://localhost:13000) | `ops` |
| Kibana | [http://localhost:5601](http://localhost:5601) | `ops` |
| MySQL | [http://localhost:3306](http://localhost:3306) | `dev` |
| MySQL Exporter | [http://localhost:9104](http://localhost:9104) | `ops` |
| Prometheus | [http://localhost:9090](http://localhost:9090) | `ops` |
| Pulse | [http://localhost:54545](http://localhost:54545) | `dev` |
| Redis | [http://localhost:6379](http://localhost:6379) | `dev` |
| Redis Exporer | [http://localhost:9121](http://localhost:9121) | `ops` |
| Zipkin | [http://localhost:9411](http://localhost:9411) | `ops` |

# Cheers
