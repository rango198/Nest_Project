import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './account.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService) { }

  async create(userId: string) {
    return this.db.account.create({
      data: {
        ownerId: userId,
        isBlockinEnabled: false,
      }
    })
  }

  async getAccount(userId: string) {
    return this.db.account.findFirstOrThrow({ where: { ownerId: userId } })
  }

  async patchAccount(userId: string, patch: PatchAccountDto) {
    const account = await this.db.account.findFirstOrThrow({ where: { ownerId: userId } });

    return this.db.account.update({
      where: { id: account.id },
      data: patch,
    });
  }

}
