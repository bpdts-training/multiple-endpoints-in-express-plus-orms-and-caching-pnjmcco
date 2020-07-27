create table people
(
	id serial not null,
	name varchar not null,
	birthday date not null
);

create unique index people_id_uindex
	on  people (id);

alter table people
	add constraint people_pk
		primary key (id);

