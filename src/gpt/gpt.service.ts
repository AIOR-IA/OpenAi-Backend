import { Injectable } from '@nestjs/common';
import { OrthographyDto } from './dto/orthography.dto';
import { orthographyCheckUseCase, prosConsDicusserStreamUseCase, prosConsDicusserUseCase } from './use-cases';
import OpenAI from 'openai';
import { ProsConsDiscusserDto } from './dto';


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

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserStreamUseCase(this.openai, { prompt });
  }
}
