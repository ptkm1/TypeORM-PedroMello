import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";

import bcryptjs from 'bcryptjs'

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: string
  @Column()
  email: string
  @Column()
  senha: string

  @BeforeInsert()
    @BeforeUpdate()
      hashSenha() {
        this.senha = bcryptjs.hashSync(this.senha, 8)
      }
}

export default Usuario;