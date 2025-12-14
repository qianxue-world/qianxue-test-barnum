import { Scale } from '../../types'
import { PHQ9 } from './phq9'
import { GAD7 } from './gad7'
import { SDS } from './sds'
import { SAS } from './sas'
import { PSS10 } from './pss10'
import { DASS21 } from './dass21'
import { BDI } from './bdi'
import { HADS } from './hads'
import { AUDIT } from './audit'
import { PANAS } from './panas'
import { PCL5 } from './pcl5'
import { RSES } from './rses'
import { SCL90 } from './scl90'
import { MBTI } from './mbti'
import { EPQ } from './epq'
import { BIGFIVE } from './bigfive'

export const scales: Scale[] = [
  PHQ9,
  GAD7,
  SDS,
  SAS,
  PSS10,
  DASS21,
  BDI,
  HADS,
  AUDIT,
  PANAS,
  PCL5,
  RSES,
  SCL90,
  MBTI,
  EPQ,
  BIGFIVE,
]

export const getScaleById = (id: string): Scale | undefined => {
  return scales.find(scale => scale.id === id)
}

export const getScalesByCategory = (category: string): Scale[] => {
  return scales.filter(scale => scale.category === category)
}

export {
  PHQ9,
  GAD7,
  SDS,
  SAS,
  PSS10,
  DASS21,
  BDI,
  HADS,
  AUDIT,
  PANAS,
  PCL5,
  RSES,
  SCL90,
  MBTI,
  EPQ,
  BIGFIVE,
}
