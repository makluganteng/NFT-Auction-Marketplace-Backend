import { IsNotEmpty } from 'class-validator';

export class CreateListDto {
  @IsNotEmpty()
  token_id: string;

  @IsNotEmpty()
  startingPrice: number;

  @IsNotEmpty()
  hours: any;
}
