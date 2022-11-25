import { Injectable } from '@nestjs/common';
import { CreateListDto } from 'src/auction/dtos/CreateListings.dto';

@Injectable()
export class AuctionService {
  private nftListed = [];
  createList(createListData: CreateListDto) {
    return this.nftListed.push(createListData);
  }

  allNft(){
    return this.nftListed;
  }

  findNftById(id: string) {
    return this.nftListed.find((x) => x.token_id === id);
  }
}
