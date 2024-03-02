--- Create Rules Based Access Control (RBAC) tables

DROP TABLE IF EXISTS arch.permission CASCADE;
DROP INDEX IF EXISTS idx_arch_permission_name;

DROP TABLE IF EXISTS arch.role CASCADE;
DROP INDEX IF EXISTS idx_arch_role_name;

DROP TABLE IF EXISTS arch.role_permission CASCADE;
DROP TABLE IF EXISTS arch.user_role CASCADE;

CREATE TABLE arch.permission (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE
);

CREATE UNIQUE INDEX idx_arch_permission_name ON arch.permission(lower(name));

CREATE TABLE arch.role (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80) NOT NULL UNIQUE
);

CREATE UNIQUE INDEX idx_arch_role_name ON arch.role(lower(name));

CREATE TABLE arch.role_permission (
    id SERIAL NOT NULL PRIMARY KEY,
    permission_id INT NOT NULL REFERENCES arch.permission(id),
    role_id INT NOT NULL REFERENCES arch.role(id)
);

CREATE UNIQUE INDEX idx_arch_role_permissions ON arch.role_permission(permission_id, role_id);

CREATE TABLE arch.user_role (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES arch.user(id),
    role_id INT NOT NULL REFERENCES arch.role(id)
);

CREATE UNIQUE INDEX idx_arch_user_roles ON arch.user_role(user_id, role_id);

INSERT INTO arch.permission (name) values ('admin'), ('user');
INSERT INTO arch.role (name) values ('administrator'), ('user');
INSERT INTO arch.role_permission (permission_id, role_id) values ((SELECT id FROM arch.permission WHERE name='admin'), (SELECT id FROM arch.role WHERE name='administrator'));
INSERT INTO arch.role_permission (permission_id, role_id) values ((SELECT id FROM arch.permission WHERE name='user'), (SELECT id FROM arch.role WHERE name='user'));
