import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AccumulationSeriesModel } from '@syncfusion/ej2-charts';

export interface AccumulationSeriesDirTypecast {
}
/**
 * `AccumulationSeriesDirective` directive represent a series of the react AccumulationChart. 
 * It must be contained in a Pie component(`AccumulationChart`). 
 * ```tsx
 * <AccumulationChartComponent>
 * <AccumulationSeriesCollectionDirective>
 * <AccumulationSeriesDirective></AccumulationSeriesDirective>
 * </AccumulationSeriesCollectionDirective>
 * </AccumulationChartComponent>
 * ```
 */
export class AccumulationSeriesDirective extends ComplexBase<AccumulationSeriesModel| AccumulationSeriesDirTypecast, AccumulationSeriesModel| AccumulationSeriesDirTypecast> {
    public static moduleName: string = 'accumulationSeries';
}

export class AccumulationSeriesCollectionDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'series';
    public static moduleName: string = 'accumulationSeriesCollection';
}