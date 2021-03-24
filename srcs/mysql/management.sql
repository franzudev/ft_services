GRANT ALL PRIVILEGES ON *.* TO 'mysql'@'%' IDENTIFIED BY 'mysql' WITH GRANT OPTION;

CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'%' IDENTIFIED BY 'wordpress';
GRANT ALL PRIVILEGES ON wordpress.* TO "wordpress"@"%" with GRANT OPTION;
CREATE USER 'phpadmin'@'%' IDENTIFIED BY 'superCaliFragiliSticoESpiraLidoso';
GRANT ALL PRIVILEGES ON `phpmyadmin`.* TO 'phpadmin'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;