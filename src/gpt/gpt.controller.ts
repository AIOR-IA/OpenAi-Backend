import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dto';


@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  create(@Body() orthographyDto : OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }

}
