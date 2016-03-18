create schema dbo;

create table dbo.T_CONTACT(
        id tinyint identity(1,1) NOT NULL,
        firstName char(20) NOT NULL,
        lastName char(20) NOT NULL,
        PRIMARY KEY (id)
);

drop schema dob;