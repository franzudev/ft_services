GRANT ALL PRIVILEGES ON *.* TO 'mysql'@'%' IDENTIFIED BY 'mysql' WITH GRANT OPTION;

CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'%' IDENTIFIED BY 'wordpress';
GRANT ALL PRIVILEGES ON wordpress.* TO "wordpress"@"%" with GRANT OPTION;
CREATE USER 'editor'@'%' IDENTIFIED BY 'editor';
GRANT ALL PRIVILEGES ON wordpress.* TO "editor"@"%" with GRANT OPTION;
CREATE USER 'pma'@'%' IDENTIFIED BY 'pmapass';
GRANT ALL PRIVILEGES ON `phpmyadmin`.* TO 'pma'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;