DROP SCHEMA IF EXISTS arch CASCADE;
CREATE SCHEMA arch;

---

CREATE TABLE arch.user (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(80) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    name VARCHAR(120) NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT false
);

