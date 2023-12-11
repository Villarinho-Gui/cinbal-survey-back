import { Module } from '@nestjs/common';
import { GoogleSpreadsheetService } from './google-spreadsheet.service';

@Module({
  controllers: [],
  providers: [GoogleSpreadsheetService],
})
export class GoogleSpreadsheetModule {}
