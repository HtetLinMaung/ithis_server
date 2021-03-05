FROM amd64/tomcat:8

WORKDIR /usr/local/tomcat/webapps

COPY Angular2.war .

RUN jar -xvf Angular2.war

CMD ["catalina.sh", "run"]