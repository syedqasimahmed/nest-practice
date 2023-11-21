// settings.dto.ts
import { IsEnum, IsOptional, IsString } from 'class-validator';

enum NodeEnv {
    Development = 'development',
    Production = 'production',
}


export class SettingsDto {
    @IsEnum(NodeEnv)
    NODE_ENV: NodeEnv;

    @IsString()
    DATABASE_CONNECTION_URI: string;
}
