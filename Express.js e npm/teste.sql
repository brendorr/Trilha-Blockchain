CREATE TABLE usuarios(
    nome varchar(50),
    email varchar(100),
    idade int

); // exatamente como no postgree

INSERT INTO usuarios(nome, email, idade) VALUES
    ("brendo", "brendo@gmail.com", 24),
    ("fulano", "fulano@gmail.com", 32);


delete from usuarios where nome = "brendo"