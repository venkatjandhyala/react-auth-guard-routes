# This is the BUILD target, do not remove it, and do not modify it's name
webpack-build:
	yarn install
.PHONY: webpack-build

# This is the RUN target, do not remove it, and do not modify it's name
webpack-run:
	yarn start 2>&1 | tee -a $$LOG_TO &
.PHONY: webpack-run

# This is the STOP target, do not remove it, and do not modify it's name
webpack-stop:
	kill `ps auxf | grep 'node' | grep -v grep | awk '{print $$2}'` 2>/dev/null || true
.PHONY: webpack-stop

# This is the RESTART target, do not remove it, and do not modify it's name
webpack-restart: webpack-stop webpack-run
.PHONY: webpack-restart
