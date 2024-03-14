--- Tags

DROP TABLE IF EXISTS arch.tag CASCADE;
DROP INDEX IF EXISTS idx_arch_tag CASCADE;

CREATE TABLE arch.tag (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE,
    owner_id INT NOT NULL REFERENCES arch.user(id)
);

CREATE UNIQUE INDEX idx_arch_tag ON arch.tag(lower(name));

