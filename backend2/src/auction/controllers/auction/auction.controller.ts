import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateListDto } from 'src/auction/dtos/CreateListings.dto';
import { AuctionService } from 'src/auction/services/auction/auction.service';

@Controller('auction')
export class AuctionController {
  constructor(private auctionServices: AuctionService) {}
  @Post('list')
  createList(@Body() createListData: CreateListDto) {
    console.log(createListData);
    this.auctionServices.createList(createListData);
    return createListData;
  }

  @Get('/isListed')
  getNftListed() {
    return this.auctionServices.allNft();
  }

  @Get('/isListed/:id')
  getNftListedById(@Param('id') id: string) {
    console.log(id);
    return this.auctionServices.findNftById(id);
  }
}
