# make up spins up the set of central services
up:
	USER_ID=$$(id -u $$(whoami)) docker-compose up -V --build ${SVC}

# make up spins up the set of central services and backgrounds it
upd:
	USER_ID=$$(id -u $$(whoami)) docker-compose up -V --build ${SVC}

# make exec creates a shell into the service specified by SVC
exec:
	docker exec -it mcf_central_${SVC} /bin/sh

# make logf displays logs for the service specified by SVC
logf:
	docker logs -f mcf_central_${SVC}

# make down spins down the set of central services
down:
	USER_ID=$$(id -u $$(whoami)) docker-compose down

# make clean clears all data stored on your local machine
clean:
	sudo rm -rf ./data/*/data/*
	USER_ID=$$(id -u $$(whoami)) docker-compose rm