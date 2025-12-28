import { Component } from '@angular/core';
import { Filter } from './filter/filter';
import { MarketplaceGrid } from './marketplace-grid/marketplace-grid';
import { PageHeader } from './page-header/page-header';
import { RareNumismaticsAuction } from './rare-numismatics-auction/rare-numismatics-auction';
import { SouvenirSets } from './souvenir-sets/souvenir-sets';
import { FeaturedMintCollection } from './featured-mint-collection/featured-mint-collection';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-marketplace',
  imports: [Filter,MarketplaceGrid,PageHeader,RareNumismaticsAuction,SouvenirSets,FeaturedMintCollection,RouterModule],
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.css',
})
export class Marketplace {

}
