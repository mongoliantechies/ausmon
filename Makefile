.PHONY: init
init:
	./scripts/init.sh


.PHONY: start
start:
	cd frontend && npm start

.PHONY: build
build:
	cd frontend && npm run build

.PHONY: test
test:
	cd frontend && npm test

.PHONY: deploy
deploy:
	make build
	aws s3 sync frontend/build/ s3://www.ausmon.org.au
