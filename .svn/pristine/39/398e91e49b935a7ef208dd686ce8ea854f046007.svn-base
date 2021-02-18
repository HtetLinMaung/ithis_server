import { RpReferences } from '../framework/rp-references';

declare var AesUtil: any;
export class ClientUtil {
  
  constructor() {
  }

  MSG_TYPE = { INFO: { type: "Information" }, WARN: { type: "Warning" } }

  _datepickerOpts = {
    autoclose: true,
    todayBtn: false,
    todayHighlight: true,
    placeholder: 'dd/mm/yyyy',
    format: 'dd/mm/yyyy',
    icon: 'glyphicon glyphicon-calendar',
    showtime: false
  }

  validateEmail(d) {
    var pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    return pattern.test(d);
  };

  
  deepCloneArray(oldArray: Object[]) {             //For Clone Array
    let renewArray: any = [];
    oldArray.forEach((item) => {
      renewArray.push(Object.assign({}, item));
    });
    return renewArray;
  }
  formatMoney(n) {
    return (+n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  addZero(i) {
    return i < 10 ? "0" + i : i+"";
  }

  getDatePickerDate(dt) {
    if (dt != null) {
      var datestring = dt.getFullYear() + this.addZero(dt.getMonth()+1) + this.addZero(dt.getDate());
      return datestring;
    } else {
      return "";
    }
  }

  getCurrentDate() {
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(),d.getHours(),d.getMinutes());
  }

  getDatePicker() {
    return this._datepickerOpts;
  }
}