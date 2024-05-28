import { DbModule } from './../db/db.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AccountModule } from 'src/account/account.module';


@Module({
  imports: [DbModule, AccountModule],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
