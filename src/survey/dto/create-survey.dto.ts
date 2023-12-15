import {
  IsUUID,
  IsEmpty,
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
} from '@nestjs/class-validator';

export class CreateSurveyDto {
  @IsUUID()
  @IsOptional()
  @IsEmpty({
    message: 'id is auto generated',
  })
  id: string;

  @IsNotEmpty({
    message: 'id is auto generated',
  })
  setor: string;

  @IsNotEmpty()
  @IsString()
  pergunta1: string;

  @IsString()
  @IsNotEmpty()
  pergunta2: string;

  @IsString()
  @IsNotEmpty()
  pergunta3: string;

  @IsNotEmpty()
  @IsString()
  pergunta4: string;

  @IsString()
  @IsNotEmpty()
  pergunta5: string;

  @IsString()
  @IsNotEmpty()
  pergunta6: string;

  @IsNotEmpty()
  @IsString()
  pergunta7: string;

  @IsString()
  @IsNotEmpty()
  pergunta8: string;

  @IsString()
  @IsNotEmpty()
  pergunta9: string;

  @IsNotEmpty()
  @IsString()
  pergunta10: string;

  @IsString()
  @IsNotEmpty()
  pergunta11: string;

  @IsString()
  @IsNotEmpty()
  pergunta12: string;

  @IsNotEmpty()
  @IsString()
  pergunta13: string;

  @IsString()
  @IsNotEmpty()
  pergunta14: string;

  @IsString()
  @IsNotEmpty()
  pergunta15: string;

  @IsNumber()
  @IsOptional()
  @IsEmpty({
    message: 'created_at is auto generated',
  })
  created_at: number;
  @IsNumber()
  @IsOptional()
  @IsEmpty({
    message: 'created_at is auto generated',
  })
  updated_at: number;
}
