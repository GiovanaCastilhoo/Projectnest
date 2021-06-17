import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
//import { ImageEntity } from '@entities';

@Entity('USERS')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ID'})
  id: number;
   
  @Column( {name: 'USERID' })
  userid: string;

  @Column( {name: 'NAME'} )
  name: string;

  @Column( {name: 'EMAIL'} )
  email: string;

  @Column( {name: 'PASSWORD' })
  password: string;

  @Column({ default: true })
  isActive: boolean;

/*Entity relations 
  @OneToOne(() => ImageEntity, (image) => image)
  @JoinColumn({ name: 'AVATARID'})
  avatar?: ImageEntity;
*/
}
