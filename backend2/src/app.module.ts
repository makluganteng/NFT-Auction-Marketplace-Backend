import { Module } from '@nestjs/common';
import { AuctionController } from './auction/controllers/auction/auction.controller';
import { AuctionService } from './auction/services/auction/auction.service';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [AuctionModule],
  controllers: [AuctionController],
  providers: [AuctionService],
})
export class AppModule {}
