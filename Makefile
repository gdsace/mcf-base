# make up spins up the set of central services
# - run this if you're a developer
dev:
	$(MAKE) up SVC="pulse mysql redis db-maker"

# make up spins up the set of central services
# - run this if you're a developer
dev.d:
	$(MAKE) up.d SVC="pulse mysql redis db-maker"

# make up spins up the set of central services
# - run this if you're dev/ops
ops:
	$(MAKE) up

# make up.d spins up the set of central services and backgrounds it
# - run this if you're dev/ops
ops.d:
	$(MAKE) up.d

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

# make ega runs the example project-a
ega:
	cd ./example/project-a && docker-compose up --build

# make ega runs the example project-b
egb:
	cd ./example/project-b && docker-compose up --build

# make up spins up the set of central services
# * SVC: specify a set of services to run
up:
	USER_ID=$$(id -u $$(whoami)) docker-compose up -V --build ${SVC}

# make up.d spins up the set of central services and backgrounds it
# * SVC: specify a set of services to run
up.d:
	USER_ID=$$(id -u $$(whoami)) docker-compose up -V --build -d ${SVC}
