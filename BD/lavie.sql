create database lavie;
use lavie;

CREATE TABLE pacientes (
    id_paciente INT(11) NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    data_nascimento DATETIME NOT NULL,
    email VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_paciente));

CREATE TABLE psicologos (
    id_psicologo INT(11) NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(200) NOT NULL,
    apresentacao VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_psicologo));

CREATE TABLE IF NOT EXISTS atendimentos (
    id_atendimento INT(11) NOT NULL AUTO_INCREMENT,
    id_psicologo INT(11) NOT NULL,
    id_paciente INT(11) NOT NULL,
    data_atendimento DATETIME NOT NULL,
    observacoes VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_atendimento),
    INDEX id_psicologo_idx (id_psicologo ASC) VISIBLE,
    INDEX id_paciente_idx (id_paciente ASC) VISIBLE,
    CONSTRAINT id_psicologo
        FOREIGN KEY (id_psicologo)
        REFERENCES lavie.psicologos (id_psicologo)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT id_paciente
        FOREIGN KEY (id_paciente)
        REFERENCES lavie.pacientes (id_paciente)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);