# Gamechange

##### Meraj Ahamd Siddiqui, merajsiddiqui@outlook.com
##### https://www.merajsiddiqui.github.io

Environment :
```
node v8.10.0
yarn 1.21.1
mongo 4.2.3
```
  - Create/Upload User API
  - Login User API
  
 ## Setup
```
git clone https://github.com/merajsiddiqui/gamechange.git
cd gamechange
yarn install
yarn run build # to start build the process
yarn run start # to start serving the api
```
### Edit configuration
`/config/app.conf`
- Provide the configurations as needed, Just in this case s3 has dummy data
```
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;               Microservice APP configuration                        ;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

[app]
port= 3000
environment=development
;environment=production
;environment=debug

[mongo]
host=localhost
port=27017
username=
password=

[mysql]
host=localhost
port=27017
username=
password=

[apm]
url=

[plugins_enable]
logging=true
monitoring=true
healthcheck=true

[s3]
ACCESS_KEY_ID=abc
SECRET_ACCESS_KEY=tets_secrey
````

This api is build on boilerplate developed by Meraj Ahmad Siddiqui
https://github.com/merajsiddiqui/microservice-boilerplate.git
