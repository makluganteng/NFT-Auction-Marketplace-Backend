import { IsNotEmpty } from 'class-validator';

export class CreateListDto {
  @IsNotEmpty()
  token_id: string;

  @IsNotEmpty()
  startingPrice: any;

  @IsNotEmpty()
  hours: any;
}
