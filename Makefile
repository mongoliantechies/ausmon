.PHONY: init
init:
	./scripts/init.sh

.PHONY: install
install:
	cd frontend && npm install

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


.PHONY: deploy-testing
deploy-testing:
	make build
	aws s3 sync frontend/build/ s3://testing.ausmon.org.au
