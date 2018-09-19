ARG KIBANA_VERSION=6.3.1
FROM docker.elastic.co/kibana/kibana:${KIBANA_VERSION}
ARG KIBANA_VERSION=6.3.1
RUN bin/kibana-plugin install https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/${KIBANA_VERSION}/kibana-prometheus-exporter-${KIBANA_VERSION}.zip
