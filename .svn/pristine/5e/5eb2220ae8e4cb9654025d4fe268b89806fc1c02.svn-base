import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: "search" })
export class SearchPipe implements PipeTransform {
    transform(data: any[], searchStr: string) {
        if (searchStr.trim() === "") {
            return data;
        }
        return data.filter(item => item.t1.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t2.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t4.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t5.toUpperCase().includes(searchStr.trim().toUpperCase()));
    }
}

@Pipe({ name: "jobsearch" })
export class JobSearchPipe implements PipeTransform {
    transform(data: any[], searchStr: string) {
        if (searchStr.trim() === "") {
            return data;
        }
        return data.filter(item => item.t1.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t2.toUpperCase().includes(searchStr.trim().toUpperCase()));
    }
}

@Pipe({ name: "v6ptype" })
export class PTypePipe implements PipeTransform {
    transform(data: any[], searchStr: number) {
        if (!searchStr) {
            return data;
        }
        return data.filter(item => {
            if (searchStr == 1) {
                return item.n1 == 1;
            } else {
                return item.n1 == 2;
            }
        });
    }
}

@Pipe({ name: "accountfilter" })
export class AccountFilterPipe implements PipeTransform {
    transform(data: any[], filter_str: string, accountCategory: string, ) {
        console.log(JSON.stringify(data));
        return data.filter(item => item.t3 === filter_str && item.n1 === accountCategory);
    }
}

@Pipe({ name: "gllistfilter" })
export class GLListFilterPipe implements PipeTransform {
    transform(data: any[], filterStr: string, cc: string, dept: string) {
        return data.filter( item => item.t3 === filterStr && ((cc != "0")? item.n2 === cc : true) && ((dept !="0")? item.n4 === dept : true) );
    }
}

@Pipe({ name: "isoCurrencylistfilter" })
export class ISOCurrencylistfilter implements PipeTransform {
    transform(data: any[], filterStr: string) {
        if (filterStr.trim() === "") {
            return data;
        } else {
            return data.filter(item => item.CurName.toUpperCase().includes(filterStr.trim().toUpperCase()) || item.CurCode.toUpperCase().includes(filterStr.trim().toUpperCase()) || item.Description.toUpperCase().includes(filterStr.trim().toUpperCase()) || item.Symbol.toUpperCase().includes(filterStr.trim().toUpperCase()));
        }
    }
}

@Pipe({ name: "cvaccountfilter" })
export class CVAccountFilterPipe implements PipeTransform {
    transform(data: any[], filterStr1: string, filterStr2: string) {
        if (filterStr1 != '0')
            return data.filter(item => item.syskey === filterStr1);
        else
            return data.filter(item => item.syskey !== filterStr2 && item.t3 === filterStr1);
    }
}

@Pipe({ name: "locationfilter", pure: false })
export class LocationFilter implements PipeTransform {

    transform(location: any[], selectedLocation: any[], status: string) {
        var result = [];

        if (selectedLocation.length === 0) {
            return location;
        }
        location.filter(item => {
            if (status == item.code) {
                result.push(item);
            } else if (this.isSelected(selectedLocation, item.code).length == 0) {
                result.push(item);
            }

        });
        return result;
    }

    isSelected(selectedLocation, code) {
        return selectedLocation.filter(loc => loc.n1 === code && loc.recordStatus != 4);
    }
}

@Pipe({ name: "parentfilter", pure: false })
export class ParentFilter implements PipeTransform {
    transform(data: any[], filter_str: string) {
        return data.filter(item => item.code != filter_str);
    }
}

@Pipe({ name: "coalistfilter", pure: false })
export class COAListFilter implements PipeTransform {
    transform(data: any[], from_range: Number, to_range: Number, range: Number) {
        if (data != undefined || data != null) {
            if (range == 0) {
                return data.filter(item => item.syskey >= Number(from_range) && item.syskey <= Number(to_range));
            } else {
                return data.filter(item => (item.syskey >= Number(from_range) && item.syskey <= Number(to_range)) || item.syskey == range);
            }
        }
    }
}


@Pipe({ name: "coaheaderfilter", pure: false })
export class COAHeaderFilter implements PipeTransform {
    transform(obj: any[]) {
        if (obj != undefined || obj != null) {
            var darr = [];
            var spaces = "";
            var count = 0;
            var childscount = 0;
            for (var i = 0; i < obj.length; i++) {
                count = i + childscount;
                if (obj[i].n1 == "" || (obj[i].n1 != "" && obj[i].n3 == "1")) {
                    if (obj[i].n3 == "1") {
                        obj[i].n1 = count;
                        darr = this.getChildList(obj[i].syskey, obj);
                        for (var j = 0; j < darr.length; j++) {
                            darr[j].n1 = ++count;
                            darr[j].t1 = darr[j].t1.trim();
                            childscount += 1;
                        }
                    } else {
                        obj[i].n1 = count;
                    }
                }
            }
            return obj.sort(function (a, b) {
                return a.n1 - b.n1;
            });
        }
    }

    getChildList(key, obj) {
        return obj.filter(item => item.n10 == key);
    }
}

@Pipe({ name: "taxtype" })
export class TaxTypePipe implements PipeTransform {
    transform(data: any[], type: string) {
        if (type.trim() == "") {
            return data;
        }
        return data.filter(item => {
            if (type == 'sale')
                return (item.n8 == 0 || item.n8 == 2);
            else if (type == 'purchase')
                return (item.n8 == 0 || item.n8 == 1);
        });

    }
}

@Pipe({ name: "fromcashbookfilter" })
export class FromCashbookPipe implements PipeTransform {
    transform(data: any[], syskey: string) {
        return data.filter(item => item.syskey != syskey);
    }
}

@Pipe({ name: "tocashbookfilter" })
export class ToCashbookPipe implements PipeTransform {
    transform(data: any[], syskey: string) {
        return data.filter(item => item.syskey != syskey);
    }
}

@Pipe({ name: "batchserialfilter", pure: false })
export class BatchSerialPipe implements PipeTransform {
    transform(data: any[]) {
        return data.filter(item => item.recordstatus != 0);
    }
}

@Pipe({ name: "bsPaginationFilter", pure: false })
export class BatchSerialPaginatePipe implements PipeTransform {
    transform(data: any[], currentPage: Number, recordsPerPage: Number) {
        let start = ((+currentPage - 1) * +recordsPerPage);
        let end = (+start) + (+recordsPerPage);
        return data.slice(start, end);
    }
}

@Pipe({ name: "bsSearchfilter", pure: false })
export class BatchSerialSearchPipe implements PipeTransform {
    transform(data: any[], searchStr: String) {
        if (searchStr.trim().length > 0) {
            return data.filter(d => d.recordstatus != 0 && (d.t1.toUpperCase().includes(searchStr.trim().toUpperCase()) || d.t2.toUpperCase().includes(searchStr.trim().toUpperCase())));
        } else {
            return data;
        }
    }
}

@Pipe({ name: "barcodefilter", pure: false })
export class BarCodePipe implements PipeTransform {
    transform(data: any[], type: string, sk: string) {
        return data.filter(item => item.recordStatus != 4 && item.uomType == type && item.uomsyskey == sk);
    }
}

@Pipe({ name: 'df' })
export class DateFormatPipe implements PipeTransform {
    transform(dt: string) {
        return dt && dt.trim().length == 8 ? dt.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1') : "";
    }
}

@Pipe({ name: 'nf' })
export class PriceFormatPipe implements PipeTransform {
    transform(n: string) {
        return n && !isNaN(+n) ? (+n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") : "0.00";
    }
}

@Pipe({ name: "cf" })
export class CurrencyFilterPipe implements PipeTransform {
    transform(data: any[], invEditCur: boolean) {
        return !invEditCur ? data.filter(item => item.t3 === '/' && item.n2 == 1) : data;
    }
}


@Pipe({ name: "pirecapfilter" })
export class PIRecapFilter implements PipeTransform {
    transform(data: any[], str: string) {
        return data.filter(item => item.n9 != str);
    }
}

@Pipe({ name: "categoryfilter" })
export class CategoryFilter implements PipeTransform {
    transform(data: any[], str: string) {
        return data.filter(item => item.n4 == str || item.syskey == "0");
    }
}

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SearchPipe, JobSearchPipe, PTypePipe, AccountFilterPipe, GLListFilterPipe, LocationFilter, ParentFilter, COAListFilter, COAHeaderFilter, CVAccountFilterPipe, TaxTypePipe, FromCashbookPipe, ToCashbookPipe, BatchSerialPipe, ISOCurrencylistfilter, DateFormatPipe, PriceFormatPipe, CurrencyFilterPipe, PIRecapFilter, BarCodePipe, BatchSerialPaginatePipe, BatchSerialSearchPipe, CategoryFilter],
    exports: [SearchPipe, JobSearchPipe, PTypePipe, AccountFilterPipe, GLListFilterPipe, LocationFilter, ParentFilter, COAListFilter, COAHeaderFilter, CVAccountFilterPipe, TaxTypePipe, FromCashbookPipe, ToCashbookPipe, BatchSerialPipe, ISOCurrencylistfilter, DateFormatPipe, PriceFormatPipe, CurrencyFilterPipe, PIRecapFilter, BarCodePipe, BatchSerialPaginatePipe, BatchSerialSearchPipe, CategoryFilter],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipeModule { }