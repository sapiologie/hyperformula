import {GPUInternalMode, GPUMode} from 'gpu.js'

type PossibleGPUMode = GPUMode | GPUInternalMode

export interface ConfigParams {
  addressMappingFillThreshold: number,
  csvDelimiter: string,
  dateFormat: string,
  functionArgSeparator: string,
  language: string,
  functionPlugins: any[],
  gpuMode: PossibleGPUMode,
  matrixDetection: boolean,
}

export class Config {
  public static defaultConfig: ConfigParams = {
    addressMappingFillThreshold: 1,
    csvDelimiter: ',',
    dateFormat: 'MM/DD/YYYY',
    functionArgSeparator: ',',
    language: 'EN',
    functionPlugins: [],
    gpuMode: 'gpu',
    matrixDetection: true,
  }

  public readonly addressMappingFillThreshold: number
  public readonly csvDelimiter: string
  public readonly dateFormat: string
  public readonly functionArgSeparator: string
  public readonly language: string
  public readonly functionPlugins: any[]
  public readonly gpuMode: PossibleGPUMode
  public readonly matrixDetection: boolean

  constructor({
    addressMappingFillThreshold,
    csvDelimiter,
    dateFormat,
    functionArgSeparator,
    language,
    functionPlugins,
    gpuMode,
    matrixDetection,
  }: Partial<ConfigParams> = {}) {
    this.addressMappingFillThreshold = addressMappingFillThreshold || Config.defaultConfig.addressMappingFillThreshold
    this.csvDelimiter = csvDelimiter || Config.defaultConfig.csvDelimiter
    this.dateFormat = dateFormat || Config.defaultConfig.dateFormat
    this.functionArgSeparator = functionArgSeparator || Config.defaultConfig.functionArgSeparator
    this.language = language || Config.defaultConfig.language
    this.functionPlugins = functionPlugins || Config.defaultConfig.functionPlugins
    this.gpuMode = gpuMode || Config.defaultConfig.gpuMode
    this.matrixDetection = typeof matrixDetection === 'boolean' ? matrixDetection : Config.defaultConfig.matrixDetection
  }
}
