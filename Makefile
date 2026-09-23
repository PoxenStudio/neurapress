.PHONY: all build-multiarch setup-multiarch

BRANCH := $(shell git branch --show-current)
IMAGE := poxenstudio/neurapress:$(BRANCH)
LATEST_IMAGE := poxenstudio/neurapress:latest
BUILDER ?= shukubuilder
PLATFORMS ?= linux/amd64,linux/arm64

$(info Building image: $(IMAGE))
$(info Also tagging: $(LATEST_IMAGE))
$(info Platforms: $(PLATFORMS))

all: build-multiarch

setup-multiarch:
	docker buildx create --use --name $(BUILDER) || docker buildx use $(BUILDER)
	docker buildx inspect $(BUILDER) --bootstrap

build-multiarch:
	docker buildx build --pull --platform=$(PLATFORMS) \
		--builder $(BUILDER) \
		-f docker/Dockerfile.prod \
		-t $(IMAGE) \
		-t $(LATEST_IMAGE) \
		--load .
