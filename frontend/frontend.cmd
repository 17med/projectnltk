docker build -t frontendjob .
docker tag frontendjob:latest 17med/jobportalfrontend:latest
docker push 17med/jobportalfrontend:latest