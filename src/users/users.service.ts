import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class UsersService {
  constructor(private db: DbService, private accountService: AccountService) { }

  async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({ data: { email, hash, salt } });
    await this.accountService.create(user.id)
    return user
  }



  findByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }



}
