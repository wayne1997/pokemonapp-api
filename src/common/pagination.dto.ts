import { IsPositive, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {

    @ApiProperty({
        description:'Cantidad de elementos requeridos.',
        required: false,
        type: Number,
    })
    @IsPositive()
    @IsOptional()
    @Type( () => Number )
    limit?: number;

    @ApiProperty({
        description:'Punto inicial para extraer elementos.',
        required: false,
        type: Number,
    })
    @IsPositive()
    @IsOptional()
    @Type( () => Number )
    offset?: number;
}