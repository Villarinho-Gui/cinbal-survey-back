import { Test, TestingModule } from '@nestjs/testing';
import { SurveyService } from './survey.service';
import { GoogleSpreadsheetService } from '../google-spreadsheet/google-spreadsheet.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('SurveyService', () => {
    let surveyService: SurveyService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ConfigModule.forRoot()],
            providers: [SurveyService, GoogleSpreadsheetService, ConfigService],
        }).compile();

        surveyService = module.get<SurveyService>(SurveyService);
    });
    test('Validating the definition', () => {
        expect(surveyService).toBeDefined();
    });
});
