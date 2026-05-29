Código ```dbml``` actual de la base de datos

```
Table messages {
  id integer [primary key]
  user_id integer [not null]
  user_message text [not null]
  sophia_response text [not null]
  date timestamp [default: `now()`]
}

Table sophia_memory {
  id integer [primary key]
  category_id integer [not null]
  content text [not null]
}

Table user_memory {
  id integer [primary key]
  user_id integer [not null]
  category_id integer [not null]
  content text [not null]
  date timestamp [default: `now()`]
}

Table users {
  id integer [primary key]
  name varchar [not null]
  mail varchar [not null]
  birthday date 
}

Table memory_category{
  id integer [primary key]
  name varchar [not null]
}

Ref: memory_category.id < sophia_memory.category_id
Ref: memory_category.id < user_memory.category_id
Ref: user_memory.user_id > users.id
Ref: messages.user_id > users.id
```