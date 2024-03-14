--- Component Tables
--- Components are features that are installed in Archistration for use in the main application

DROP TABLE IF EXISTS arch.component CASCADE;
DROP INDEX IF EXISTS idx_component_name CASCADE;

CREATE TABLE arch.component (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    source TEXT NOT NULL,
    install_date TIMESTAMP WITHOUT TIME ZONE,
    update_date TIMESTAMP WITHOUT TIME ZONE,
    owner_id INT NOT NULL REFERENCES arch.user(id)
);

CREATE INDEX idx_component_name ON arch.component(lower(name));

DROP TABLE IF EXISTS arch.component_instance CASCADE;

CREATE TABLE arch.component_instance (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    install_date TIMESTAMP WITHOUT TIME ZONE,
    update_date TIMESTAMP WITHOUT TIME ZONE,
    owner_id INT NOT NULL REFERENCES arch.user(id)
);

DROP TABLE IF EXISTS arch.component_instance_tag CASCADE;
DROP INDEX IF EXISTS idx_component_instance_tag CASCADE;

CREATE TABLE arch.component_instance_tag (
    id SERIAL NOT NULL PRIMARY KEY,
    tag_id INT NOT NULL REFERENCES arch.tag(id),
    component_instance_id INT NOT NULL REFERENCES arch.component_instance(id)
);

CREATE UNIQUE INDEX idx_component_instance_tag ON arch.component_instance_tag(tag_id, component_instance_id);

DROP TABLE IF EXISTS arch.component_config CASCADE;

CREATE TABLE arch.component_config (
    id SERIAL NOT NULL PRIMARY KEY,
    component_id INT NOT NULL REFERENCES arch.component(id),
    config JSON NOT NULL
);

DROP TABLE IF EXISTS arch.component_instance_config CASCADE;

CREATE TABLE arch.component_instance_config (
    id SERIAL NOT NULL PRIMARY KEY,
    component_instance_id INT NOT NULL REFERENCES arch.component_instance(id),
    config JSON NOT NULL
);

DROP TABLE IF EXISTS arch.component_instance_data CASCADE;

CREATE TABLE arch.component_instance_data (
    id SERIAL NOT NULL PRIMARY KEY,
    component_instance_id INT NOT NULL REFERENCES arch.component_instance(id),
    owner_id INT NOT NULL REFERENCES arch.user(id),
    parent_id INT REFERENCES arch.component_instance_data(id),
    date TIMESTAMP WITHOUT TIME ZONE,
    data JSON NOT NULL
);

DROP TABLE IF EXISTS arch.component_instance_data_tag CASCADE;
DROP INDEX IF EXISTS idx_component_instance_data_tag CASCADE;

CREATE TABLE arch.component_instance_data_tag (
    id SERIAL NOT NULL PRIMARY KEY,
    component_instance_data_id INT NOT NULL REFERENCES arch.component_instance_data(id),
    tag_id INT NOT NULL REFERENCES arch.tag(id),
    owner_id INT NOT NULL REFERENCES arch.user(id)
);

CREATE UNIQUE INDEX idx_component_instance_data_tag ON arch.component_instance_data_tag(component_instance_data_id, tag_id);
