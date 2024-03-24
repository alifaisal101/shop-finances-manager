import { Body, Controller, Post } from '@nestjs/common';
import { PostFetchChartsDataDto } from '../dtos/req/post-fetch-charts-data.dto';
import { ChartsService } from '../services/charts.service';

@Controller('charts')
export class ChartsController {
  constructor(private chartsSrv: ChartsService) {}

  @Post('fetch-data')
  async fetchData(@Body() body: PostFetchChartsDataDto) {
    return await this.chartsSrv.fetchChartsData(body);
  }
}
