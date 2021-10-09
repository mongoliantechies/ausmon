.PHONY: init
init:
	./scripts/init.sh


.PHONY: start
start:
	cd frontend && npm start

.PHONY: build
build:
	cd frontend && npm run build