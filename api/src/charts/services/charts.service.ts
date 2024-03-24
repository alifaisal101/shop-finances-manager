import { Injectable } from '@nestjs/common';
import { PostFetchChartsDataDto } from '../dtos/req/post-fetch-charts-data.dto';

@Injectable()
export class ChartsService {
  async fetchChartsData(chartsDataDates: PostFetchChartsDataDto) {}
}
