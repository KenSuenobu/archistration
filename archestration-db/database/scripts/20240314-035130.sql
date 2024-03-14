--- Tags

DROP TABLE IF EXISTS arch.tags CASCADE;

CREATE TABLE arch.tags (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE,
    owner_id INT NOT NULL REFERENCES arch.user(id)
);

CREATE UNIQUE INDEX idx_arch_tags ON arch.tags(lower(name));

