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

    @IsString()
    @IsNotEmpty()
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

    @IsString()
    @IsNotEmpty()
    pergunta16: string;

    @IsString()
    @IsNotEmpty()
    pergunta17: string;

    @IsString()
    @IsNotEmpty()
    pergunta18: string;

    @IsString()
    @IsNotEmpty()
    pergunta19: string;

    @IsString()
    @IsNotEmpty()
    pergunta20: string;

    @IsString()
    @IsNotEmpty()
    pergunta21: string;

    @IsString()
    @IsNotEmpty()
    pergunta22: string;

    @IsString()
    @IsNotEmpty()
    pergunta23: string;

    @IsString()
    @IsNotEmpty()
    pergunta24: string;

    @IsString()
    @IsNotEmpty()
    pergunta25: string;

    @IsString()
    @IsNotEmpty()
    pergunta26: string;

    @IsString()
    @IsNotEmpty()
    pergunta27: string;

    @IsString()
    @IsNotEmpty()
    pergunta28: string;

    @IsString()
    @IsNotEmpty()
    pergunta29: string;

    @IsString()
    @IsNotEmpty()
    pergunta30: string;

    @IsString()
    @IsNotEmpty()
    pergunta31: string;

    @IsString()
    @IsNotEmpty()
    pergunta32: string;

    @IsString()
    @IsNotEmpty()
    pergunta33: string;

    @IsString()
    @IsNotEmpty()
    pergunta34: string;

    @IsString()
    @IsNotEmpty()
    pergunta35: string;

    @IsString()
    @IsNotEmpty()
    pergunta36: string;

    @IsString()
    @IsNotEmpty()
    pergunta37: string;

    @IsString()
    @IsNotEmpty()
    pergunta38: string;

    @IsString()
    @IsNotEmpty()
    pergunta39: string;

    @IsString()
    @IsNotEmpty()
    pergunta40: string;

    @IsString()
    @IsNotEmpty()
    pergunta41: string;

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
