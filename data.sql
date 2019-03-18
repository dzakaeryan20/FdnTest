

CREATE TABLE datafd(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR,
    email VARCHAR,
    item VARCHAR,
    quantity INTEGER,
    total_price DECIMAL       
);

INSERT INTO datafd (id,fullname,email,item,quantity,total_price)
VALUES (1,'DzakaEryan','dzakaeryan20@gmail.com','Barang1',2,1000000),
       (2,'RedzaEryan','redzaeryan@gmail.com','Barang2',2,500000),
       (3,'NoufalEryan','neryan@gmail.com','Barang3',1,250000),
       (4,'AgusSUherman','agus@gmail.com','Barang3',1,5000),
       (5,'ArtheMaskur','arthee@gmail.com','Barang5',1,500000),
       (6,'Jerinx','jerinx@gmail.com','Barang6',3,5000000),
       (7,'AnangHermansyah','anang@gmail.com','Barang5',5,1500000),
       (8,'Heryanto','eryan@gmail.com','Barang2',2,1000000),
       (9,'Maulina','maueryan@gmail.com','Barang10',2,500000),
       (10,'AndraEryan','andraeryan@gmail.com','Barang9',2,500000),
       (11,'AndraEryan','andraeryan@gmail.com','Barang2',2,500000);

