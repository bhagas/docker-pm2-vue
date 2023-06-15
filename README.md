

secara default berjalan pada port 5000, bisa disesuaikan pada saat pembuatan container.

Build Image:
```
docker build -t nama_image .
```
buatlah directory VUE_SRC dan masukan project vue di dalamnya.
atau clone project VUE dan rename folder menjadi VUE_SRC
Jalankan container:

```
docker run -d -t -i -v /path/ke/VUE_SRC:/VUE_SRC -p 5000:5000 --name nama_container nama_image
```



untuk updating:
```
docker cp ./src nama_container:/
docker cp ./package.json nama_container:/
docker exec -it nama_container npm install
docker exec -w /VUE_SRC nama_container npm install --force
docker exec -w /VUE_SRC nama_container npm run build
docker exec -it nama_container pm2 reload all

```

untuk jenkins:
```
cd /path/ke/VUE_SRC; git pull origin main --allow-unrelated-histories
cd /path/ke/directory; docker cp ./src nama_container:/
cd /path/ke/directory; docker cp ./VUE_SRC nama_container:/
cd /path/ke/directory; docker cp ./package.json nama_container:/
cd /path/ke/directory; docker exec nama_container npm install
cd /path/ke/directory; docker exec -w /VUE_SRC nama_container npm install --force
cd /path/ke/directory; docker exec -w /VUE_SRC nama_container npm run build
cd /path/ke/directory; docker exec nama_container pm2 reload all
```

untuk monitoring:
```
docker exec -it nama_container pm2 monit
```

untuk list process berjalan:
```
docker exec -it nama_container pm2 list
```
