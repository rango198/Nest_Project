import { AccountService } from './account.service';
import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './account.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto/auth.dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {

  constructor(private accountService: AccountService) { }

  @Get()
  @ApiOkResponse({
    type: AccountDto
  })
  getAccount(@SessionInfo() session: GetSessionInfoDto) {
    return this.accountService.getAccount(session.id)
  }


  @Patch()
  @ApiOkResponse({
    type: AccountDto
  })
  patchAccount(@Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionInfoDto) {
    return this.accountService.patchAccount(session.id, body)
  }
}
