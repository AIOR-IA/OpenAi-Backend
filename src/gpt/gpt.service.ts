import { Injectable } from '@nestjs/common';
import { OrthographyDto } from './dto/orthography.dto';
import { orthographyCheckUseCase } from './use-cases';
import OpenAI from 'openai';


@Injectable()
export class GptService {

  private openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });

  async orthographyCheck( orthographyDto:OrthographyDto) {
    return await orthographyCheckUseCase( this.openai, {
      prompt: orthographyDto.prompt
    })
  }
}
