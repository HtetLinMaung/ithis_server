import {
    Component, Output, Input, EventEmitter, HostListener, AfterViewInit, OnDestroy,
    SimpleChanges, OnChanges
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { TimepickerEvent } from './timepicker-event-interface';
declare var jQuery: any;
@Component({
    selector: 'datetime',
    template: `
    <div class="form-inline">
        <div id="{{idDatePicker}}" class="input-group date">
            <input type="text" class="form-control"
                   [attr.readonly]="readonly"
                   [attr.required]="required"
                   [attr.placeholder]="datepickerOptions.placeholder || 'Choose date'"
                   [(ngModel)]="dateModel"
                   (keyup)="checkEmptyValue($event)"/>
            <div class="input-group-addon">
                <span [ngClass]="datepickerOptions.icon || 'glyphicon glyphicon-th'"></span>
            </div>
        </div>
    </div>
   `
})

export class NKDatetime implements ControlValueAccessor, AfterViewInit, OnDestroy, OnChanges {
    @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
    @Input('datepicker') datepickerOptions: any = {};
    @Input('hasClearButton') hasClearButton: boolean = false;
    @Input() readonly: boolean = null;
    @Input() required: boolean = null;

    date: Date; // ngModel
    dateModel: string;

    // instances
    datepicker: any;

    idDatePicker: string = uniqueId('q-datepicker_');

    @HostListener('dateChange', ['$event'])
    onChange = (_: any) => {
    };
    onTouched = () => {
    };

    constructor(ngControl: NgControl) {
        ngControl.valueAccessor = this; // override valueAccessor
    }

    ngAfterViewInit() {
        this.init();
    }

    ngOnDestroy() {
        if (this.datepicker) {
            this.datepicker.datepicker('destroy');
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (changes['datepickerOptions'] && this.datepicker) {
                this.datepicker.datepicker('destroy');

                if (changes['datepickerOptions'].currentValue) {
                    this.datepicker = null;
                    this.init();
                } else if (changes['datepickerOptions'].currentValue === false) {
                    this.datepicker.remove();
                }
            }
        }
    }

    writeValue(value: any): void {
        this.date = value;
        if (isDate(this.date)) {
            setTimeout(() => {
                this.updateModel(this.date);
            }, 0);
        } else {
            this.clearModels();
        }
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    checkEmptyValue(e: any) {
        const value = e.target.value;
        if (value === '' && (
                this.datepickerOptions === false ||
                (this.dateModel === '')
            )) {
            this.dateChange.emit(null);
        }
    }

    clearModels() {
        this.dateChange.emit(null);
        this.updateDatepicker(null);
    }

    //////////////////////////////////

    private init(): void {
        if (!this.datepicker && this.datepickerOptions !== false) {
            let options = jQuery.extend({ enableOnReadonly: !this.readonly }, this.datepickerOptions);
            this.datepicker = (<any>jQuery('#' + this.idDatePicker)).datepicker(options);
            this.datepicker
                .on('changeDate', (e: any) => {
                    let newDate: Date = e.date;

                    if (isDate(this.date) && isDate(newDate)) {
                        // get hours/minutes
                        newDate.setHours(this.date.getHours());
                        newDate.setMinutes(this.date.getMinutes());
                    }

                    this.date = newDate;
                    this.dateChange.emit(newDate);
                });
        } else if (this.datepickerOptions === false) {
            (<any>jQuery('#' + this.idDatePicker)).remove();
        }

        this.updateModel(this.date);
    }

    private updateModel(date: Date): void {
        this.updateDatepicker(date);
    }

    private updateDatepicker(date?: any) {
        if (this.datepicker !== undefined) {
            this.datepicker.datepicker('update', date);
        }
    }

    private pad(value: any): string {
        return value.toString().length < 2 ? '0' + value : value.toString();
    }
}

let id: number = 0;
function uniqueId(prefix: string): string {
    return prefix + ++id;
}

function isDate(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}
