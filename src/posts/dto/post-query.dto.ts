import {
    IsNotEmpty,
    IsOptional
} from "class-validator"
import { ApiProperty, ApiPropertyOptional} from "@nestjs/swagger"

export class PostQueryDto {
    @ApiPropertyOptional()
    @IsOptional()
    page?: number

    @ApiPropertyOptional()
    @IsOptional()
    category?: string

    @ApiPropertyOptional()
    @IsOptional()
    author?: string

    @ApiPropertyOptional()
    @IsOptional()
    mostUpvoted?: boolean

    @ApiPropertyOptional()
    @IsOptional()
    limit?: number
}