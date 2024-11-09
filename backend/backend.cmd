docker build -t backendjob .
docker tag backendjob:latest 17med/jobportalbackend:test
docker push 17med/jobportalbackend:test