import { Module } from '@nestjs/common';
import { AuctionController } from './controllers/auction/auction.controller';
import { AuctionService } from './services/auction/auction.service';

@Module({
  imports: [],
  controllers: [AuctionController],
  providers: [AuctionService],
})
export class AuctionModule {}
