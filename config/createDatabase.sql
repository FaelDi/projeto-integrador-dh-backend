-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema orca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema orca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `orca` DEFAULT CHARACTER SET latin1 ;
USE `orca` ;

-- -----------------------------------------------------
-- Table `orca`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL DEFAULT NULL,
  `idade` INT(11) NULL DEFAULT NULL,
  `cpf` VARCHAR(100) NOT NULL,
  `rg` VARCHAR(100) NULL DEFAULT NULL,
  `data_nasc` VARCHAR(100) NULL DEFAULT NULL,
  `cnpj` VARCHAR(100) NULL DEFAULT NULL,
  `fornecedor` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(100) NULL DEFAULT NULL,
  `cep` VARCHAR(100) NULL DEFAULT NULL,
  `endereco` VARCHAR(100) NULL DEFAULT NULL,
  `numero` INT(11) NULL DEFAULT NULL,
  `bairro` VARCHAR(100) NULL DEFAULT NULL,
  `cidade` VARCHAR(100) NULL DEFAULT NULL,
  `estado` VARCHAR(100) NULL DEFAULT NULL,
  `telefone` VARCHAR(100) NULL DEFAULT NULL,
  `celular` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`empresa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` INT(11) NOT NULL,
  `total_avaliacao` INT(11) NOT NULL,
  `atividade_principal` VARCHAR(100) NOT NULL,
  `data_situacao` VARCHAR(100) NOT NULL,
  `complemento` VARCHAR(100) NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `uf` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(100) NOT NULL,
  `atividades_secundarias` VARCHAR(100) NOT NULL,
  `qsa` VARCHAR(100) NOT NULL,
  `situacao` VARCHAR(100) NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `logradouro` VARCHAR(100) NOT NULL,
  `numero` INT(11) NOT NULL,
  `cep` VARCHAR(100) NOT NULL,
  `municipio` VARCHAR(100) NOT NULL,
  `porte` VARCHAR(100) NOT NULL,
  `abertura` VARCHAR(100) NOT NULL,
  `natureza_juridica` VARCHAR(100) NOT NULL,
  `cnpj` VARCHAR(100) NOT NULL,
  `ultima_atualizacao` VARCHAR(100) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `tipo` VARCHAR(100) NOT NULL,
  `fantasia` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `efr` VARCHAR(100) NOT NULL,
  `motivo_situacao` VARCHAR(100) NOT NULL,
  `situacao_especial` VARCHAR(100) NOT NULL,
  `data_situacao_especial` VARCHAR(100) NOT NULL,
  `capital_social` DECIMAL(20,2) NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_company_user1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_empresa_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `orca`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`avaliacao_empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`avaliacao_empresa` (
  `id` INT(11) NOT NULL,
  `company_id` INT(11) NOT NULL,
  `company_user_id` INT(11) NOT NULL,
  `avaliacao` INT(11) NOT NULL,
  `comentario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `company_id`, `company_user_id`),
  INDEX `fk_evaluation_company_company_idx` (`company_id` ASC, `company_user_id` ASC),
  CONSTRAINT `fk_avaliacao_empresa_empresa`
    FOREIGN KEY (`company_id` , `company_user_id`)
    REFERENCES `orca`.`empresa` (`id` , `usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`cotacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`cotacao` (
  `empresa_id` INT(11) NOT NULL,
  `empresa_usuario_id` INT(11) NOT NULL,
  PRIMARY KEY (`empresa_id`, `empresa_usuario_id`),
  CONSTRAINT `fk_cotacao_empresa`
    FOREIGN KEY (`empresa_id` , `empresa_usuario_id`)
    REFERENCES `orca`.`empresa` (`id` , `usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`produto` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `empresa_id` INT(11) NOT NULL,
  `empresa_usuario_id` INT(11) NOT NULL,
  `codigo` VARCHAR(100) NULL DEFAULT NULL,
  `valor_unitario` DECIMAL(20,2) NULL DEFAULT NULL,
  `foto_produto` VARCHAR(100) NULL DEFAULT NULL,
  `quantidade` INT(11) NULL DEFAULT NULL,
  `descricao_produto` VARCHAR(100) NULL DEFAULT NULL,
  `marca` VARCHAR(100) NULL DEFAULT NULL,
  `company_id` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `empresa_id`, `empresa_usuario_id`),
  INDEX `fk_products_company1_idx` (`empresa_id` ASC, `empresa_usuario_id` ASC),
  CONSTRAINT `fk_produto_empresa`
    FOREIGN KEY (`empresa_id` , `empresa_usuario_id`)
    REFERENCES `orca`.`empresa` (`id` , `usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`cotacao_has_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`cotacao_has_produto` (
  `cotacao_empresa_id` INT(11) NOT NULL,
  `cotacao_empresa_usuario_id` INT(11) NOT NULL,
  `produto_id` INT(11) NOT NULL,
  `produto_empresa_id` INT(11) NOT NULL,
  `produto_empresa_usuario_id` INT(11) NOT NULL,
  PRIMARY KEY (`cotacao_empresa_id`, `cotacao_empresa_usuario_id`, `produto_id`, `produto_empresa_id`, `produto_empresa_usuario_id`),
  INDEX `fk_cotacao_has_produto_produto1_idx` (`produto_id` ASC, `produto_empresa_id` ASC, `produto_empresa_usuario_id` ASC),
  INDEX `fk_cotacao_has_produto_cotacao1_idx` (`cotacao_empresa_id` ASC, `cotacao_empresa_usuario_id` ASC),
  CONSTRAINT `fk_cotacao_has_produto_cotacao`
    FOREIGN KEY (`cotacao_empresa_id` , `cotacao_empresa_usuario_id`)
    REFERENCES `orca`.`cotacao` (`empresa_id` , `empresa_usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cotacao_has_produto_produto`
    FOREIGN KEY (`produto_id` , `produto_empresa_id` , `produto_empresa_usuario_id`)
    REFERENCES `orca`.`produto` (`id` , `empresa_id` , `empresa_usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`forma_pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`forma_pagamento` (
  `usuario_id` INT(11) NOT NULL,
  `numero_cartao` VARCHAR(45) NULL DEFAULT NULL,
  `nome_no_cartao` VARCHAR(45) NULL DEFAULT NULL,
  `apelido_cartao` VARCHAR(45) NULL DEFAULT NULL,
  `codigo_traseiro` INT(11) NULL DEFAULT NULL,
  `validade_mes` INT(11) NULL DEFAULT NULL,
  `validade_ano` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  CONSTRAINT `fk_forma_pagamento_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `orca`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`venda` (
  `id` INT(11) NOT NULL,
  `forma_pagamento_usuario_id` INT(11) NOT NULL,
  `cotacao_empresa_id` INT(11) NOT NULL,
  `cotacao_empresa_usuario_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `forma_pagamento_usuario_id`, `cotacao_empresa_id`, `cotacao_empresa_usuario_id`),
  INDEX `fk_venda_forma_pagamento1_idx` (`forma_pagamento_usuario_id` ASC),
  INDEX `fk_venda_cotacao1_idx` (`cotacao_empresa_id` ASC, `cotacao_empresa_usuario_id` ASC),
  CONSTRAINT `fk_venda_cotacao`
    FOREIGN KEY (`cotacao_empresa_id` , `cotacao_empresa_usuario_id`)
    REFERENCES `orca`.`cotacao` (`empresa_id` , `empresa_usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_venda_forma_pagamento`
    FOREIGN KEY (`forma_pagamento_usuario_id`)
    REFERENCES `orca`.`forma_pagamento` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `orca`.`entrega`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orca`.`entrega` (
  `venda_id` INT(11) NOT NULL,
  `venda_forma_pagamento_usuario_id` INT(11) NOT NULL,
  `venda_cotacao_empresa_id` INT(11) NOT NULL,
  `venda_cotacao_empresa_usuario_id` INT(11) NOT NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `codigo_rastreamento` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`venda_id`, `venda_forma_pagamento_usuario_id`, `venda_cotacao_empresa_id`, `venda_cotacao_empresa_usuario_id`),
  CONSTRAINT `fk_entrega_venda`
    FOREIGN KEY (`venda_id` , `venda_forma_pagamento_usuario_id` , `venda_cotacao_empresa_id` , `venda_cotacao_empresa_usuario_id`)
    REFERENCES `orca`.`venda` (`id` , `forma_pagamento_usuario_id` , `cotacao_empresa_id` , `cotacao_empresa_usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO empresa(usuario_id,total_avaliacao,atividade_principal,data_situacao,complemento,nome,uf,telefone,atividades_secundarias,qsa,situacao,bairro,logradouro,numero,cep,municipio,porte,abertura,natureza_juridica,cnpj,ultima_atualizacao,status,tipo,fantasia,email,efr,motivo_situacao,situacao_especial,data_situacao_especial,capital_social) VALUES ('12','0','Comércio varejista de artigos de papelaria','18/10/2006','LOJA 1A','BAZAR NOVIDADES COMERCIO DE PAPELARIA E BRINQUEDOS LTDA','RJ','(24) 3369-3578','Comercio varejista de artigos de armarinho','49-Sócio-Administrador','ATIVA','FRADE','R SAO SEBASTIAO',131,'23.946-010','ANGRA DOS REIS','MICRO EMPRESA','18/10/2006','206-2 - Sociedade Empresária Limitada','08.366.082/0001-02','2020-03-08T16:55:29.801Z','OK','MATRIZ','NULL','NULL','NULL','NULL','NULL','NULL',15000.00);

INSERT INTO empresa(usuario_id,total_avaliacao,atividade_principal,data_situacao,complemento,nome,uf,telefone,email,atividades_secundarias,qsa,situacao,bairro,logradouro,numero,cep,municipio,porte,abertura,natureza_juridica,fantasia,cnpj,ultima_atualizacao,status,tipo,efr,motivo_situacao,situacao_especial,data_situacao_especial,capital_social) VALUES ('2','0','Serviços de engenharia','03/11/2005','EDIF BOULEVARD SIDE EMPR SALA 2302','CITELUZ SERVICOS DE ILUMINACAO URBANA S/A','BA','(71) 2189-8986','fiscal@citelum.com.br','Manutenção de redes de distribuição de energia elétrica','RICARDO MARQUES IMBASSAHY','ATIVA','CAMINHO DAS ARVORES','R EWERTON VISCO',290,'41.820-022','SALVADOR','DEMAIS','05/02/1999','205-4 - Sociedade Anônima Fechada','CITELUM GROUPE EDF','02.966.986/0001-84','2020-02-07T23:32:44.168Z','OK','MATRIZ','NULL','NULL','NULL','NULL',97143656.44);
