import { AbstractEntity } from '@app/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tags' })
export class TagEntity extends AbstractEntity<TagEntity> {
  @Column()
  name: string;
}
