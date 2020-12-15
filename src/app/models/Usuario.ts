import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
}

export default Usuario;