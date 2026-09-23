.PHONY: all build build-multiarch setup-multiarch

BRANCH := $(shell git branch --show-current)
IMAGE := poxenstudio/neurapress:$(BRANCH)
LATEST_IMAGE := poxenstudio/neurapress:latest
BUILDER ?= shukubuilder
PLATFORMS ?= linux/amd64,linux/arm64

$(info Building image: $(IMAGE))
$(info Also tagging: $(LATEST_IMAGE))

all: build-multiarch

# 仅构建当前系统架构的镜像（不指定 --platform 时默认为本机架构）
build:
	docker build --pull \
		-f docker/Dockerfile.prod \
		-t $(IMAGE) \
		-t $(LATEST_IMAGE) .

setup-multiarch:
	docker buildx create --use --name $(BUILDER) || docker buildx use $(BUILDER)
	docker buildx inspect $(BUILDER) --bootstrap

build-multiarch:
	@echo "Platforms: $(PLATFORMS)"
	docker buildx build --pull --platform=$(PLATFORMS) \
		--builder $(BUILDER) \
		-f docker/Dockerfile.prod \
		-t $(IMAGE) \
		-t $(LATEST_IMAGE) \
		--load .
