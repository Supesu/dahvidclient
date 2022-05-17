import { Continent } from "../types";

export const regionMap: Record<string, string> = {
  oce: 'oc1',
  na: 'na1',
  br: 'br1',
  eun: 'eun1',
  eune: 'eun1',
  euw: 'euw1',
  kr: 'kr',
  jp: 'jp1',
  las: 'la1',
  lan: 'la2',
  tr: 'tr1',
  ru: 'ru',
  oc1: 'oc1',
  na1: 'na1',
  br1: 'br1',
  eun1: 'eun1',
  euw1: 'euw1',
  jp1: 'jp1',
  la1: 'la1',
  la2: 'la2',
  tr1: 'tr1',
  americas: 'americas',
  europe: 'europe',
  asia: 'asia'
};

export const regionToContinentMap: Record<string, Continent> = {
  oce: 'americas',
  na: 'americas',
  br: 'europe',
  eune: 'europe',
  euw: 'europe',
  kr: 'asia',
  jp: 'asia',
  las: 'americas',
  lan: 'americas',
  tr: 'europe',
  ru: 'europe',
  oc1: 'americas',
}