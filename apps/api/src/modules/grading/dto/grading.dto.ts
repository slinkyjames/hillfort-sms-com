import { Term } from '@sms/shared-types';

/**
 * Query parameters DTO for generating a comprehensive student term report card.
 */
export interface GenerateReportCardQueryDto {
  term: Term;
  session: string;
}

/**
 * Query parameters DTO for computing cumulative academic performance across a session.
 */
export interface GetCumulativePerformanceQueryDto {
  session: string;
}