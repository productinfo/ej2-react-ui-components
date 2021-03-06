import * as React from 'react';
import { RecurrenceEditor, RecurrenceEditorModel } from '@syncfusion/ej2-schedule';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `RecurrenceEditorComponent` represents the react RecurrenceEditor.
 * ```tsx
 * <RecurrenceEditorComponent/>
 * ```
 */
export class RecurrenceEditorComponent extends RecurrenceEditor {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<RecurrenceEditorModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<RecurrenceEditorModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(RecurrenceEditorComponent, [ComponentBase, React.PureComponent]);
